
import Home from './components/Home';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
// import Layout from './Layout/layout';
import './App.css'
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import InvoicesTab from './components/Invoices';
import CustomersTab from './components/Customers';
import ProductsTab from './components/Products';
import FileUpload from './components/FileUploader';
import Layout from './Layout/layout';


function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <Layout>
     <Routes >
        {/* <Route index  element={ <FileUpload  /> } /> */}
        <Route path="invoice"   element={ <InvoicesTab  /> } />
        <Route path="customer"   element={ <CustomersTab /> } />
        <Route path="product"   element={ <ProductsTab /> } />
        <Route path="/"   element={ <FileUpload  /> } />
     </Routes>
     </Layout>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App
