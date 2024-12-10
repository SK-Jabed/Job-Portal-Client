import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-9xl font-extrabold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or was removed. Please check
          the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-full px-6 py-3 transition-all duration-300"
        >
          <i class="fa-solid fa-house"></i> Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;