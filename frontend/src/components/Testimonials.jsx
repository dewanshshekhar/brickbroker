"use client"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Mika Gilmore",
    role: "Happy Seller",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Easy and fun",
    text: "The Brick Broker team did an outstanding job helping me buy and create my first real estate investment.",
    rating: 5,
  },
  {
    name: "Donna Gilmore",
    role: "Happy Seller",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Premium services",
    text: "I reviewed and contacted a number of different real estate agencies before settling on Brick Broker.",
    rating: 5,
  },
  {
    name: "Lisa Simpson",
    role: "Happy Buyer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Best support ever",
    text: "We hired the Brick Broker team as our buyer agent because they are the perfect team for real estate projects.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Happy Investor",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Excellent guidance",
    text: "Their market knowledge and investment advice helped me make the right property choices for my portfolio.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Happy Buyer",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Professional service",
    text: "From start to finish, the entire process was smooth and professional. Highly recommend Brick Broker.",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold text-[#484848] mb-4 md:mb-6">Client Testimonials</h2>

            <p className="text-sm md:text-base text-[#7A7A7A] mb-6 md:mb-8">
              Founded in 2023, Brick Broker Estate Group is a Local and Suraj Adhwariya owned, residential real estate
              agency with offices throughout our state area.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="bg-[#BC8664] hover:bg-[#A0734F] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base">
                About Us
              </button>
              <button className="border-2 border-[#BC8664] text-[#BC8664] hover:bg-[#BC8664] hover:text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base">
                Our Agents
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Testimonials Slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
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
                  nextEl: ".testimonials-next",
                  prevEl: ".testimonials-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".testimonials-pagination",
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
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="testimonials-swiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i} className="p-1 border border-yellow-200 rounded-lg mr-1">
                            <Star size={12} className="md:w-3.5 md:h-3.5 fill-yellow-400 text-yellow-400" />
                          </div>
                        ))}
                      </div>

                      <h3 className="font-semibold text-[#484848] mb-2 text-sm md:text-base">{testimonial.title}</h3>
                      <p className="text-[#7A7A7A] mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover mr-3 md:mr-4 border-2 border-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-[#484848] text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-xs md:text-sm text-[#7A7A7A]">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="testimonials-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
                <svg
                  width="20"
                  height="20"
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
              <button className="testimonials-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
                <svg
                  width="20"
                  height="20"
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
              <div className="testimonials-pagination flex justify-center mt-6 gap-2"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 3px;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .testimonials-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .testimonials-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </section>
  )
}

export default Testimonials
