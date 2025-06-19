import React, { useState, useEffect } from "react";
import { categories } from "../utils/Categories";
import { FaBookOpen, FaHeart, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const dummyPosts = [
  {
    id: 1,
    title: "The Rise of AI in Tech",
    category: "Tech",
    date: "2025-06-01",
    excerpt:
      "Artificial Intelligence is transforming the tech world at lightning speed...",
  },
  {
    id: 2,
    title: "Love in the Time of Social Media",
    category: "Love",
    date: "2025-05-28",
    excerpt: "Exploring how digital connections shape modern relationships...",
  },
  {
    id: 3,
    title: "Impressionism and Modern Art",
    category: "Art",
    date: "2025-05-22",
    excerpt: "A dive into how Impressionism changed the art scene forever...",
  },
  {
    id: 4,
    title: "Top 10 Music Festivals Worldwide",
    category: "Music",
    date: "2025-05-18",
    excerpt:
      "Discover the biggest, most exciting music festivals across the globe...",
  },
  {
    id: 5,
    title: "2025 Fashion Trends to Watch",
    category: "Fashion",
    date: "2025-05-15",
    excerpt:
      "Stay ahead with this season’s hottest fashion trends and styles...",
  },
  {
    id: 6,
    title: "Daily Motivation: Stay Strong",
    category: "Motivation",
    date: "2025-05-10",
    excerpt: "Simple tips to keep your motivation levels high every day...",
  },
  {
    id: 7,
    title: "Smart Ways to Manage Your Money",
    category: "Money",
    date: "2025-05-05",
    excerpt: "Financial advice to help you save and invest wisely...",
  },
  {
    id: 8,
    title: "Best Online Education Platforms",
    category: "Education",
    date: "2025-04-30",
    excerpt:
      "Learning never stops — here are the best platforms for online learning...",
  },
  {
    id: 9,
    title: "Mindfulness & Lifestyle Balance",
    category: "Lifestyle",
    date: "2025-04-28",
    excerpt: "How mindfulness practices can improve your daily life...",
  },
  {
    id: 10,
    title: "Mental Health Matters",
    category: "Health",
    date: "2025-04-25",
    excerpt:
      "Breaking stigma and talking openly about mental health challenges...",
  },
  {
    id: 11,
    title: "Faith in Modern Times",
    category: "Faith",
    date: "2025-04-20",
    excerpt: "How spiritual beliefs adapt in today’s fast-paced world...",
  },
  {
    id: 12,
    title: "Cultural Diversity Celebration",
    category: "Culture",
    date: "2025-04-18",
    excerpt: "Embracing cultural diversity through festivals and traditions...",
  },
];

function truncate(text, maxLength = 100) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likes, setLikes] = useState({});
  const navigate = useNavigate();

  // For now, we'll assume admin is true. Replace with proper logic later.
  const isAdmin = true;

  // Load likes from localStorage on mount
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("postLikes")) || {};
    setLikes(storedLikes);
  }, []);

  // Save likes to localStorage on change
  useEffect(() => {
    localStorage.setItem("postLikes", JSON.stringify(likes));
  }, [likes]);

  const handleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
  };

  const filteredPosts =
    selectedCategory === "All"
      ? dummyPosts
      : dummyPosts.filter((post) => post.category === selectedCategory);
return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen py-8 px-4">
      {/* Intro Section */}
      <section className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2 text-[#6D28D9]">
          <FaBookOpen /> Welcome to Ladii Blog
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Explore a variety of topics from tech and art to lifestyle and
          culture. Click a category below to filter posts that interest you!
        </p>
      </section>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === "All"
              ? "bg-[#6D28D9] text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-[#6D28D9] hover:text-white"
          }`}>
          All
        </button>

        {categories.map(({ emoji, name }) => (
          <button
            key={name}
            onClick={() => setSelectedCategory(name)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === name
                ? "bg-[#6D28D9] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-[#6D28D9] hover:text-white"
            }`}>
            {emoji} {name}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No posts found for this category.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(({ id, title, date, excerpt, category }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md p-6 relative hover:shadow-xl transition-shadow group">
              <div
                className="absolute inset-0"
                onClick={() => navigate(
`/post/${id}`
)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    navigate(`/post/${id}`);
                }}
              />
              <div className="relative z-10">
                <div className="text-sm text-[#6D28D9] font-semibold mb-2">
                  {category}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-700 mb-4">{truncate(excerpt, 120)}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(id);
                    }}
                    className="flex items-center gap-1 text-pink-500 hover:scale-110 transition-transform"
                    title="Like this post">
                    <FaHeart />
                    {likes[id] || 0}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;