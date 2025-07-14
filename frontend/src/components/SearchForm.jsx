"use client"

import { useState } from "react"
import { Search, MapPin, Home, Tag, ChevronDown } from "lucide-react"

const SearchForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    category: "",
    status: "",
  })

  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false)

  const statusOptions = ["Listing Status", "Active", "Open House", "Ready to Move", "Under Construction"]

  const handleSubmit = (e) => {
    // Removed React.FormEvent
    e.preventDefault()
    console.log("Search:", formData)
  }

  const handleStatusSelect = (status) => {
    // Removed type annotation
    setFormData({ ...formData, status })
    setIsStatusDropdownOpen(false)
  }

  return (
    <div className="bg-white rounded-2xl md:rounded-full shadow-lg p-4 md:p-2 max-w-5xl mx-auto relative z-10">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-2">
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 border border-gray-200 rounded-lg">
            <MapPin className="text-[#7A7A7A]" size={16} />
          </div>
          <input
            type="text"
            placeholder="Search by location"
            className="w-full pl-14 pr-4 py-4 md:py-3 rounded-xl md:rounded-full border-0 focus:outline-none focus:ring-0 text-[#484848] text-base placeholder-gray-500"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 border border-gray-200 rounded-lg">
            <Home className="text-[#7A7A7A]" size={16} />
          </div>
          <select
            className="w-full pl-14 pr-4 py-4 md:py-3 rounded-xl md:rounded-full border-0 focus:outline-none focus:ring-0 text-[#484848] appearance-none bg-transparent text-base"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
            <option value="farmhouse">Farm House</option>
          </select>
        </div>

        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 border border-gray-200 rounded-lg">
            <Tag className="text-[#7A7A7A]" size={16} />
          </div>
          <select
            className="w-full pl-14 pr-4 py-4 md:py-3 rounded-xl md:rounded-full border-0 focus:outline-none focus:ring-0 text-[#484848] appearance-none bg-transparent text-base"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Sell or Rent</option>
            <option value="sell">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </div>

        <div
          className="relative z-50"
          onMouseEnter={() => setIsStatusDropdownOpen(true)}
          onMouseLeave={() => setIsStatusDropdownOpen(false)}
        >
          <button
            type="button"
            className="bg-white text-[#484848] px-6 py-4 md:py-3 rounded-xl md:rounded-full flex items-center justify-center gap-2 transition-colors font-medium whitespace-nowrap border-0 focus:outline-none focus:ring-0 w-full md:w-auto text-base"
          >
            <span>{formData.status || "Property Status"}</span>
            <div className="p-1 border border-gray-200 rounded-lg hover:border-[#BC8664] transition-all">
              <ChevronDown size={14} className={`transition-transform ${isStatusDropdownOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

          {isStatusDropdownOpen && (
            <div className="absolute top-full left-0 md:right-0 mt-2 w-full md:w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[100]">
              {statusOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleStatusSelect(option)}
                  className={`block w-full text-left px-4 py-3 transition-colors text-base ${
                    index === 0
                      ? "text-gray-500 font-medium cursor-default"
                      : "text-gray-700 hover:text-[#BC8664] hover:bg-gray-50"
                  }`}
                  disabled={index === 0}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Button - Mobile Only */}
        <button
          type="submit"
          className="md:hidden w-full bg-[#BC8664] hover:bg-[#A0734F] text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Search size={20} />
          Search Properties
        </button>
      </form>
    </div>
  )
}

export default SearchForm
