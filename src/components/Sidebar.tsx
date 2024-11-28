import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Calendar, Users, PawPrint } from 'lucide-react';

const Sidebar: React.FC = () => {
  const getLinkClass = (isActive: boolean) => {
    return `flex items-center gap-2 p-2 w-full text-left rounded-lg ${
      isActive
        ? 'bg-blue-50 text-blue-700'
        : 'text-gray-700 hover:bg-gray-100'
    }`;
  };

  return (
    <div className="bg-white h-screen w-64 border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Layout className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-800">VetClinic</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => getLinkClass(isActive)}
        >
          <Calendar className="h-5 w-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/guardians"
          className={({ isActive }) => getLinkClass(isActive)}
        >
          <Users className="h-5 w-5" />
          <span>Guardians</span>
        </NavLink>
        <NavLink
          to="/pets"
          className={({ isActive }) => getLinkClass(isActive)}
        >
          <PawPrint className="h-5 w-5" />
          <span>Pets</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;