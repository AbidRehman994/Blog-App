import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center p-5 border-b border-gray-200">

      <h1 className="text-3xl font-bold text-pink-600">
        The Dummy Blog
      </h1>

      <div className="ml-auto flex gap-4">

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