import React, { useState } from 'react';
import { FaTachometerAlt, FaUserPlus,FaUser, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa'; // Correct icon imports from 'react-icons/fa'
import { BsCalendar2EventFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { BsHeadset } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
// import Logo from "../assets/Logo.png";
import MenuItem from '../components/MenuItem'; // Import MenuItem component

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu item

  // Function to handle the active state of the menu
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed pl-3 inset-y-0 left-0 transform bg-cardbg w-50 z-50
        sm:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-16 ">
          {/* <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" /> */}
          <h1 className="text-lg font-bold text-[#0A337A]">Invoice</h1>
        </div>

        {/* Main Menu Section */}
        <div className="mt-8">
          <h2 className="px-4 text-sm font-semibold text-customlightgrey uppercase">Main Menu</h2>
          <ul className="mt-4 space-y-4">
            <MenuItem 
              icon={MdDashboard} 
              label="FileUploader" 
              to="/" 
              isActive={activeMenu === 'FileUploader'} 
              onClick={() => handleMenuClick('FileUploader')} 
            />
            <MenuItem 
              icon={FaUserPlus}  // Use FaUserPlus for Recruitment
              label="Invoice" 
              to="/invoice" 
              isActive={activeMenu === 'Invoicet'} 
              onClick={() => handleMenuClick('Invoice')} 
            />
            <MenuItem 
              icon={BsCalendar2EventFill} 
              label="Product" 
              to="/product" 
              isActive={activeMenu === 'Product'} 
              onClick={() => handleMenuClick('Product')} 
            />
            <MenuItem 
              icon={HiUserGroup} 
              label="Customer" 
              to="/customer"
              isActive={activeMenu === 'Customer'} 
              onClick={() => handleMenuClick('Customer')} 
            />
            {/* <MenuItem 
              icon={FaCog} 
              label="Department" 
              isActive={activeMenu === 'department'} 
              onClick={() => handleMenuClick('department')} 
            /> */}
          </ul>
        </div>

        {/* Additional Menu Section */}
       
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaUserPlus,FaUser, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa'; // Correct icon imports from 'react-icons/fa'
// import { BsCalendar2EventFill } from "react-icons/bs";
// import { HiUserGroup } from "react-icons/hi2";
// import { BsHeadset } from "react-icons/bs";
// import { IoSettingsSharp } from "react-icons/io5";
// import { MdDashboard } from "react-icons/md";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div>
//       <ul>
//         {/* Menu Items */}
//         <li>
//           <Link
//             to="/file-uploader"
//             className="flex items-center px-4 py-2 hover:bg-gray-100"
//             onClick={toggleSidebar} // Close sidebar on click (optional)
//           >
//             <MdDashboard className="mr-2" /> File Uploader
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/invoice"
//             className="flex items-center px-4 py-2 hover:bg-gray-100"
//             onClick={toggleSidebar}
//           >
//             <FaUserPlus className="mr-2" /> Invoice
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/product"
//             className="flex items-center px-4 py-2 hover:bg-gray-100"
//             onClick={toggleSidebar}
//           >
//             <BsCalendar2EventFill className="mr-2" /> Product
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/customer"
//             className="flex items-center px-4 py-2 hover:bg-gray-100"
//             onClick={toggleSidebar}
//           >
//             <HiUserGroup className="mr-2" /> Customer
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
