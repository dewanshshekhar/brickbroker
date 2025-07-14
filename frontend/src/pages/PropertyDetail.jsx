"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar, CheckCircle, XCircle } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import "swiper/css/free-mode"

const propertiesData = [
  {
    id: 1,
    slug: "luxury-apartment-dlf-phase-1",
    title: "Luxury Apartment in DLF Phase 1",
    price: "₹1.2 Cr",
    location: "DLF Phase 1, Gurgaon",
    beds: 3,
    baths: 2,
    area: "1850 sq ft",
    description:
      "This stunning 3BHK apartment offers spacious living with modern amenities. Located in the heart of DLF Phase 1, it provides easy access to schools, hospitals, and shopping centers. Enjoy panoramic city views from your private balcony.",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    features: [
      { name: "Swimming Pool", available: true },
      { name: "Gymnasium", available: true },
      { name: "24/7 Security", available: true },
      { name: "Power Backup", available: true },
      { name: "Clubhouse", available: true },
      { name: "Kids Play Area", available: true },
      { name: "Parking", available: true },
      { name: "Pet Friendly", available: false },
      { name: "Balcony", available: true },
      { name: "Modular Kitchen", available: true },
      { name: "Servant Room", available: false },
      { name: "Garden", available: false },
    ],
    agent: {
      name: "Suraj Adhwariya",
      role: "Senior Agent",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "+91 95992 71680",
      email: "suraj@brickbroker.in",
    },
  },
  {
    id: 2,
    slug: "modern-villa-golf-course",
    title: "Modern Villa with Garden",
    price: "₹2.1 Cr",
    location: "Golf Course Road, Gurgaon",
    beds: 4,
    baths: 3,
    area: "2500 sq ft",
    description:
      "Experience luxury living in this exquisite 4BHK villa. Boasting a private garden and modern architecture, this property is perfect for families seeking comfort and style. Located on Golf Course Road, it offers excellent connectivity and a serene environment.",
    images: [
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    features: [
      { name: "Swimming Pool", available: true },
      { name: "Gymnasium", available: true },
      { name: "24/7 Security", available: true },
      { name: "Power Backup", available: true },
      { name: "Clubhouse", available: true },
      { name: "Kids Play Area", available: true },
      { name: "Parking", available: true },
      { name: "Pet Friendly", available: true },
      { name: "Balcony", available: true },
      { name: "Modular Kitchen", available: true },
      { name: "Servant Room", available: true },
      { name: "Garden", available: true },
    ],
    agent: {
      name: "Priya Sharma",
      role: "Property Consultant",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "+91 98765 43210",
      email: "priya@brickbroker.in",
    },
  },
  {
    id: 3,
    slug: "contemporary-studio-sohna",
    title: "Contemporary Studio Apartment",
    price: "₹85 Lac",
    location: "Sohna Road, Gurgaon",
    beds: 1,
    baths: 1,
    area: "850 sq ft",
    description:
      "A compact yet stylish studio apartment perfect for singles or young couples. Designed with modern aesthetics and efficient space utilization. Enjoy the tranquility of Sohna Road while being well-connected to Gurugram city.",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    features: [
      { name: "Swimming Pool", available: false },
      { name: "Gymnasium", available: true },
      { name: "24/7 Security", available: true },
      { name: "Power Backup", available: true },
      { name: "Clubhouse", available: false },
      { name: "Kids Play Area", available: false },
      { name: "Parking", available: true },
      { name: "Pet Friendly", available: false },
      { name: "Balcony", available: true },
      { name: "Modular Kitchen", available: true },
      { name: "Servant Room", available: false },
      { name: "Garden", available: false },
    ],
    agent: {
      name: "Rahul Gupta",
      role: "Investment Advisor",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "+91 87654 32109",
      email: "rahul@brickbroker.in",
    },
  },
  {
    id: 4,
    slug: "premium-penthouse-mg-road",
    title: "Premium Penthouse",
    price: "₹3.5 Cr",
    location: "MG Road, Gurgaon",
    beds: 5,
    baths: 4,
    area: "3200 sq ft",
    description:
      "An opulent penthouse offering unparalleled luxury and breathtaking cityscapes. Located on MG Road, it provides direct access to high-end shopping, dining, and entertainment. Features include a private terrace and smart home automation.",
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    features: [
      { name: "Swimming Pool", available: true },
      { name: "Gymnasium", available: true },
      { name: "24/7 Security", available: true },
      { name: "Power Backup", available: true },
      { name: "Clubhouse", available: true },
      { name: "Kids Play Area", available: true },
      { name: "Parking", available: true },
      { name: "Pet Friendly", available: true },
      { name: "Balcony", available: true },
      { name: "Modular Kitchen", available: true },
      { name: "Servant Room", available: true },
      { name: "Garden", available: true },
    ],
    agent: {
      name: "Anjali Verma",
      role: "Luxury Specialist",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      phone: "+91 76543 21098",
      email: "anjali@brickbroker.in",
    },
  },
]

const PropertyDetail = () => {
  const { slug } = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const property = propertiesData.find((p) => p.slug === slug)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">Property not found.</div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-4">{property.title}</h1>
            <p className="text-xl text-[#7A7A7A] flex items-center justify-center gap-2">
              <MapPin size={20} className="text-[#BC8664]" />
              {property.location}
            </p>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  pagination={{ clickable: true }}
                  className="mySwiper2 rounded-xl shadow-lg mb-4"
                >
                  {property.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${property.title} image ${index + 1}`}
                        className="w-full h-96 object-cover rounded-xl"
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
                  className="mySwiper rounded-xl"
                >
                  {property.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Overview */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#484848] mb-4">Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-[#F9F8F3] rounded-lg flex flex-col items-center">
                    <Bed size={24} className="text-[#BC8664] mb-2" />
                    <span className="font-semibold text-[#484848]">{property.beds} Beds</span>
                  </div>
                  <div className="p-4 bg-[#F9F8F3] rounded-lg flex flex-col items-center">
                    <Bath size={24} className="text-[#BC8664] mb-2" />
                    <span className="font-semibold text-[#484848]">{property.baths} Baths</span>
                  </div>
                  <div className="p-4 bg-[#F9F8F3] rounded-lg flex flex-col items-center">
                    <Square size={24} className="text-[#BC8664] mb-2" />
                    <span className="font-semibold text-[#484848]">{property.area}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#484848] mb-4">Description</h2>
                <p className="text-[#7A7A7A] leading-relaxed">{property.description}</p>
              </div>

              {/* Features & Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#484848] mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {feature.available ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <XCircle size={18} className="text-red-500" />
                      )}
                      <span className={feature.available ? "text-[#484848]" : "text-gray-500 line-through"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Price Card */}
              <div className="bg-[#BC8664] text-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-2">Price</h3>
                <p className="text-4xl font-bold">{property.price}</p>
              </div>

              {/* Agent Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#484848] mb-4">Contact Agent</h2>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.image || "/placeholder.svg"}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#484848]">{property.agent.name}</h3>
                    <p className="text-[#7A7A7A] text-sm">{property.agent.role}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-[#7A7A7A] hover:text-[#BC8664] transition-colors"
                  >
                    <Phone size={20} className="text-[#BC8664]" />
                    <span>{property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-[#7A7A7A] hover:text-[#BC8664] transition-colors"
                  >
                    <Mail size={20} className="text-[#BC8664]" />
                    <span>{property.agent.email}</span>
                  </a>
                </div>
                <button className="w-full bg-[#BC8664] hover:bg-[#A0734F] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Schedule a Visit
                </button>
              </div>

              {/* Share & Favorite */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-[#484848] mb-4">Actions</h2>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#F9F8F3] hover:bg-gray-100 text-[#BC8664] py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-gray-200">
                    <Heart size={20} />
                    Favorite
                  </button>
                  <button className="flex-1 bg-[#F9F8F3] hover:bg-gray-100 text-[#BC8664] py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-gray-200">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyDetail
