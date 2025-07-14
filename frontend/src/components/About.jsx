"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const agents = [
  {
    name: "Suraj Adhwariya",
    role: "Senior Agent",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "150+ Properties Sold",
  },
  {
    name: "Priya Sharma",
    role: "Property Consultant",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "120+ Properties Sold",
  },
  {
    name: "Rahul Gupta",
    role: "Investment Advisor",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "200+ Properties Sold",
  },
  {
    name: "Anjali Verma",
    role: "Luxury Specialist",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "80+ Properties Sold",
  },
  {
    name: "Vikash Kumar",
    role: "Commercial Expert",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "90+ Properties Sold",
  },
  {
    name: "Neha Singh",
    role: "Residential Advisor",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "110+ Properties Sold",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F9F8F3] py-8 md:py-20"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23BC8664" opacity="0.03"><circle cx="50" cy="50" r="25"/></svg>')`,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#484848] mb-4 md:mb-6 text-center lg:text-left">
              About Our Real Estate Services
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-[#7A7A7A] mb-6 md:mb-8 leading-relaxed">
              <p>
                Founded in 2024, Residence and commercial Real Estate Group is a locally owned, real estate agency with
                offices throughout Gurugram.
              </p>
              <p>
                Our mission is to bring a more personalized approach to the home buying and selling process – and we're
                committed to the communities we serve.
              </p>
              <p>
                Helping you achieve your real estate goals is my top priority. When we work together, it is about YOU.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <button className="bg-[#BC8664] hover:bg-[#A0734F] text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base min-h-[44px]">
                About Us
              </button>
              <button className="border-2 border-[#BC8664] text-[#BC8664] hover:bg-[#BC8664] hover:text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base min-h-[44px]">
                Our Agents
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            {/* Agents Slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                speed={400}
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
                  nextEl: ".about-agents-next",
                  prevEl: ".about-agents-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".about-agents-pagination",
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
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="about-agents-swiper"
              >
                {agents.map((agent, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow mx-2 md:mx-0">
                      <img
                        src={agent.image || "/placeholder.svg"}
                        alt={agent.name}
                        className="w-full h-32 md:h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-[#484848] text-sm leading-tight">{agent.name}</h3>
                      <p className="text-[#7A7A7A] text-xs mb-1 leading-tight">{agent.role}</p>
                      <p className="text-[#BC8664] text-xs font-medium leading-tight">{agent.sales}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="about-agents-prev absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
                <svg
                  width="16"
                  height="16"
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
              <button className="about-agents-next absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
                <svg
                  width="16"
                  height="16"
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
              <div className="about-agents-pagination flex justify-center mt-6 gap-1"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-agents-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 3px;
        }
        
        .about-agents-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .about-agents-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .about-agents-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .about-agents-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </section>
  )
}

export default About
