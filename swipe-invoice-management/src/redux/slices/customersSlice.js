import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {
    setCustomers: (state, action) => action.payload,
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.CustomerName === action.payload.CustomerName // Ensure this matches the actual key
      );
      if (index >= 0) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { setCustomers, addCustomer, updateCustomer } = customersSlice.actions;
export default customersSlice.reducer;
