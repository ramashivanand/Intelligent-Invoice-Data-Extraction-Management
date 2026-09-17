import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomers } from "../redux/slices/customersSlice";

const CustomersTab = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({});

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedCustomer(customers[index]);
  };

  const handleSave = () => {
    const updatedCustomers = [...customers];
    updatedCustomers[editableIndex] = editedCustomer;
    dispatch(setCustomers(updatedCustomers));
    setEditableIndex(null);
  };

  const handleInputChange = (e, field) => {
    setEditedCustomer({ ...editedCustomer, [field]: e.target.value });
  };

  return (
    <div className="p-6  rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Customers</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">GSTIN</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Total Purchase Amount</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers && customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-blue-50`}
                >
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedCustomer.GSTIN || ""}
                        onChange={(e) => handleInputChange(e, "GSTIN")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      customer?.GSTIN || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedCustomer.CustomerName || ""}
                        onChange={(e) => handleInputChange(e, "CustomerName")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      customer?.CustomerName || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedCustomer.PhoneNumber || ""}
                        onChange={(e) => handleInputChange(e, "PhoneNumber")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      customer?.PhoneNumber || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedCustomer.TotalAmount || ""}
                        onChange={(e) => handleInputChange(e, "TotalAmount")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      customer?.TotalAmount || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedCustomer.Address || ""}
                        onChange={(e) => handleInputChange(e, "Address")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      customer?.TotalAmount || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
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
                  colSpan="5"
                  className="px-4 py-2 text-center text-gray-500"
                >
                  No Customers available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTab;
