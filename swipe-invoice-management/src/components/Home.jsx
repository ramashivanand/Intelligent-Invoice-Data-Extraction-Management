import React from 'react';

import InvoicesTab from './Invoices';
import ProductsTab from './Products';
import CustomersTab from './Customers';
import FileUploader from './FileUploader';
import Sidebar from './Sidebar';

function Home() {
  return (
   
      <div className="App">
        <Sidebar />
        <FileUploader />
        <div className="tabs">
          
          <InvoicesTab />
          <ProductsTab />
          <CustomersTab />
        </div>
      </div>
   
  );
}

export default Home;
