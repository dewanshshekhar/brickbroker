import Link from "next/link" // Use Next.js Link
import { Home, ChevronRight, CheckCircle, Users, Lightbulb, Handshake } from "lucide-react"

export default function WhyChooseUsPage() {
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
            <Link href="/about" className="flex items-center hover:text-gray-700">
              About Us
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <span className="text-gray-700">Why Choose Us</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white animate-fade-in-up">Why Choose BrickBroker?</h1>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 animate-fade-in-up">
          Unmatched Service & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
            <p className="text-gray-600">
              With years of successful transactions, we consistently deliver results that exceed expectations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client-Centric Approach</h3>
            <p className="text-gray-600">
              Your needs are our priority. We provide personalized service tailored to your unique goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-600">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Expertise</h3>
            <p className="text-gray-600">
              Our agents possess deep local market knowledge, providing invaluable insights and guidance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-800">
            <div className="flex justify-center mb-4">
              <Handshake className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strong Network</h3>
            <p className="text-gray-600">
              Benefit from our extensive network of buyers, sellers, and industry professionals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-1000">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparent Process</h3>
            <p className="text-gray-600">
              We ensure clear communication and transparency at every step of your real estate journey.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-1200">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovative Solutions</h3>
            <p className="text-gray-600">
              Leveraging the latest technology to provide efficient and effective real estate solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            Let BrickBroker guide you to your next successful real estate venture.
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
