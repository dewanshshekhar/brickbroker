"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { User, ChevronDown, Menu, X } from "lucide-react"

const Header = () => {
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false)
  const [isAgentsDropdownOpen, setIsAgentsDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Refs for dropdown containers
  const propertiesRef = useRef(null) // Removed HTMLDivElement
  const agentsRef = useRef(null) // Removed HTMLDivElement
  const aboutRef = useRef(null) // Removed HTMLDivElement

  // Timeout refs for delayed closing
  const propertiesTimeoutRef = useRef(null) // Removed NodeJS.Timeout
  const agentsTimeoutRef = useRef(null) // Removed NodeJS.Timeout
  const aboutTimeoutRef = useRef(null) // Removed NodeJS.Timeout

  const isActive = (path) => location.pathname === path // Removed type annotation

  // Helper function to handle mouse enter with immediate opening
  const handleMouseEnter = (dropdown) => {
    // Removed type annotation
    // Clear any existing timeout for this dropdown
    switch (dropdown) {
      case "properties":
        if (propertiesTimeoutRef.current) {
          clearTimeout(propertiesTimeoutRef.current)
          propertiesTimeoutRef.current = null
        }
        setIsPropertiesDropdownOpen(true)
        break
      case "agents":
        if (agentsTimeoutRef.current) {
          clearTimeout(agentsTimeoutRef.current)
          agentsTimeoutRef.current = null
        }
        setIsAgentsDropdownOpen(true)
        break
      case "about":
        if (aboutTimeoutRef.current) {
          clearTimeout(aboutTimeoutRef.current)
          aboutTimeoutRef.current = null
        }
        setIsAboutDropdownOpen(true)
        break
    }
  }

  // Helper function to handle mouse leave with delayed closing
  const handleMouseLeave = (dropdown) => {
    // Removed type annotation
    switch (dropdown) {
      case "properties":
        propertiesTimeoutRef.current = setTimeout(() => {
          setIsPropertiesDropdownOpen(false)
        }, 200)
        break
      case "agents":
        agentsTimeoutRef.current = setTimeout(() => {
          setIsAgentsDropdownOpen(false)
        }, 200)
        break
      case "about":
        aboutTimeoutRef.current = setTimeout(() => {
          setIsAboutDropdownOpen(false)
        }, 200)
        break
    }
  }

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (propertiesTimeoutRef.current) clearTimeout(propertiesTimeoutRef.current)
      if (agentsTimeoutRef.current) clearTimeout(agentsTimeoutRef.current)
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
    }
  }, [])

  return (
    <header
      className="shadow-sm sticky top-0 z-50 bg-white"
      style={{
        background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 50%, #fafafa 100%)",
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(188, 134, 100, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(188, 134, 100, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(188, 134, 100, 0.02) 0%, transparent 50%)
        `,
        borderBottom: "1px solid rgba(188, 134, 100, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.PNG" alt="Brick Broker" className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-none" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-gray-200 hover:border-[#BC8664] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-[#484848]" />
            ) : (
              <Menu size={20} className="text-[#484848]" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 md:space-x-8 text-sm md:text-base">
            <Link
              to="/"
              className={`transition-colors whitespace-nowrap ${isActive("/") ? "text-[#BC8664]" : "text-gray-700 hover:text-[#BC8664]"}`}
            >
              Home
            </Link>

            <div
              ref={propertiesRef}
              className="relative group"
              onMouseEnter={() => handleMouseEnter("properties")}
              onMouseLeave={() => handleMouseLeave("properties")}
            >
              <Link
                to="/properties"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap ${isActive("/properties") ? "text-[#BC8664]" : "text-gray-700 hover:text-[#BC8664]"}`}
              >
                Properties
                <div className="p-0.5 md:p-1 border border-gray-200 rounded-lg hover:border-[#BC8664] hover:shadow-sm transition-all">
                  <ChevronDown
                    size={12}
                    className={`md:w-4 md:h-4 transition-transform duration-200 ${isPropertiesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </Link>

              {/* Extended hover area - invisible bridge */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

              {isPropertiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <Link
                    to="/properties"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    All Properties
                  </Link>
                  <Link
                    to="/properties/for-sale"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    For Sale
                  </Link>
                  <Link
                    to="/properties/for-rent"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    For Rent
                  </Link>
                  <Link
                    to="/properties/featured"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Featured Properties
                  </Link>
                </div>
              )}
            </div>

            <div
              ref={agentsRef}
              className="relative group"
              onMouseEnter={() => handleMouseEnter("agents")}
              onMouseLeave={() => handleMouseLeave("agents")}
            >
              <Link
                to="/agents"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap ${isActive("/agents") ? "text-[#BC8664]" : "text-gray-700 hover:text-[#BC8664]"}`}
              >
                Agents
                <div className="p-0.5 md:p-1 border border-gray-200 rounded-lg hover:border-[#BC8664] hover:shadow-sm transition-all">
                  <ChevronDown
                    size={12}
                    className={`md:w-4 md:h-4 transition-transform duration-200 ${isAgentsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </Link>

              {/* Extended hover area - invisible bridge */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

              {isAgentsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <Link
                    to="/agents/all"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    All Agents
                  </Link>
                  <Link
                    to="/agents/top-rated"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Top Rated Agents
                  </Link>
                </div>
              )}
            </div>

            <div
              ref={aboutRef}
              className="relative group"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <Link
                to="/about"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap ${isActive("/about") ? "text-[#BC8664]" : "text-gray-700 hover:text-[#BC8664]"}`}
              >
                About
                <div className="p-0.5 md:p-1 border border-gray-200 rounded-lg hover:border-[#BC8664] hover:shadow-sm transition-all">
                  <ChevronDown
                    size={12}
                    className={`md:w-4 md:h-4 transition-transform duration-200 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </Link>

              {/* Extended hover area - invisible bridge */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent" />

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <Link
                    to="/about/our-story"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/about/why-choose-us"
                    className="block px-4 py-3 text-gray-700 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Why Choose Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`transition-colors whitespace-nowrap ${isActive("/contact") ? "text-[#BC8664]" : "text-gray-700 hover:text-[#BC8664]"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Profile */}
          <div className="hidden md:flex items-center">
            <Link
              to="/signin"
              className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-600 hover:text-[#BC8664] transition-colors"
            >
              <div className="p-1 md:p-2 border border-gray-200 rounded-lg hover:border-[#BC8664] hover:shadow-sm transition-all">
                <User size={14} className="md:w-4 md:h-4" />
              </div>
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors ${isActive("/") ? "text-[#BC8664] bg-[#BC8664]/5" : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"}`}
              >
                Home
              </Link>

              {/* Properties Mobile Menu */}
              <div>
                <Link
                  to="/properties"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${isActive("/properties") ? "text-[#BC8664] bg-[#BC8664]/5" : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"}`}
                >
                  Properties
                </Link>
                <div className="pl-8 space-y-1">
                  <Link
                    to="/properties/for-sale"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    For Sale
                  </Link>
                  <Link
                    to="/properties/for-rent"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    For Rent
                  </Link>
                  <Link
                    to="/properties/featured"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Featured Properties
                  </Link>
                </div>
              </div>

              {/* Agents Mobile Menu */}
              <div>
                <Link
                  to="/agents"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${isActive("/agents") ? "text-[#BC8664] bg-[#BC8664]/5" : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"}`}
                >
                  Agents
                </Link>
                <div className="pl-8 space-y-1">
                  <Link
                    to="/agents/all"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    All Agents
                  </Link>
                  <Link
                    to="/agents/top-rated"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Top Rated Agents
                  </Link>
                </div>
              </div>

              {/* About Mobile Menu */}
              <div>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${isActive("/about") ? "text-[#BC8664] bg-[#BC8664]/5" : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"}`}
                >
                  About
                </Link>
                <div className="pl-8 space-y-1">
                  <Link
                    to="/about/our-story"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/about/why-choose-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                  >
                    Why Choose Us
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors ${isActive("/contact") ? "text-[#BC8664] bg-[#BC8664]/5" : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"}`}
              >
                Contact
              </Link>

              {/* Mobile Profile */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  to="/signin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-600 hover:text-[#BC8664] hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 border border-gray-200 rounded-lg mr-3">
                    <User size={16} />
                  </div>
                  Sign In / Profile
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  )
}

export default Header
