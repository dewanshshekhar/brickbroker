import { Link } from "react-router-dom"
import { Bed, Bath, Square, Heart, MapPin, Star } from "lucide-react"

// Removed interface Property and PropertyCardProps

// Function to generate URL slug from property title
const generateSlug = (title) => {
  // Removed type annotation
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

const PropertyCard = ({ property }) => {
  // Removed React.FC<PropertyCardProps>
  // Map specific property titles to predefined slugs for demo pages
  const getPropertySlug = (title) => {
    // Removed type annotation
    const slugMap = {
      // Removed type annotation
      "Luxury Apartment in DLF Phase 1": "luxury-apartment-dlf-phase-1",
      "Modern Villa with Garden": "modern-villa-golf-course",
      "Contemporary Studio Apartment": "contemporary-studio-sohna",
      "Premium Penthouse": "premium-penthouse-mg-road",
      "Spacious Family Home": "luxury-apartment-dlf-phase-1",
      "Elegant Townhouse": "modern-villa-golf-course",
    }

    return slugMap[title] || generateSlug(title)
  }

  const slug = getPropertySlug(property.title)
  const BadgeIcon = property.badgeIcon || Star

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#BC8664]/30 transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/property/${slug}`}>
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {property.badge && (
          <div
            className={`absolute top-4 left-4 ${property.badgeColor || "bg-[#BC8664]"} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse`}
          >
            <BadgeIcon size={12} />
            {property.badge}
          </div>
        )}

        {/* Heart Button */}
        <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200 hover:border-[#BC8664]/30 hover:shadow-xl group-hover:scale-110">
          <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Quick View Button - Shows on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/property/${slug}`}
            className="bg-white/90 backdrop-blur-sm text-[#BC8664] px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-b-3xl"></div>

        <div className="relative z-10">
          {/* Price and Title */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
            <Link to={`/property/${slug}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-[#484848] leading-tight hover:text-[#BC8664] transition-colors line-clamp-2 group-hover:text-[#BC8664]">
                {property.title}
              </h3>
            </Link>
            <span className="text-2xl sm:text-3xl font-bold text-[#BC8664] whitespace-nowrap">{property.price}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#7A7A7A] mb-6">
            <div className="p-1.5 bg-[#BC8664]/10 rounded-lg border border-[#BC8664]/20">
              <MapPin size={14} className="text-[#BC8664]" />
            </div>
            <span className="text-sm md:text-base">{property.location}</span>
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between text-sm md:text-base text-[#7A7A7A] mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 rounded-xl border border-gray-200 group-hover:bg-[#BC8664]/10 group-hover:border-[#BC8664]/20 transition-all">
                <Bed size={16} className="text-[#BC8664]" />
              </div>
              <span className="font-medium">
                {property.beds} Bed{property.beds > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 rounded-xl border border-gray-200 group-hover:bg-[#BC8664]/10 group-hover:border-[#BC8664]/20 transition-all">
                <Bath size={16} className="text-[#BC8664]" />
              </div>
              <span className="font-medium">
                {property.baths} Bath{property.baths > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 rounded-xl border border-gray-200 group-hover:bg-[#BC8664]/10 group-hover:border-[#BC8664]/20 transition-all">
                <Square size={16} className="text-[#BC8664]" />
              </div>
              <span className="font-medium">{property.area}</span>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to={`/property/${slug}`}
            className="w-full bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group-hover:scale-105"
          >
            <span>View Details</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#BC8664]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#BC8664]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping delay-200"></div>
    </div>
  )
}

// Add CSS for line clamping
const styles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

export default PropertyCard
