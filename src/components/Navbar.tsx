
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Munchies</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-600 hover:text-gray-900 transition-colors">
              Menu
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#menu"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
