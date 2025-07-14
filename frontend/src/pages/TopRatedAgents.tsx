import React, { useState } from 'react';
import { Star, Phone, Mail, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import LoadMoreButton from '../components/LoadMoreButton';
import MobileSliderModal from '../components/MobileSliderModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const allTopRatedAgents = [
  {
    name: 'Rahul Gupta',
    role: 'Investment Advisor',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    sales: '200+ Properties Sold',
    rating: 5.0,
    phone: '+91 87654 32109',
    email: 'rahul@brickbroker.in',
    specialization: 'Investment Properties',
    experience: '10 years',
    awards: ['Top Performer 2024', 'Client Choice Award']
  },
  {
    name: 'Suraj Adhwariya',
    role: 'Senior Agent',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    sales: '150+ Properties Sold',
    rating: 4.9,
    phone: '+91 95992 71680',
    email: 'suraj@brickbroker.in',
    specialization: 'Luxury Properties',
    experience: '8 years',
    awards: ['Excellence Award 2024', 'Luxury Specialist']
  },
  {
    name: 'Priya Sharma',
    role: 'Property Consultant',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    sales: '120+ Properties Sold',
    rating: 4.8,
    phone: '+91 98765 43210',
    email: 'priya@brickbroker.in',
    specialization: 'Residential Properties',
    experience: '6 years',
    awards: ['Customer Satisfaction Award', 'Rising Star 2023']
  },
  {
    name: 'Neha Singh',
    role: 'Residential Advisor',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    sales: '110+ Properties Sold',
    rating: 4.8,
    phone: '+91 54321 09876',
    email: 'neha@brickbroker.in',
    specialization: 'Family Homes',
    experience: '4 years',
    awards: ['Best New Agent 2023', 'Family Choice Award']
  }
];

const TopRatedAgents = () => {
  const [displayedAgents, setDisplayedAgents] = useState(allTopRatedAgents.slice(0, 4));
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      // In a real app, this would load more top-rated agents
      setIsLoading(false);
    }, 1000);
  };

  const handleMobileCardClick = (index: number) => {
    if (window.innerWidth <= 768) {
      setModalInitialIndex(index);
      setIsMobileModalOpen(true);
    }
  };

  const renderAgentCard = (agent: any, index: number) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-[#BC8664]/10 cursor-pointer"
      onClick={() => handleMobileCardClick(index)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-[#484848]">{agent.name}</h3>
            <div className="flex items-center gap-1 bg-[#BC8664]/10 px-3 py-1 rounded-full">
              <div className="p-1 border border-yellow-200 rounded-lg">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-sm font-medium text-[#BC8664]">{agent.rating}</span>
            </div>
          </div>
          
          <p className="text-[#BC8664] font-medium mb-2">{agent.role}</p>
          <p className="text-[#7A7A7A] mb-2">{agent.specialization}</p>
          <p className="text-[#7A7A7A] text-sm mb-3">{agent.experience} experience</p>
          <p className="text-[#BC8664] font-medium mb-4">{agent.sales}</p>
          
          {/* Awards */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 border border-[#BC8664]/30 rounded-lg">
                <Award size={14} className="text-[#BC8664]" />
              </div>
              <span className="text-sm font-medium text-[#484848]">Awards & Recognition</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {agent.awards.map((award: string, awardIndex: number) => (
                <span key={awardIndex} className="bg-[#BC8664]/10 text-[#BC8664] px-2 py-1 rounded-full text-xs">
                  {award}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-[#7A7A7A]">
              <div className="p-1 border border-gray-200 rounded-lg">
                <Phone size={14} />
              </div>
              <span>{agent.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#7A7A7A]">
              <div className="p-1 border border-gray-200 rounded-lg">
                <Mail size={14} />
              </div>
              <span>{agent.email}</span>
            </div>
          </div>
          
          <button className="w-full bg-[#BC8664] hover:bg-[#A0734F] text-white py-3 rounded-lg font-medium transition-colors">
            Contact Top Agent
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">
              Top Rated Agents
            </h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Our highest-rated real estate professionals with proven track records of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Top Agents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#484848]">
              {displayedAgents.length} Top Rated Agents
            </h2>
          </div>

          {/* Agents Slider */}
          <div className="relative mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
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
                nextEl: '.top-agents-next',
                prevEl: '.top-agents-prev',
              }}
              pagination={{
                clickable: true,
                el: '.top-agents-pagination',
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
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              className="top-agents-swiper"
            >
              {displayedAgents.map((agent, index) => (
                <SwiperSlide key={index}>
                  {renderAgentCard(agent, index)}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="top-agents-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button className="top-agents-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white hover:bg-[#BC8664] text-[#BC8664] hover:text-white rounded-full shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#BC8664] hover:scale-110 active:scale-95">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="top-agents-pagination flex justify-center mt-8 gap-2"></div>
          </div>

          {/* Load More Button */}
          <LoadMoreButton
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
            currentCount={displayedAgents.length}
            totalCount={allTopRatedAgents.length}
            itemType="top agents"
          />
        </div>
      </section>

      {/* Mobile Slider Modal */}
      <MobileSliderModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
        items={displayedAgents}
        initialIndex={modalInitialIndex}
        renderItem={renderAgentCard}
        title="Top Rated Agent"
      />

      <style jsx>{`
        .top-agents-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #BC8664;
          opacity: 0.25;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-radius: 50%;
          margin: 0 4px;
        }
        
        .top-agents-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 0 2px rgba(188, 134, 100, 0.3);
        }
        
        .top-agents-swiper .swiper-pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.1);
        }
        
        .top-agents-swiper .swiper-slide {
          height: auto;
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .top-agents-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </div>
  );
};

export default TopRatedAgents;
