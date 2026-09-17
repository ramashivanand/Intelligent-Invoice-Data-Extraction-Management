import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInvoices } from "../redux/slices/invoiceSlice";

const InvoicesTab = () => {
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedInvoice, setEditedInvoice] = useState({});

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedInvoice(invoices[index]);
  };

  const handleSave = () => {
    const updatedInvoices = [...invoices];
    updatedInvoices[editableIndex] = editedInvoice;
    dispatch(setInvoices(updatedInvoices));
    setEditableIndex(null);
  };

  const handleInputChange = (e, field) => {
    setEditedInvoice({ ...editedInvoice, [field]: e.target.value });
  };

  return (
    <div className="p-8  min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Serial No</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Quantity</th>
              <th className="py-3 px-6 text-left">Tax</th>
              <th className="py-3 px-6 text-left">Total Amount</th>
              <th className="py-3 px-6 text-left">Date</th>
              
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices && invoices.length > 0 ? (
              invoices.map((invoice, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-all`}
                >
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.BillNo || ""}
                        onChange={(e) => handleInputChange(e, "BillNo")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.BillNo || ""
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.CustomerName || ""}
                        onChange={(e) => handleInputChange(e, "CustomerName")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.CustomerName || ""
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.ProductName || ""}
                        onChange={(e) => handleInputChange(e, "ProductName")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.CustomerName || ""
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.Quantity || ""}
                        onChange={(e) => handleInputChange(e, "Quantity")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.CustomerName || ""
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.Tax|| ""}
                        onChange={(e) => handleInputChange(e, "Tax")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.CustomerName || ""
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.TotalAmount || ""}
                        onChange={(e) => handleInputChange(e, "TotalAmount")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      `₹${invoice?.TotalAmount || ""}`
                    )}
                  </td>
                  <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        type="date"
                        value={editedInvoice.Date || ""}
                        onChange={(e) => handleInputChange(e, "Date")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      invoice?.Date || ""
                    )}
                  </td>
                  {/* <td className="py-3 px-6">
                    {editableIndex === index ? (
                      <input
                        value={editedInvoice.IGST || ""}
                        onChange={(e) => handleInputChange(e, "IGST")}
                        className="w-full border rounded px-2 py-1"
                      />
                    ) : (
                      `₹${invoice?.IGST || ""}`
                    )}
                  </td> */}
                  <td className="py-3 px-6 text-center">
                    {editableIndex === index ? (
                      <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-6 px-6 text-center text-gray-600 italic"
                >
                  No invoices available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTab;
