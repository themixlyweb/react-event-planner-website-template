import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo-light.webp";

const Footer = () => {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();

  // Smooth scroll to a section by ID
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              {/* Logo */}
              <img
                src={Logo}
                alt="Eventory Logo"
                className="h-[80px] w-auto object-contain cursor-pointer"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Creating unforgettable moments through exquisite design, flawless
              execution, and timeless elegance. Your dream event awaits.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.facebook.com",
                  label: "Facebook",
                  icon: <Facebook className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  href: "https://www.instagram.com",
                  label: "Instagram",
                  icon: <Instagram className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  href: "https://www.twitter.com",
                  label: "Twitter",
                  icon: <Twitter className="h-5 w-5" aria-hidden="true" />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-blush-400 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                { id: "wedding-planning", label: "Wedding Planning" },
                { id: "corporate-events", label: "Corporate Events" },
                { id: "social-celebrations", label: "Social Celebrations" },
                { id: "destination-events", label: "Destination Events" },
                { id: "event-consultation", label: "Event Consultation" },
              ].map(({ id, label }) => (
                <li
                  key={id}
                  className="hover:text-blush-400 transition-colors cursor-pointer"
                  onClick={() => scrollToSection(id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      scrollToSection(id);
                    }
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blush-400" />
                <Link
                  to="tel:+15551234567"
                  className="hover:text-blush-400"
                  aria-label="Call us"
                >
                  +1 (555) 123-4567
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blush-400" />
                <Link
                  to="mailto:hello@eventory.com"
                  className="hover:text-blush-400"
                  aria-label="Email us"
                >
                  hello@eventory.com
                </Link>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-blush-400 mt-1" />
                <address className="not-italic">
                  123 Event Plaza, Suite 456
                  <br />
                  New York, NY 10001
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with copyright and policy link */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Eventory. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blush-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
