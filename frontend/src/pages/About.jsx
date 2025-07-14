import { Users, Award, Home, MapPin, Target, Heart } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Home, number: "500+", label: "Properties Sold" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: MapPin, number: "25+", label: "Areas Covered" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide exceptional real estate services that exceed client expectations and build lasting relationships.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, transparency, and dedication to helping families find their perfect homes in Gurugram.",
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To be the most trusted and preferred real estate agency in Gurugram and surrounding areas.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">About Brick Broker</h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Your trusted real estate partner in Gurugram since 2024, dedicated to helping you find your perfect home
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#484848] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#7A7A7A]">
                <p>
                  Founded in 2024, Brick Broker emerged from a simple vision: to revolutionize the real estate
                  experience in Gurugram by putting clients first and delivering exceptional service at every step.
                </p>
                <p>
                  Our team of experienced professionals brings together decades of combined expertise in residential and
                  commercial real estate, ensuring that whether you're buying your first home or expanding your
                  investment portfolio, you have the best guidance available.
                </p>
                <p>
                  We understand that real estate transactions are among the most significant decisions in people's
                  lives. That's why we've built our company on the foundation of trust, transparency, and unwavering
                  commitment to our clients' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Brick Broker"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#484848] mb-6">Our Achievements</h2>
            <p className="text-xl text-[#7A7A7A]">Numbers that speak for our commitment and success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BC8664]/10 rounded-full mb-4">
                    <div className="p-2 border border-[#BC8664]/30 rounded-lg">
                      <Icon size={24} className="text-[#BC8664]" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-[#484848] mb-2">{stat.number}</h3>
                  <p className="text-[#7A7A7A]">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#484848] mb-6">What Drives Us</h2>
            <p className="text-xl text-[#7A7A7A]">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BC8664]/10 rounded-full mb-6">
                    <div className="p-2 border border-[#BC8664]/30 rounded-lg">
                      <Icon size={24} className="text-[#BC8664]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#484848] mb-4">{value.title}</h3>
                  <p className="text-[#7A7A7A]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BC8664] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the real estate market and find the perfect property for your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#BC8664] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              View Properties
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#BC8664] px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
