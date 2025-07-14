"use client"

import React, { useState } from "react"
import { Star, Phone, Mail } from "lucide-react"
import LoadMoreButton from "../components/LoadMoreButton.jsx" // Updated import
import MobileSliderModal from "../components/MobileSliderModal.jsx" // Updated import

const allAgents = [
  {
    name: "Suraj Adhwariya",
    role: "Senior Agent",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "150+ Properties Sold",
    rating: 4.9,
    phone: "+91 95992 71680",
    email: "suraj@brickbroker.in",
    specialization: "Luxury Properties",
  },
  {
    name: "Priya Sharma",
    role: "Property Consultant",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "120+ Properties Sold",
    rating: 4.8,
    phone: "+91 98765 43210",
    email: "priya@brickbroker.in",
    specialization: "Residential Properties",
  },
  {
    name: "Rahul Gupta",
    role: "Investment Advisor",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "200+ Properties Sold",
    rating: 5.0,
    phone: "+91 87654 32109",
    email: "rahul@brickbroker.in",
    specialization: "Investment Properties",
  },
  {
    name: "Anjali Verma",
    role: "Luxury Specialist",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "80+ Properties Sold",
    rating: 4.7,
    phone: "+91 76543 21098",
    email: "anjali@brickbroker.in",
    specialization: "Luxury Homes",
  },
  {
    name: "Vikash Kumar",
    role: "Commercial Expert",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "90+ Properties Sold",
    rating: 4.6,
    phone: "+91 65432 10987",
    email: "vikash@brickbroker.in",
    specialization: "Commercial Properties",
  },
  {
    name: "Neha Singh",
    role: "Residential Advisor",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "110+ Properties Sold",
    rating: 4.8,
    phone: "+91 54321 09876",
    email: "neha@brickbroker.in",
    specialization: "Family Homes",
  },
  {
    name: "Amit Patel",
    role: "Senior Consultant",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "95+ Properties Sold",
    rating: 4.5,
    phone: "+91 43210 98765",
    email: "amit@brickbroker.in",
    specialization: "New Projects",
  },
  {
    name: "Kavya Reddy",
    role: "Property Advisor",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    sales: "75+ Properties Sold",
    rating: 4.4,
    phone: "+91 32109 87654",
    email: "kavya@brickbroker.in",
    specialization: "Apartments",
  },
]

const AllAgents = () => {
  const [displayedAgents, setDisplayedAgents] = useState(allAgents.slice(0, 6))
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)
  const [modalInitialIndex, setModalInitialIndex] = useState(0)

  const handleLoadMore = () => {
    setIsLoading(true)

    setTimeout(() => {
      const nextBatch = allAgents.slice(displayedAgents.length, displayedAgents.length + 3)
      setDisplayedAgents((prev) => [...prev, ...nextBatch])
      setIsLoading(false)
    }, 1000)
  }

  const handleMobileCardClick = (index) => {
    // Removed type annotation
    if (window.innerWidth <= 768) {
      setModalInitialIndex(index)
      setIsMobileModalOpen(true)
    }
  }

  const renderAgentCard = (
    agent,
    index, // Removed type annotation
  ) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => handleMobileCardClick(index)}
    >
      <img src={agent.image || "/placeholder.svg"} alt={agent.name} className="w-full h-64 object-cover" />

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-[#484848]">{agent.name}</h3>
          <div className="flex items-center gap-1">
            <div className="p-1 border border-yellow-200 rounded-lg">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-sm text-[#7A7A7A]">{agent.rating}</span>
          </div>
        </div>

        <p className="text-[#BC8664] font-medium mb-2">{agent.role}</p>
        <p className="text-[#7A7A7A] text-sm mb-3">{agent.specialization}</p>
        <p className="text-[#BC8664] text-sm font-medium mb-4">{agent.sales}</p>

        <div className="space-y-2">
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

        <button className="w-full mt-4 bg-[#BC8664] hover:bg-[#A0734F] text-white py-2 rounded-lg font-medium transition-colors">
          Contact Agent
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">All Our Agents</h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Browse through our complete list of expert real estate professionals
            </p>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#484848]">{displayedAgents.length} Expert Agents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedAgents.map((agent, index) => (
              <React.Fragment key={index}>{renderAgentCard(agent, index)}</React.Fragment>
            ))}
          </div>

          {/* Load More Button */}
          <LoadMoreButton
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
            currentCount={displayedAgents.length}
            totalCount={allAgents.length}
            itemType="agents"
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
        title="Agent Profile"
      />
    </div>
  )
}

export default AllAgents
