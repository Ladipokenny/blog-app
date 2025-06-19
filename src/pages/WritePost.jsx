import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in both fields.");
      return;
    }

    const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("posts", JSON.stringify([newPost, ...oldPosts]));

    setTitle("");
    setContent("");

    navigate("/admin/manage");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-[#6D28D9] mb-4">
        Write a New Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border px-4 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your content here..."
          className="w-full border px-4 py-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="bg-[#6D28D9] text-white px-6 py-2 rounded hover:bg-purple-800">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default WritePost;