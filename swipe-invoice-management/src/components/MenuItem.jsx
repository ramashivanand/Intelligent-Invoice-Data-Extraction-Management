import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon: Icon, label, isActive, onClick,to }) => {
  return (
    <li
      onClick={onClick}
      className={`pl-4 p-2 flex items-center cursor-pointer 
        ${isActive ? 'text-active' : 'text-customlightgrey'} 
        hover:text-active`}
    >
      <Icon className="w-5 h-5 mr-4" />
      <Link to={to} className="flex-1">
        {label}
      </Link>
     
    </li>
  );
};

export default MenuItem;
