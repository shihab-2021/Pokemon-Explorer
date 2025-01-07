import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800">
      <div className="relative">
        {/* Gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-xl opacity-50"></div>

        {/* Main footer content */}
        <div className="container mx-auto px-6 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* Pokeball icon */}
                <div className="w-8 h-8 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 to-rose-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white/90 shadow-glow"></div>
                    </div>
                  </div>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                  Pokémon Explorer
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Explore the vast world of Pokémon with our comprehensive
                database. Find detailed information about your favorite Pokémon,
                their abilities, and more.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { text: "Home", path: "/" },
                  { text: "Favorites", path: "/favorites" },
                ].map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "#", label: "GitHub" },
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                  { icon: FaDiscord, href: "#", label: "Discord" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="w-6 h-6 text-gray-400 hover:text-white relative transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Pokémon Explorer. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
