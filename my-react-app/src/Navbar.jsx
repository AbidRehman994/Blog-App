import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between p-5 border-b border-gray-200 bg-white">

      <h1 className="text-3xl font-bold text-pink-600">
        The Dummy Blog
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">

        <Link
          to="/"
          className="p-1.5 hover:text-pink-600"
        >
          Home
        </Link>

        <Link
          to="/create"
          className="p-1.5 hover:text-pink-600"
        >
          New Blog
        </Link>

        <Link
          to="/contact"
          className="p-1.5 hover:text-pink-600"
        >
          Contact Us
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;