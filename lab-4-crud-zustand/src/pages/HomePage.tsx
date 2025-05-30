import React from "react";
import { Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const HomePage: React.FC = () => {
  const posts = usePostStore((state) => state.posts);
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing stories, insights, and experiences shared through our
          blog posts.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Explore Blog Posts
        </Link>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Posts
          </h3>
          <p className="text-3xl font-bold text-blue-600">{posts.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Published
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {publishedPosts.length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Drafts</h3>
          <p className="text-3xl font-bold text-orange-600">
            {posts.length - publishedPosts.length}
          </p>
        </div>
      </section>

      {/* Recent Posts */}
      {publishedPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.createdAt.toLocaleDateString()}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {publishedPosts.length > 3 && (
            <div className="text-center mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View All Posts
              </Link>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default HomePage;
