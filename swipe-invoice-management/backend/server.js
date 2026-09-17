// server.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from "cors";
import dotenv from 'dotenv';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables
dotenv.config();
const API_KEY = process.env.API_KEY || 'YOUR_GOOGLE_API_KEY';

if (!API_KEY) {
  console.error('Error: API_KEY not set in .env file.');
  process.exit(1);
}

// Initialize Express app
const app = express();
const port = 5000;
app.use(cors());
// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded files to the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use current timestamp to avoid filename conflicts
  },
});

const upload = multer({ storage: storage });

// Endpoint to handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    // Initialize the Google API file manager
    const fileManager = new GoogleAIFileManager(API_KEY);

    // Upload the file to Google API
    const uploadResult = await fileManager.uploadFile(req.file.path, {
      mimeType: req.file.mimetype,
      displayName: req.file.originalname,
    });
    console.log(
      `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
    );

    // Initialize the generative AI client
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Fetch the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content based on the uploaded file
    const result = await model.generateContent([
      "Generate structured data in JSON format with the following fields: Customer, Invoice, Products, Seller. and Customer : {GSTIN,CustomerName ,PhoneNumber,TotalAmount,Address}, Products:{ProductName,Quantity,UnitPrice,Discount,Tax,PriceWithTax},Invoices:{BillNo,CustomerName,ProductName,Quantity,Tax,TotalAmount,Date}",
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType,
        },
      },
    ]);
    // console.log("AI Response:", result.response.text());
    // const final = result.response.text();
    // const data = JSON.parse(final);
    // console.log("Generated Data:", { customers, products, invoices });
    let rawResponse = result.response.text();
    console.log("Raw AI Response:", rawResponse);

    // Sanitize the response (remove backticks and ensure it's valid JSON)
    rawResponse = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();

    // Parse JSON response
    const data = JSON.parse(rawResponse);
    // Return the file URI to the frontend
    res.json({
      success: true,
      customers: data.Customer,
      products: data.Products,
      invoices: data.Invoice,
      seller: data.Seller,
    });
  } catch (error) {
    console.error('Error uploading file to Google API:', error.message);
    res.status(500).json({ success: false, message: 'Failed to upload file' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

