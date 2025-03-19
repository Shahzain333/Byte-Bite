// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  return (
    
    <div className="bg-gray-800 w-72 p-5 text-white h-screen hidden lg:block">
    
      <div className="hidden md:block text-center">
        
        <h2 className="border-2 border-secondary py-2 font-medium px-4 rounded-2xl">
          Byte&Bite Dashboard
        </h2>
      
      </div>
    
      <nav className="mt-10 font-medium">
    
        <NavLink to="/dashboard/add-dish" className="border border-primary block py-2 px-4 hover:bg-gray-700 rounded">
          Add Dish
        </NavLink>

        <NavLink to="/dashboard/add-category" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Add Category
        </NavLink>

        <NavLink to="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Orders
        </NavLink>

        <NavLink to="/reservations" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Reservations
        </NavLink>

      </nav>
      
      <button onClick={onLogout} className="mt-8 py-2 px-4 bg-red-600 rounded text-white w-full hover:bg-red-700">
        Logout
      </button>

    </div>
 
);
};

export default Sidebar;
