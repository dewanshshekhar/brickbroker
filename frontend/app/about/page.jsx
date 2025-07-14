import Link from "next/link" // Use Next.js Link
import { Home, ChevronRight } from "lucide-react"

export default function AboutUsPage() {
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
            <span className="text-gray-700">About Us</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white animate-fade-in-up">About BrickBroker</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in-left">
              Your Trusted Partner in Real Estate
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-left animation-delay-200">
              At BrickBroker, we believe in making your real estate journey seamless and rewarding. With years of
              experience and a deep understanding of the market, we are committed to providing unparalleled service to
              our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-left animation-delay-400">
              Our mission is to connect people with their dream properties, whether it's a cozy home, a bustling
              commercial space, or a lucrative investment opportunity. We pride ourselves on transparency, integrity,
              and a client-first approach.
            </p>
          </div>
          <div className="relative animate-fade-in-right">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="About Us"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-lg shadow-lg animate-bounce-in">
              <p className="text-xl font-semibold">10+ Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 animate-fade-in-up">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="flex justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with every client interaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="flex justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in service, ensuring exceptional results for our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="flex justify-center mb-4">
                <svg
                  className="h-12 w-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and strategies to stay ahead in the dynamic real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 animate-fade-in-up">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team Member 1"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Jane Doe</h3>
            <p className="text-primary-600 font-medium mb-4">CEO & Founder</p>
            <p className="text-gray-600">
              Jane is a visionary leader with over 20 years of experience in the real estate industry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team Member 2"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">John Smith</h3>
            <p className="text-primary-600 font-medium mb-4">Lead Agent</p>
            <p className="text-gray-600">
              John is a top-performing agent known for his exceptional negotiation skills and client satisfaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team Member 3"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-primary-200"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Emily White</h3>
            <p className="text-primary-600 font-medium mb-4">Marketing Director</p>
            <p className="text-gray-600">
              Emily drives our marketing efforts, ensuring properties get maximum exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            Contact us today to speak with one of our expert agents and start your real estate journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 animate-bounce-in"
          >
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
