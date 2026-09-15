import { Link } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useLogout } from "./hooks/useLogout";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);
   
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between p-5 border-b border-gray-200 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600">
        The Dummy Blog
      </h1>
    
    {/* Add hamburger button */}

    <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl">
  {menuOpen ? "✕" : "☰"}
   </button>

      <div className={`${
   menuOpen ? "flex" : "hidden"
      } w-full flex-col items-center gap-4 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}
        >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="p-1.5 hover:text-pink-600"
        >
          Home
        </Link>

        
        {user && (
          <Link
             to={user ? "/Create" : "/login"}
            onClick={() => setMenuOpen(false)}
            className="p-1.5 hover:text-pink-600"
          >
            New Blog
          </Link>
        )}

        {/* Always visible */}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="p-1.5 hover:text-pink-600"
        >
          Contact Us
        </Link>

        {/* Only logged out */}
        {!user && (
          <>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-1.5 -mt-1 rounded-full border border-blue-600 text-black-600 hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-1.5 -mt-1 rounded-full border border-blue-600 text-black-600 hover:bg-blue-600 hover:text-white transition"
            >
              Signup
            </Link>
          </>
        )}
         {user && (
    <button
       onClick={() => {
         logout();
         setMenuOpen(false);
         }}
     className="px-4 py-1.5 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
    >
      Logout
    </button>
  )}

      </div>

    </nav>
  );
};

export default Navbar;
