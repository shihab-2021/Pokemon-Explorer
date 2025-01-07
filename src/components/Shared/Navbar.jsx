import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
      <div className="relative">
        {/* Gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-xl opacity-50"></div>

        {/* Main navbar content */}
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo section */}
            <Link
              to="/"
              className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              {/* Pokeball icon */}
              <div className="w-8 h-8 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 to-rose-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/90 shadow-glow"></div>
                  </div>
                </div>
              </div>
              <span className="hidden sm:block font-bold text-xl bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                Pokémon Explorer
              </span>
            </Link>

            {/* Navigation links */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              {[
                { to: "/", text: "Home" },
                { to: "/favorites", text: "Favorites" },
              ].map((link) => (
                <Link key={link.text} to={link.to} className="relative group">
                  <span className="text-sm font-medium transition-colors duration-300 text-gray-300 group-hover:text-cyan-500">
                    {link.text}
                  </span>

                  {/* Animated underline */}
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 
                    transform origin-left scale-x-0 transition-transform duration-300 
                    group-hover:scale-x-100"
                  ></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
