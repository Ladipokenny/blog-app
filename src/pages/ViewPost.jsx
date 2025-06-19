import React from "react";
import { useParams, Link } from "react-router-dom";
import { timeAgo } from "../utils/timeAgo";

const ViewPost = () => {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold text-[#6D28D9] mb-2">{post.title}</h2>
      <p className="text-gray-500 mb-4">Posted {timeAgo(post.createdAt)}</p>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <Link
        to={
`/admin/edit/${post.id}`
}
        className="inline-block mt-6 text-blue-600 hover:underline">
        Edit this post
      </Link>
    </div>
  );
};

export default ViewPost;