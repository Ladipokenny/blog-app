import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#1a1a2e] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
       
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Ladii Blog
        </Link>

       
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-[#e94560] transition">
            Home
          </Link>
          <Link to="/admin" className="hover:text-[#e94560] transition">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;