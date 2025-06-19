import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"))  || []; 
    const postToEdit = posts.find((p) => p.id === parseInt(id));
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = posts.map((p) =>
      p.id === parseInt(id) ? { ...p, title, content } : p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
    navigate("/admin/manage");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-[#6D28D9] mb-4">Edit Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-4 py-2 rounded h-40"
        />
        <button
          type="submit"
          className="bg-[#6D28D9] text-white px-6 py-2 rounded hover:bg-purple-800">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;