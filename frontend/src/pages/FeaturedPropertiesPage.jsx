"use client"

import { useState } from "react"
import PropertyCard from "../components/PropertyCard.jsx" // Updated import
import SearchForm from "../components/SearchForm.jsx" // Updated import
import LoadMoreButton from "../components/LoadMoreButton.jsx" // Updated import
import MobileSliderModal from "../components/MobileSliderModal.jsx" // Updated import
import { Star, Zap, Crown, FlameIcon as Fire } from "lucide-react"

const allFeaturedProperties = [
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
  {
    id: 7,
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹95 Lac",
    title: "Cozy Apartment in Sector 49",
    location: "Sector 49, Gurgaon",
    beds: 2,
    baths: 2,
    area: "1200 sq ft",
    badge: "New",
    badgeColor: "bg-blue-500",
    badgeIcon: Zap,
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "₹2.5 Cr",
    title: "Luxury Villa in Sushant Lok",
    location: "Sushant Lok, Gurgaon",
    beds: 5,
    baths: 4,
    area: "3000 sq ft",
    badge: "Luxury",
    badgeColor: "bg-purple-500",
    badgeIcon: Crown,
  },
]

const FeaturedPropertiesPage = () => {
  const [displayedProperties, setDisplayedProperties] = useState(allFeaturedProperties.slice(0, 6))
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)
  const [modalInitialIndex, setModalInitialIndex] = useState(0)

  const handleLoadMore = () => {
    setIsLoading(true)

    setTimeout(() => {
      const nextBatch = allFeaturedProperties.slice(displayedProperties.length, displayedProperties.length + 3)
      setDisplayedProperties((prev) => [...prev, ...nextBatch])
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

  const renderPropertyCard = (
    property,
    index, // Removed type annotation
  ) => (
    <div onClick={() => handleMobileCardClick(index)}>
      <PropertyCard property={property} />
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">Featured Properties</h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Explore our handpicked selection of premium properties with exclusive deals
            </p>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="relative z-20 -mt-12 mb-12 md:-mt-16 md:mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchForm />
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#484848]">{displayedProperties.length} Featured Properties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Load More Button */}
          <LoadMoreButton
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
            currentCount={displayedProperties.length}
            totalCount={allFeaturedProperties.length}
            itemType="properties"
          />
        </div>
      </section>

      {/* Mobile Slider Modal */}
      <MobileSliderModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
        items={displayedProperties}
        initialIndex={modalInitialIndex}
        renderItem={renderPropertyCard}
        title="Property Details"
      />
    </div>
  )
}

export default FeaturedPropertiesPage
