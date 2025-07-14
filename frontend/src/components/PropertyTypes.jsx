"use client"
import { Link } from "react-router-dom"
import { Home, Building, Warehouse, TreePine, Factory, Sparkles, TrendingUp } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const propertyTypes = [
  {
    icon: Home,
    title: "Residential",
    count: "1,234",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "luxury-apartment-dlf-phase-1",
    badge: "Popular",
    badgeColor: "bg-green-500",
  },
  {
    icon: Building,
    title: "Apartments",
    count: "856",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "luxury-apartment-dlf-phase-1",
    badge: "Hot",
    badgeColor: "bg-red-500",
  },
  {
    icon: Home,
    title: "Villas",
    count: "234",
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "modern-villa-golf-course",
    badge: "Luxury",
    badgeColor: "bg-purple-500",
  },
  {
    icon: Warehouse,
    title: "Studios",
    count: "345",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "contemporary-studio-sohna",
    badge: "New",
    badgeColor: "bg-blue-500",
  },
  {
    icon: TreePine,
    title: "Farm Houses",
    count: "67",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "premium-penthouse-mg-road",
    badge: "Exclusive",
    badgeColor: "bg-yellow-500",
  },
  {
    icon: Factory,
    title: "Commercial",
    count: "123",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "modern-villa-golf-course",
    badge: "Trending",
    badgeColor: "bg-orange-500",
  },
]

const PropertyTypes = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#BC8664]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BC8664]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#BC8664]/10 backdrop-blur-sm border border-[#BC8664]/20 rounded-full px-6 py-2 mb-6 text-[#BC8664] text-sm font-medium">
            <Sparkles size={16} className="animate-pulse" />
            Property Categories
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#484848] mb-6 leading-tight">
            What Type of Properties
            <span className="block bg-gradient-to-r from-[#BC8664] to-[#A0734F] bg-clip-text text-transparent">
              You Can Buy or Sell
            </span>
            <span className="block text-3xl md:text-5xl mt-2 text-[#7A7A7A]">Through Us</span>
          </h2>

          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of premium properties across Gurugram, from luxury apartments to commercial
            spaces.
          </p>
        </div>

        {/* Property Types Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            spaceBetween={30}
            speed={600}
            navigation={{
              nextEl: ".property-types-next",
              prevEl: ".property-types-prev",
            }}
            pagination={{
              clickable: true,
              el: ".property-types-pagination",
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "slide",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                effect: "slide",
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: "coverflow",
              },
            }}
            className="property-types-swiper pb-16"
          >
            {propertyTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <SwiperSlide key={index} className="max-w-sm">
                  <Link to={`/property/${type.slug}`} className="block group">
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-[#BC8664]/20">
                      {/* Badge */}
                      <div
                        className={`absolute top-4 left-4 z-20 ${type.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse`}
                      >
                        {type.badge}
                      </div>

                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={type.image || "/placeholder.svg"}
                          alt={type.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Floating Icon */}
                        <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <Icon size={24} className="text-white" />
                        </div>

                        {/* Trending Indicator */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                          <TrendingUp size={12} />
                          +12%
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative">
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-b-3xl"></div>

                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-[#484848] mb-2 group-hover:text-[#BC8664] transition-colors">
                            {type.title}
                          </h3>
                          <p className="text-[#7A7A7A] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#BC8664] rounded-full animate-pulse"></span>
                            {type.count} Properties Available
                          </p>

                          {/* Action Button */}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[#BC8664] font-medium">Explore Now</span>
                            <div className="w-10 h-10 bg-[#BC8664]/10 rounded-full flex items-center justify-center group-hover:bg-[#BC8664] transition-all duration-300">
                              <svg
                                className="w-5 h-5 text-[#BC8664] group-hover:text-white transition-colors transform group-hover:translate-x-1"
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
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="property-types-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <button className="property-types-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <div className="property-types-pagination flex justify-center mt-8 gap-2"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mx-auto">
            <div className="p-2 bg-white/20 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all">
              <Home size={20} />
            </div>
            View All Properties
          </button>
        </div>
      </div>

      <style jsx>{`
        .property-types-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #BC8664;
          opacity: 0.3;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 4px;
        }
        
        .property-types-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 0 3px rgba(188, 134, 100, 0.3);
        }
        
        .property-types-swiper .swiper-slide {
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .property-types-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

export default PropertyTypes
