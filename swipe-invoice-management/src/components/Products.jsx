import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productsSlice";

const ProductsTab = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const handleEdit = (index) => {
    setEditableIndex(index);
    setEditedProduct(products[index]);
  };

  const handleSave = () => {
    const updatedProducts = [...products];
    updatedProducts[editableIndex] = editedProduct;
    dispatch(setProducts(updatedProducts));
    setEditableIndex(null);
  };

  const handleInputChange = (e, field) => {
    setEditedProduct({ ...editedProduct, [field]: e.target.value });
  };

  return (
    <div className="p-6  rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Products</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Unit Price</th>
              <th className="px-4 py-2 text-left">Discount</th>
              <th className="px-4 py-2 text-left">Tax</th>
              <th className="px-4 py-2 text-left">Price with Tax</th>
              {/* <th className="px-4 py-2 text-left">Amount</th> */}
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-blue-50`}
                >
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.ProductName || ""}
                        onChange={(e) => handleInputChange(e, "ProductName")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      product?.ProductName || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.Quantity || ""}
                        onChange={(e) => handleInputChange(e, "Quantity")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      product?.Quantity || ""
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.UnitPrice || ""}
                        onChange={(e) => handleInputChange(e, "UnitPrice")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      `₹${product?.Price || ""}`
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.Discount || ""}
                        onChange={(e) => handleInputChange(e, "Discount")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      `₹${product?.Discount || ""}`
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.Tax || ""}
                        onChange={(e) => handleInputChange(e, "Tax")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      `₹${product?.Price || ""}`
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.PriceWithTax || ""}
                        onChange={(e) => handleInputChange(e, "PriceWithTax")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      `₹${product?.Price || ""}`
                    )}
                  </td>
                  {/* <td className="px-4 py-2">
                    {editableIndex === index ? (
                      <input
                        value={editedProduct.Amount || ""}
                        onChange={(e) => handleInputChange(e, "Amount")}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    ) : (
                      `₹${product?.Amount || ""}`
                    )}
                  </td> */}
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
                <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTab;
