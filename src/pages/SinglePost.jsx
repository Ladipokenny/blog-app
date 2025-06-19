import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyPosts } from "../utils/dummyPosts"; // Make sure this file exists and exports the posts
import { FaArrowLeft, FaTag, FaCalendarAlt } from "react-icons/fa";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const post = dummyPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Post not found</h2>
        <button
          className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
          onClick={() => navigate("/")}>
          Go back home
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-purple-700 hover:text-purple-900">
        <FaArrowLeft /> Back
      </button>

      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="flex gap-4 text-sm text-purple-700 font-medium">
          <div className="flex items-center gap-1">
            <FaTag /> {post.category}
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt />{" "}
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </header>

      <section className="prose max-w-none text-gray-800 whitespace-pre-line">
        {post.content || "Full content coming soon..."}
      </section>
    </article>
  );
};

export default SinglePost;