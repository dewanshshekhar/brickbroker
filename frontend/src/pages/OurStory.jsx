const OurStory = () => {
  const milestones = [
    {
      year: "2024",
      title: "Founding of Brick Broker",
      description:
        "Established with a vision to transform the real estate landscape in Gurugram, focusing on client-centric services.",
    },
    {
      year: "2024",
      title: "First Major Sale",
      description:
        "Successfully closed our first high-value property deal, marking a significant milestone in our journey.",
    },
    {
      year: "2024",
      title: "Expansion of Team",
      description:
        "Grew our team of expert agents and consultants, bringing in diverse experience and specialized knowledge.",
    },
    {
      year: "2024",
      title: "Launch of Digital Platform",
      description:
        "Introduced our advanced online platform, making property search and transactions seamless for clients.",
    },
    {
      year: "2024",
      title: "Community Engagement",
      description: "Initiated local community programs and partnerships, reinforcing our commitment to Gurugram.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#484848] mb-6">Our Story</h1>
            <p className="text-xl text-[#7A7A7A] max-w-3xl mx-auto">
              Learn about our journey, values, and commitment to excellence in real estate
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#484848] mb-6">From Vision to Reality</h2>
              <div className="space-y-4 text-[#7A7A7A]">
                <p>
                  Brick Broker was founded in 2024 with a clear vision: to create a real estate agency that stands apart
                  through its unwavering commitment to client satisfaction, transparency, and ethical practices. We saw
                  a need for a more personalized and trustworthy approach in the dynamic Gurugram property market.
                </p>
                <p>
                  Our journey began with a small team of passionate real estate enthusiasts who believed that buying or
                  selling a property should be an exciting and seamless experience, not a stressful one. We focused on
                  building strong relationships, understanding individual client needs, and leveraging deep market
                  insights to deliver exceptional results.
                </p>
                <p>
                  Today, Brick Broker has grown into a respected name in Gurugram real estate, known for our integrity,
                  expertise, and innovative solutions. We are proud of the trust our clients place in us and remain
                  dedicated to helping them achieve their property dreams.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[#F9F8F3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#484848] mb-6">Key Milestones</h2>
            <p className="text-xl text-[#7A7A7A]">A timeline of our growth and achievements</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#BC8664] rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 text-center md:text-left">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-[#484848] mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-[#BC8664] mb-3">{milestone.title}</h4>
                      <p className="text-[#7A7A7A] leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 bg-[#BC8664] rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div> {/* Placeholder for alignment */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BC8664] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Growing Family</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy, sell, or invest, we're here to guide you every step of the way.
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

export default OurStory
