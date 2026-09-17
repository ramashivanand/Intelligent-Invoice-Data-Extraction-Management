import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    setInvoices: (state, action) => action.payload,
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.BillNo === action.payload.BillNo // Ensure this matches the actual key
      );
      if (index >= 0) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setInvoices, addInvoice, updateInvoice } = invoicesSlice.actions;
export default invoicesSlice.reducer;
