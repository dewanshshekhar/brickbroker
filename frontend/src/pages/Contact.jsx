"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleSubmit = (e) => {
    // Removed React.FormEvent
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  const handleInputChange = (e) => {
    // Removed React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="bg-[#F9F8F3] py-8 md:py-20"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23BC8664" opacity="0.03"><circle cx="50" cy="50" r="25"/></svg>')`,
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#484848] mb-4 md:mb-6 text-center lg:text-left">
              In need of support?
              <br />
              Get in touch!
            </h2>

            <p className="text-sm md:text-base text-[#7A7A7A] mb-6 md:mb-8 text-center lg:text-left leading-relaxed">
              Our dedicated support team is available 24/7 to assist you and answer all your questions.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#BC8664] rounded-lg border border-[#BC8664]/20 flex-shrink-0">
                  <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#484848] text-sm md:text-base">Phone</h3>
                  <p className="text-[#7A7A7A] text-sm md:text-base">+91 95992 71680</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#BC8664] rounded-lg border border-[#BC8664]/20 flex-shrink-0">
                  <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#484848] text-sm md:text-base">Email</h3>
                  <p className="text-[#7A7A7A] text-sm md:text-base">info@brickbroker.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#BC8664] rounded-lg border border-[#BC8664]/20 flex-shrink-0">
                  <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#484848] text-sm md:text-base">Office Address</h3>
                  <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                    UG 27A Signum 36 Signature Global Sector 36 Sohna Gurgaon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mt-6 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#484848] mb-2">Mobile *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#484848] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC8664] focus:border-transparent text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#BC8664] hover:bg-[#A0734F] text-white py-4 rounded-lg font-medium transition-colors text-base min-h-[44px]"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
