// // Make sure to include these imports:
// import { GoogleAIFileManager } from "@google/generative-ai/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const API_KEY = "AIzaSyCkw0OtxynKO4clsxtf4YV0-FZ0aVdmeqQ";
// const fileManager = new GoogleAIFileManager(process.env.API_KEY);

// const uploadResult = await fileManager.uploadFile(
//   `/Users/suryaalavala/Desktop/dataextraction/swipe-invoice-management/src/components/invoiceimage.jpg`,
//   {
//     mimeType: "image/jpeg",
//     displayName: "Jetpack drawing",
//   },
// );
// // View the response.
// console.log(
//   `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,
// );

// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// const result = await model.generateContent([
//   "Tell me about this image.",
//   {
//     fileData: {
//       fileUri: uploadResult.file.uri,
//       mimeType: uploadResult.file.mimeType,
//     },
//   },
// ]);
// console.log(result.response.text());
// Import required modules
// import path from "path";
// import { GoogleAIFileManager } from "@google/generative-ai/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();
// const API_KEY = "AIzaSyCkw0OtxynKO4clsxtf4YV0-FZ0aVdmeqQ";
// // Constants
// // const API_KEY = process.env.API_KEY;
// if (!API_KEY) {
//   console.error("Error: API_KEY not set in .env file.");
//   process.exit(1);
// }

// (async () => {
//   try {
//     // Initialize the file manager with the API key
//     const fileManager = new GoogleAIFileManager(API_KEY);

//     // Resolve file path
//     const filePath = path.resolve(__dirname, "/Users/suryaalavala/Desktop/dataextraction/swipe-invoice-management/src/components/invoiceimage.jpg");

//     // Upload the file
//     const uploadResult = await fileManager.uploadFile(filePath, {
//       mimeType: "image/jpg",
//       displayName: "Invoice Image",
//     });

//     // Log upload details
//     console.log(
//       `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
//     );

//     // Initialize the generative AI client
//     const genAI = new GoogleGenerativeAI(API_KEY);

//     // Fetch the generative model
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // Generate content based on the uploaded file
//     const result = await model.generateContent([
//       "Tell me about this image.",
//       {
//         fileData: {
//           fileUri: uploadResult.file.uri,
//           mimeType: uploadResult.file.mimeType,
//         },
//       },
//     ]);

//     // Output the AI response
//     console.log("AI Response:", result.response.text());
//   } catch (error) {
//     // Handle errors
//     console.error("An error occurred:", error.message);
//     console.error(error);
//   }
// })();
import path from "path";
import { fileURLToPath } from "url";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();
const API_KEY = process.env.API_KEY ;

if (!API_KEY) {
  console.error("Error: API_KEY not set in .env file.");
  process.exit(1);
}

(async () => {
  try {
    // Initialize the file manager with the API key
    const fileManager = new GoogleAIFileManager(API_KEY);

    // Resolve file path
    const filePath = path.resolve(
      __dirname,
      "../utils/invoiceimage.jpg"
    );
   
    // Upload the file
    const uploadResult = await fileManager.uploadFile(filePath, {
      mimeType: "image/jpeg",
      displayName: "Invoice Image",
    });

    // Log upload details
    console.log(
      `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
    );

    // Initialize the generative AI client
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Fetch the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content based on the uploaded file
    const result = await model.generateContent([
      "Tell me about this image.",
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType,
        },
      },
    ]);

    // Output the AI response
    console.log("AI Response:", result.response.text());
  } catch (error) {
    // Handle errors
    console.error("An error occurred:", error.message);
    console.error(error);
  }
})();
