"use client"
import { Link } from "react-router-dom"
import { Calendar, User, Clock, ArrowRight, Newspaper, TrendingUp } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const newsArticles = [
  {
    id: 1,
    title: "Top 10 Areas to Invest in Gurugram Real Estate 2024",
    excerpt:
      "Discover the most promising areas for real estate investment in Gurugram this year with detailed market analysis and growth projections.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 15, 2024",
    author: "Suraj Adhwariya",
    slug: "contemporary-studio-sohna",
    readTime: "5 min read",
    category: "Investment",
    trending: true,
  },
  {
    id: 2,
    title: "Understanding Property Prices in DLF Phases",
    excerpt:
      "A comprehensive analysis of property pricing trends across different DLF phases and what buyers should expect in 2024.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 12, 2024",
    author: "Priya Sharma",
    slug: "luxury-apartment-dlf-phase-1",
    readTime: "7 min read",
    category: "Market Analysis",
    trending: false,
  },
  {
    id: 3,
    title: "Luxury Housing Market Outlook for 2024",
    excerpt:
      "Expert insights into the luxury real estate market trends, predictions, and opportunities for high-end property investments.",
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 10, 2024",
    author: "Rahul Gupta",
    slug: "luxury-apartment-dlf-phase-1",
    readTime: "6 min read",
    category: "Luxury",
    trending: true,
  },
  {
    id: 4,
    title: "Commercial Real Estate Boom in Cyber City",
    excerpt:
      "How Cyber City is becoming the new hub for commercial real estate investments with IT companies expansion.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 8, 2024",
    author: "Anjali Verma",
    slug: "premium-penthouse-mg-road",
    readTime: "4 min read",
    category: "Commercial",
    trending: false,
  },
  {
    id: 5,
    title: "Smart Homes: The Future of Residential Living",
    excerpt:
      "Exploring the latest smart home technologies and their impact on property values in modern residential complexes.",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 5, 2024",
    author: "Vikash Kumar",
    slug: "premium-penthouse-mg-road",
    readTime: "8 min read",
    category: "Technology",
    trending: true,
  },
  {
    id: 6,
    title: "Infrastructure Development Impact on Property Prices",
    excerpt:
      "How new metro lines and highways are affecting real estate prices and investment opportunities in Gurugram.",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "March 3, 2024",
    author: "Neha Singh",
    slug: "premium-penthouse-mg-road",
    readTime: "6 min read",
    category: "Infrastructure",
    trending: false,
  },
]

const News = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-[#BC8664]/8 to-[#A0734F]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-[#BC8664]/6 to-[#A0734F]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BC8664]/10 to-[#A0734F]/10 backdrop-blur-sm border border-[#BC8664]/20 rounded-full px-6 py-2 mb-6 text-[#BC8664] text-sm font-medium">
            <Newspaper size={16} className="animate-pulse" />
            Real Estate Insights
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#484848] mb-6 leading-tight">
            Latest News
            <span className="block bg-gradient-to-r from-[#BC8664] to-[#A0734F] bg-clip-text text-transparent">
              About Gurugram
            </span>
            <span className="block text-3xl md:text-5xl mt-2 text-[#7A7A7A]">Real Estate</span>
          </h2>

          <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, market insights, and expert analysis from Gurugram's dynamic real
            estate landscape.
          </p>
        </div>

        {/* News Slider */}
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
              nextEl: ".news-next",
              prevEl: ".news-prev",
            }}
            pagination={{
              clickable: true,
              el: ".news-pagination",
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            autoplay={{
              delay: 5000,
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
            className="news-swiper pb-16"
          >
            {newsArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <Link to={`/property/${article.slug}`} className="block group">
                  <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 hover:border-[#BC8664]/30 transform hover:-translate-y-2 hover:scale-[1.02]">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#BC8664] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {article.category}
                      </div>

                      {/* Trending Badge */}
                      {article.trending && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                          <TrendingUp size={10} />
                          Trending
                        </div>
                      )}

                      {/* Read Time */}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#BC8664] px-2 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col h-[calc(100%-14rem)] relative">
                      {/* Glassmorphism Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-b-3xl"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-[#484848] mb-3 line-clamp-2 flex-grow hover:text-[#BC8664] transition-colors group-hover:text-[#BC8664]">
                          {article.title}
                        </h3>

                        <p className="text-sm md:text-base text-[#7A7A7A] mb-4 line-clamp-3 flex-grow leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className="flex items-center justify-between text-xs md:text-sm text-[#7A7A7A] mt-auto pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <div className="p-1 bg-[#BC8664]/10 rounded-lg border border-[#BC8664]/20">
                                <Calendar size={12} />
                              </div>
                              <span className="whitespace-nowrap">{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="p-1 bg-[#BC8664]/10 rounded-lg border border-[#BC8664]/20">
                                <User size={12} />
                              </div>
                              <span className="whitespace-nowrap truncate">{article.author}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-[#BC8664] font-medium group-hover:gap-2 transition-all">
                            <span>Read More</span>
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="news-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <button className="news-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white/90 hover:bg-white text-[#BC8664] rounded-full shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95 backdrop-blur-sm">
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
          <div className="news-pagination flex justify-center mt-8 gap-2"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#BC8664] to-[#A0734F] hover:from-[#A0734F] hover:to-[#8B5E3C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mx-auto">
            <div className="p-2 bg-white/20 rounded-xl border border-white/30 group-hover:bg-white/30 transition-all">
              <Newspaper size={20} />
            </div>
            View All News
          </button>
        </div>
      </div>

      <style jsx>{`
        .news-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 4px;
        }
        
        .news-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .news-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .news-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .news-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default News
