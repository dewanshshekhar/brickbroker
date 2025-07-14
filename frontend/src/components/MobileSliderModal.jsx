"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Removed interface MobileSliderModalProps
const MobileSliderModal = ({ isOpen, onClose, items, initialIndex, renderItem, title = "View Details" }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-4">
          <span className="text-white/80 text-sm">
            {currentIndex + 1} of {items.length}
          </span>
          <button onClick={onClose} className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
            <X size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Slider Content */}
      <div className="flex-1 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={initialIndex}
          navigation={{
            nextEl: ".mobile-modal-next",
            prevEl: ".mobile-modal-prev",
          }}
          pagination={{
            clickable: true,
            el: ".mobile-modal-pagination",
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="h-full mobile-modal-swiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center p-4">
              <div className="w-full max-w-sm">{renderItem(item, index)}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="mobile-modal-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm">
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button className="mobile-modal-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm">
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Pagination */}
        <div className="mobile-modal-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"></div>
      </div>

      <style jsx>{`
        .mobile-modal-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .mobile-modal-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}

export default MobileSliderModal
