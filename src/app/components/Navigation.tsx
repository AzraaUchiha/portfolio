import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-xl text-neutral-900">
            Azraa Amod
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}