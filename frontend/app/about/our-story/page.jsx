import Link from "next/link" // Use Next.js Link
import { Home, ChevronRight } from "lucide-react"

export default function OurStoryPage() {
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
            <span className="text-gray-700">Our Story</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white animate-fade-in-up">Our Story</h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-left">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Our Beginning"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-4 rounded-lg shadow-lg animate-bounce-in">
              <p className="text-xl font-semibold">Founded in 2010</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in-right">
              The Journey of BrickBroker
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-right animation-delay-200">
              BrickBroker was founded in 2010 by a group of passionate real estate professionals who saw a need for a
              more transparent, efficient, and client-focused approach to property transactions. Our journey began with
              a simple idea: to empower individuals and families to make informed decisions about their most significant
              investments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-right animation-delay-400">
              From a small startup, we've grown into a leading real estate agency, thanks to our unwavering commitment
              to integrity, innovation, and customer satisfaction. We've navigated market shifts, embraced technological
              advancements, and continuously refined our services to meet the evolving needs of our clients.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in-left">
              Our Vision for the Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in-left animation-delay-200">
              Looking ahead, BrickBroker is dedicated to expanding our reach, enhancing our digital platforms, and
              continuing to build a team of the most knowledgeable and dedicated agents in the industry. We aim to be at
              the forefront of real estate innovation, providing cutting-edge tools and personalized experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-left animation-delay-400">
              Our vision is to create a world where finding and securing the perfect property is a joyful and
              stress-free experience for everyone. We are committed to sustainable growth, community engagement, and
              making a positive impact in the lives of our clients and the neighborhoods we serve.
            </p>
          </div>
          <div className="relative animate-fade-in-right">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Future Vision"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute -top-4 -left-4 bg-secondary-500 text-white p-4 rounded-lg shadow-lg animate-bounce-in">
              <p className="text-xl font-semibold">Innovating for Tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Join Our Growing Family</h2>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            Whether you're looking to buy, sell, or invest, become a part of the BrickBroker story.
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
