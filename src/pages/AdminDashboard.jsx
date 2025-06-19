import React from "react";
import { FaUserShield, FaPenFancy, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#6D28D9] flex items-center gap-2">
        <FaUserShield /> Admin Dashboard
      </h2>

      <Link to="/admin/write">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <FaPenFancy className="text-4xl text-[#6D28D9] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Write a New Post</h3>
          <p className="text-gray-600">
            Create a new article to share with the world.
          </p>
        </div>
      </Link>

      <Link to="/admin/manage">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
          <FaFolderOpen className="text-4xl text-[#6D28D9] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Manage Posts</h3>
          <p className="text-gray-600">
            Edit or delete existing posts from your blog.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AdminDashboard;