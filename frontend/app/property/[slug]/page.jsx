"use client"

import React from "react"
import { Home, ChevronRight, Bed, Bath, Ruler, MapPin, Phone, Mail, Globe } from "lucide-react"
import Link from "next/link" // Use Next.js Link
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import MobileSliderModal from "../../../components/MobileSliderModal.jsx"

const propertyDetails = {
  slug: "modern-family-home",
  title: "Modern Family Home in Serene Neighborhood",
  price: "$550,000",
  address: "123 Main St, Anytown USA",
  beds: 3,
  baths: 2,
  sqft: 1800,
  type: "House",
  status: "For Sale",
  description:
    "This beautiful 3-bedroom, 2-bathroom home offers spacious living with modern amenities. Located in a quiet, family-friendly neighborhood, it features an open-concept living area, a gourmet kitchen with stainless steel appliances, and a large backyard perfect for entertaining. Enjoy easy access to local parks, schools, and shopping centers. A perfect blend of comfort and convenience.",
  features: [
    "Central Air Conditioning",
    "Hardwood Floors",
    "Two-Car Garage",
    "Fireplace",
    "Smart Home Technology",
    "Large Backyard",
    "Updated Kitchen",
    "Walk-in Closets",
  ],
  images: [
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ],
  agent: {
    name: "Jane Doe",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@brickbroker.com",
    website: "www.janedoeagent.com",
    image: "/placeholder.svg?height=100&width=100",
  },
}

export default function PropertyDetailPage({ params }) {
  const { slug } = params
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [initialSlide, setInitialSlide] = React.useState(0)

  // In a real application, you would fetch property details based on the slug
  // For this example, we're using static data.
  const property = propertyDetails // Assuming slug matches for simplicity

  if (!property) {
    return <div>Property not found.</div>
  }

  const openModal = (index) => {
    setInitialSlide(index)
    setIsModalOpen(true)
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="flex items-center hover:text-gray-700">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <Link href="/properties" className="flex items-center hover:text-gray-700">
              Properties
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <span className="text-gray-700">{property.title}</span>
          </li>
        </ol>
      </nav>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Property Details Column */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">{property.title}</h1>
            <p className="text-2xl text-primary-600 font-semibold mb-6 animate-fade-in-up animation-delay-100">
              {property.price}
            </p>

            {/* Image Gallery */}
            <div className="mb-8">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper2 rounded-lg shadow-lg mb-4"
                pagination={{ clickable: true }}
                onClick={(swiper) => openModal(swiper.activeIndex)}
              >
                {property.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Property image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {property.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Overview */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-primary-600" /> {property.beds} Beds
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-primary-600" /> {property.baths} Baths
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 mr-2 text-primary-600" /> {property.sqft} sqft
                </div>
                <div className="flex items-center col-span-2 sm:col-span-1">
                  <MapPin className="h-5 w-5 mr-2 text-primary-600" /> {property.address}
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Type:</span> {property.type}
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Status:</span> {property.status}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 list-disc pl-5">
                {property.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Agent Contact Column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 sticky top-24 animate-fade-in-right">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Agent</h2>
              <div className="flex flex-col items-center mb-6">
                <img
                  src={property.agent.image || "/placeholder.svg"}
                  alt={property.agent.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary-200"
                />
                <h3 className="text-xl font-semibold text-gray-900">{property.agent.name}</h3>
              </div>
              <div className="space-y-4">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center justify-center bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" /> Call Agent
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center justify-center bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" /> Email Agent
                </a>
                {property.agent.website && (
                  <a
                    href={`http://${property.agent.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Globe className="h-5 w-5 mr-2" /> Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <MobileSliderModal images={property.images} initialSlide={initialSlide} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
