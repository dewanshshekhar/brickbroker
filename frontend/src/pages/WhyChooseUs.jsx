import { CheckCircle, Users, Award, Home, MapPin, DollarSign, Shield, Lightbulb } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our team comprises seasoned real estate professionals with deep market knowledge and a proven track record of success.",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description:
        "Recognized for our excellence in customer service and dedication to achieving the best outcomes for our clients.",
    },
    {
      icon: Home,
      title: "Extensive Property Portfolio",
      description:
        "Access to a wide range of residential and commercial properties, including exclusive listings not found elsewhere.",
    },
    {
      icon: MapPin,
      title: "Local Market Expertise",
      description:
        "In-depth understanding of Gurugram's diverse neighborhoods, market trends, and investment opportunities.",
    },
    {
      icon: DollarSign,
      title: "Transparent Deals",
      description:
        "We ensure complete transparency in all transactions, providing clear communication and honest advice.",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Your peace of mind is our priority. We handle all legalities and paperwork with utmost care and security.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Leveraging the latest technology and creative strategies to make your property journey seamless and efficient.",
    },
    {
      icon: CheckCircle,
      title: "Client-Centric Approach",
      description:
        "Your needs and goals are at the heart of everything we do. We tailor our services to your unique requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">Why Choose Brick Broker?</h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Discover the compelling reasons why clients trust us with their most important real estate decisions
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BC8664]/10 rounded-full mb-6">
                    <div className="p-2 border border-[#BC8664]/30 rounded-lg">
                      <Icon size={24} className="text-[#BC8664]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#484848] mb-4">{reason.title}</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BC8664] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs and let us help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#BC8664] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#BC8664] px-8 py-3 rounded-lg font-medium transition-colors">
              View Our Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs
