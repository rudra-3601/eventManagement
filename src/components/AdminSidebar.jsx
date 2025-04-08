import React from "react";
import { Home, PlusCircle, Users, Settings,CalendarDays } from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside className="bg-purple-600 text-white w-full md:w-60 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
      <nav className="space-y-4">
        <a
          href="#"
          className="flex items-center space-x-3 hover:bg-purple-500 p-3 rounded-lg transition"
        >
          <Home size={20} />
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 hover:bg-purple-500 p-3 rounded-lg transition"
        >
          <PlusCircle size={20} />
          <span>Post Event</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 hover:bg-purple-500 p-3 rounded-lg transition"
        >
          <Users size={20} />
          <span>Manage Users</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 hover:bg-purple-500 p-3 rounded-lg transition"
        >
          <Users size={20} />
          <span>Manage Events</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 hover:bg-purple-500 p-3 rounded-lg transition"
        >
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
