import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productsSlice";
import { setCustomers } from "../redux/slices/customersSlice";
import { setInvoices } from "../redux/slices/invoiceSlice";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const currentProducts = useSelector((state) => state.products || []);
  const currentCustomers = useSelector((state) => state.customers || []);
  const currentInvoices = useSelector((state) => state.invoices || []);

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploadStatus("Uploading...");

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setUploadStatus("File uploaded successfully!");

        const newCustomers = [response.data.customers] || [];
        const newProducts = response.data.products || [];
        const newInvoices = [response.data.invoices] || [];

        const mergedCustomers = [...currentCustomers, ...newCustomers];
        const mergedProducts = [...currentProducts, ...newProducts];
        const mergedInvoices = [...currentInvoices, ...newInvoices];

        dispatch(setCustomers(mergedCustomers));
        dispatch(setProducts(mergedProducts));
        dispatch(setInvoices(mergedInvoices));
      } else {
        setUploadStatus("Failed to upload file.");
      }
    } catch (error) {
      setUploadStatus("Error uploading file.");
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-9 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload a File</h2>
      <div className="w-full max-w-sm">
        <input
          type="file"
          onChange={handleFileChange}
          accept="/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0 file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      <button
        onClick={handleFileUpload}
        className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
      >
        Upload
      </button>
      <p className={`mt-4 text-sm ${uploadStatus.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
        {uploadStatus}
      </p>
    </div>
  );
};

export default FileUpload;
