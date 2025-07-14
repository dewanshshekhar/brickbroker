"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import PropertyCard from "./PropertyCard.jsx" // Updated import
import { Star, Zap, Crown, FlameIcon as Fire } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cards"

const properties = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1.2 Cr",
    title: "Luxury Apartment in DLF Phase 1",
    location: "DLF Phase 1, Gurgaon",
    beds: 3,
    baths: 2,
    area: "1850 sq ft",
    badge: "Exclusive",
    badgeColor: "bg-purple-500",
    badgeIcon: Crown,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2.1 Cr",
    title: "Modern Villa with Garden",
    location: "Golf Course Road, Gurgaon",
    beds: 4,
    baths: 3,
    area: "2500 sq ft",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
    badgeIcon: Fire,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹85 Lac",
    title: "Contemporary Studio Apartment",
    location: "Sohna Road, Gurgaon",
    beds: 1,
    baths: 1,
    area: "850 sq ft",
    badge: "New Launch",
    badgeColor: "bg-blue-500",
    badgeIcon: Zap,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹3.5 Cr",
    title: "Premium Penthouse",
    location: "MG Road, Gurgaon",
    beds: 5,
    baths: 4,
    area: "3200 sq ft",
    badge: "Premium",
    badgeColor: "bg-yellow-500",
    badgeIcon: Star,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1.8 Cr",
    title: "Spacious Family Home",
    location: "Sector 57, Gurgaon",
    beds: 4,
    baths: 3,
    area: "2200 sq ft",
    badge: "Featured",
    badgeColor: "bg-green-500",
    badgeIcon: Star,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹1.6 Cr",
    title: "Elegant Townhouse",
    location: "Dwarka Expressway, Gurgaon",
    beds: 3,
    baths: 3,
    area: "1950 sq ft",
    badge: "Verified",
    badgeColor: "bg-teal-500",
    badgeIcon: Star,
  },
]

const FeaturedProperties = () => {
  return (
    <section
      id="properties"
      className="bg-gradient-to-br from-white via-gray-50 to-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-[#BC8664]/10 to-[#A0734F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-[#BC8664]/8 to-[#A0734F]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BC8664]/10 to-[#A0734F]/10 backdrop-blur-sm border border-[#BC8664]/20 rounded-full px-6 py-2 mb-6 text-[#BC8664] text-sm font-medium">
            <Star size={16} className="animate-pulse" />
            Handpicked Selection
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#484848] mb-6 leading-tight">
            Featured Properties
            <span className="block bg-gradient-to-r from-[#BC8664] to-[#A0734F] bg-clip-text text-transparent">
              Exclusive with Our Agency
            </span>
          </h2>

          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium properties with exclusive deals, special offers, and
            unmatched value in prime Gurugram locations.
          </p>
        </div>

        {/* Properties Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            speed={600}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            simulateTouch={true}
            allowTouchMove={true}
            resistance={true}
            resistanceRatio={0.85}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            threshold={10}
            navigation={{
              nextEl: ".featured-properties-next",
              prevEl: ".featured-properties-prev",
            }}
            pagination={{
              clickable: true,
              el: ".featured-properties-pagination",
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            onSlideChange={() => {}}
            onTransitionStart={() => {}}
            onTransitionEnd={() => {}}
            className="featured-properties-swiper pb-16"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="group">
                  <PropertyCard property={property} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="featured-properties-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          <button className="featured-properties-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="featured-properties-pagination flex justify-center mt-8 gap-2"></div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-3xl font-bold text-[#BC8664] mb-2">500+</div>
            <div className="text-[#7A7A7A]">Properties Sold</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-3xl font-bold text-[#BC8664] mb-2">98%</div>
            <div className="text-[#7A7A7A]">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-3xl font-bold text-[#BC8664] mb-2">25+</div>
            <div className="text-[#7A7A7A]">Areas Covered</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .featured-properties-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 4px;
        }
        
        .featured-properties-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .featured-properties-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .featured-properties-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .featured-properties-swiper .swiper-slide-active {
          transform: scale(1.02);
        }
        
        .featured-properties-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .featured-properties-swiper:hover .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </section>
  )
}

export default FeaturedProperties
