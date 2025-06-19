import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const formatTimeAgo = (timestamp) => {
  const seconds = Math.floor((Date.now() - new Date(timestamp)) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (let i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count > 0) {
      return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
};

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const deletePost = (id) => {
    const updated = posts.filter((post) => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(updated));
    setPosts(updated);
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-[#6D28D9] mb-6">Manage Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts available.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {post.createdAt
                  ? formatTimeAgo(post.createdAt)
                  : "Unknown date"}
              </p>
              <p className="text-gray-700 mb-4">
                {post.content.slice(0, 100)}...
              </p>
              <div className="flex gap-4">
                <button
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                  onClick={() => handleEdit(post.id)}>
                  <FaEdit /> Edit
                </button>
                <button
                  className="flex items-center gap-1 text-red-600 hover:underline"
                  onClick={() => deletePost(post.id)}>
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManagePosts;
