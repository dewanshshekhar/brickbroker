"use client"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { MapPin, TrendingUp, Building, Users } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const areas = [
  {
    name: "Golf Course Road",
    count: "145 Properties",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "luxury-apartment-dlf-phase-1",
    priceRange: "₹1.5-5 Cr",
    growth: "+15%",
    type: "Luxury Hub",
  },
  {
    name: "DLF Phase 1",
    count: "89 Properties",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "luxury-apartment-dlf-phase-1",
    priceRange: "₹80L-2 Cr",
    growth: "+12%",
    type: "Premium",
  },
  {
    name: "Sohna Road",
    count: "67 Properties",
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "contemporary-studio-sohna",
    priceRange: "₹50L-1.5 Cr",
    growth: "+18%",
    type: "Emerging",
  },
  {
    name: "MG Road",
    count: "234 Properties",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "premium-penthouse-mg-road",
    priceRange: "₹1-3 Cr",
    growth: "+10%",
    type: "Commercial",
  },
  {
    name: "Sector 57",
    count: "123 Properties",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "premium-penthouse-mg-road",
    priceRange: "₹70L-2 Cr",
    growth: "+8%",
    type: "Residential",
  },
  {
    name: "Dwarka Expressway",
    count: "178 Properties",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "modern-villa-golf-course",
    priceRange: "₹60L-2.5 Cr",
    growth: "+22%",
    type: "New Launch",
  },
  {
    name: "DLF Phase 2",
    count: "156 Properties",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "luxury-apartment-dlf-phase-1",
    priceRange: "₹90L-2.2 Cr",
    growth: "+14%",
    type: "Established",
  },
  {
    name: "Cyber City",
    count: "98 Properties",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "premium-penthouse-mg-road",
    priceRange: "₹1.2-4 Cr",
    growth: "+16%",
    type: "IT Hub",
  },
]

const Areas = () => {
  return (
    <section
      id="areas"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-[#BC8664]/8 to-[#A0734F]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#BC8664]/6 to-[#A0734F]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BC8664]/10 to-[#A0734F]/10 backdrop-blur-sm border border-[#BC8664]/20 rounded-full px-6 py-2 mb-6 text-[#BC8664] text-sm font-medium">
            <MapPin size={16} className="animate-pulse" />
            Prime Locations
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#484848] mb-6 leading-tight">
            Check These Areas
            <span className="block bg-gradient-to-r from-[#BC8664] to-[#A0734F] bg-clip-text text-transparent">
              for Exclusive Deals
            </span>
            <span className="block text-3xl md:text-5xl mt-2 text-[#7A7A7A]">in Gurugram</span>
          </h2>

          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto leading-relaxed">
            Explore Gurugram's most sought-after neighborhoods with the best investment opportunities, premium
            amenities, and excellent connectivity.
          </p>
        </div>

        {/* Areas Slider */}
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
              nextEl: ".areas-next",
              prevEl: ".areas-prev",
            }}
            pagination={{
              clickable: true,
              el: ".areas-pagination",
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
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="areas-swiper pb-16"
          >
            {areas.map((area, index) => (
              <SwiperSlide key={index}>
                <Link to={`/property/${area.slug}`} className="block group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-[#BC8664]/30">
                    {/* Image Container */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={area.image || "/placeholder.svg"}
                        alt={area.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#BC8664] px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/50">
                        {area.type}
                      </div>

                      {/* Growth Indicator */}
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <TrendingUp size={12} />
                        {area.growth}
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                          {area.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1 bg-white/20 rounded-lg border border-white/30">
                            <Building size={14} />
                          </div>
                          <span className="text-white/90 font-medium">{area.count}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-white/20 rounded-lg border border-white/30">
                              <Users size={14} />
                            </div>
                            <span className="text-white/90 text-sm">{area.priceRange}</span>
                          </div>

                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                            <svg
                              className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#BC8664]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="areas-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <button className="areas-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <div className="areas-pagination flex justify-center mt-8 gap-2"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mx-auto">
            <div className="p-2 bg-white/20 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all">
              <MapPin size={20} />
            </div>
            Explore All Areas
          </button>
        </div>
      </div>

      <style jsx>{`
        .areas-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 4px;
        }
        
        .areas-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .areas-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .areas-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .areas-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </section>
  )
}

export default Areas
