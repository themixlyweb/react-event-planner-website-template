import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "/logo.webp";
import LogoLight from "/logo-light.webp";

const Header = () => {
  // State to track if the page is scrolled past threshold (50px)
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll event handler to update isScrolled state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handles navigation clicks:
   * - If on homepage, smoothly scroll to section and update URL hash
   * - Otherwise, navigate to homepage and pass sectionId in state for scrolling after navigation
   */
  const handleNavClick = (sectionId: string) => {
    const isHome = location.pathname === "/";

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without adding history entry
        history.replaceState(null, "", `#${sectionId}`);
      }
    } else {
      // Navigate to homepage with state to scroll to section after load
      navigate("/", { state: { scrollToId: sectionId } });
    }
  };

  // Navigation items for header menu
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "#" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "#" },
    { label: "Contact", id: "#" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo - switches based on scroll state */}
          <div className="flex-shrink-0">
            <img
              src={isScrolled ? Logo : LogoLight}
              alt="Eventory Logo"
              className="h-[50px] w-auto object-contain hover:cursor-pointer"
              onClick={() => handleNavClick("hero")}
            />
          </div>

          {/* Desktop Navigation - visible from md screens upwards */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blush-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button - visible below md */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Hamburger icon lines */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-0.5 mb-1 ${
                  isScrolled ? "bg-gray-700" : "bg-gray-100"
                }`}
              />
            ))}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 flex flex-col space-y-4 bg-white shadow-lg p-6 rounded-md"
          >
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  handleNavClick(id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-gray-700 hover:text-blush-600 transition-colors duration-200"
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
