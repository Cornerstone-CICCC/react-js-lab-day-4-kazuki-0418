import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlogListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PostFormPage from "./pages/PostFormPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Blog Listing */}
          <Route path="/blog" element={<BlogListPage />} />

          {/* Blog Detail */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* Add New Post */}
          <Route path="/blog/new" element={<PostFormPage />} />

          {/* Edit Post */}
          <Route path="/blog/edit/:id" element={<PostFormPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

// 404 Not Found Page Component
const NotFoundPage: React.FC = () => {
  return (
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
          d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <h1 className="mt-2 text-4xl font-bold text-gray-900">404</h1>
      <h3 className="mt-2 text-lg font-medium text-gray-900">Page not found</h3>
      <p className="mt-1 text-sm text-gray-500">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default App;
