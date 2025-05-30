import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const BlogListPage: React.FC = () => {
  const { posts, togglePublished } = usePostStore();
  const [filter, setFilter] = useState<"all" | "published" | "drafts">("all");

  const filteredPosts = posts.filter((post) => {
    switch (filter) {
      case "published":
        return post.published;
      case "drafts":
        return !post.published;
      default:
        return true;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-1">
            Manage and view all your blog posts
          </p>
        </div>
        <Link
          to="/blog/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create New Post
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { key: "all", label: "All Posts", count: posts.length },
            {
              key: "published",
              label: "Published",
              count: posts.filter((p) => p.published).length,
            },
            {
              key: "drafts",
              label: "Drafts",
              count: posts.filter((p) => !p.published).length,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                filter === tab.key
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No posts found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {filter === "all"
              ? "Get started by creating a new post."
              : `No ${filter} posts found.`}
          </p>
          {filter === "all" && (
            <div className="mt-6">
              <Link
                to="/blog/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create New Post
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>Created: {post.createdAt.toLocaleDateString()}</span>
                    <span>Updated: {post.updatedAt.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="ml-6 flex items-center space-x-2">
                  <button
                    onClick={() => togglePublished(post.id)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      post.published
                        ? "text-yellow-700 bg-yellow-100 hover:bg-yellow-200"
                        : "text-green-700 bg-green-100 hover:bg-green-200"
                    }`}
                  >
                    {post.published ? "Unpublish" : "Publish"}
                  </button>
                  <Link
                    to={`/blog/${post.id}`}
                    className="px-3 py-1 rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogListPage;
