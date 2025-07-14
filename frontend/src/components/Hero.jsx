"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Home, Tag, ChevronDown, Calendar } from "lucide-react"

const Hero = () => {
  const [formData, setFormData] = useState({
    location: "",
    budget: "",
    propertyType: "",
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e) => {
    // Removed React.FormEvent
    e.preventDefault()
    console.log("Search:", formData)
  }

  const budgetRanges = [
    "Budget Range",
    "Under ₹50 Lac",
    "₹50 Lac - ₹1 Cr",
    "₹1 Cr - ₹2 Cr",
    "₹2 Cr - ₹5 Cr",
    "Above ₹5 Cr",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(188, 134, 100, 0.95) 0%, rgba(160, 115, 79, 0.9) 50%, rgba(139, 94, 60, 0.95) 100%),
          url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 text-white/90 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Trusted by 1000+ Happy Families in Gurugram
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent animate-gradient">
              Dream Home
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">in Gurugram</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Discover exclusive properties with Brick Broker, your trusted real estate partner.
            <span className="block mt-2">Premium homes, transparent deals, exceptional service since 2024.</span>
          </p>

          {/* Search Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto mb-8 border border-white/20">
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Location Input */}
                <div className="flex-1 relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-[#BC8664]/10 rounded-xl border border-[#BC8664]/20 group-focus-within:bg-[#BC8664]/20 transition-all">
                    <MapPin className="text-[#BC8664]" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location (e.g., DLF Phase 1)"
                    className="w-full pl-16 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#BC8664] focus:ring-4 focus:ring-[#BC8664]/20 transition-all text-[#484848] text-lg placeholder-gray-500 bg-white/80 backdrop-blur-sm"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Budget Select */}
                <div className="flex-1 relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-[#BC8664]/10 rounded-xl border border-[#BC8664]/20 group-focus-within:bg-[#BC8664]/20 transition-all">
                    <Tag className="text-[#BC8664]" size={20} />
                  </div>
                  <select
                    className="w-full pl-16 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#BC8664] focus:ring-4 focus:ring-[#BC8664]/20 transition-all text-[#484848] appearance-none bg-white/80 backdrop-blur-sm text-lg cursor-pointer"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={index === 0 ? "" : range} disabled={index === 0}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BC8664] pointer-events-none"
                    size={20}
                  />
                </div>

                {/* Property Type Select */}
                <div className="flex-1 relative group">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-[#BC8664]/10 rounded-xl border border-[#BC8664]/20 group-focus-within:bg-[#BC8664]/20 transition-all">
                    <Home className="text-[#BC8664]" size={20} />
                  </div>
                  <select
                    className="w-full pl-16 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#BC8664] focus:ring-4 focus:ring-[#BC8664]/20 transition-all text-[#484848] appearance-none bg-white/80 backdrop-blur-sm text-lg cursor-pointer"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="studio">Studio</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="farmhouse">Farm House</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BC8664] pointer-events-none"
                    size={20}
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="lg:w-auto w-full bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <div className="p-2 bg-white/20 rounded-xl border border-white/30">
                    <Search size={20} />
                  </div>
                  Search Properties
                </button>
              </form>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="p-2 bg-white/20 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all">
                <Home size={20} />
              </div>
              Browse Properties
            </button>

            <button className="group bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-[#484848] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="p-2 bg-black/10 rounded-xl border border-black/20 group-hover:bg-black/20 transition-all">
                <Calendar size={20} />
              </div>
              Schedule a Visit
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">500+ Properties Sold</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium">25+ Areas Covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
