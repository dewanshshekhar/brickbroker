import { Home, ChevronRight, Phone, Mail } from "lucide-react"
import Link from "next/link" // Use Next.js Link

const agentsData = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Lead Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
    rating: 5,
    propertiesSold: 120,
  },
  {
    id: 2,
    name: "John Smith",
    title: "Senior Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 987-6543",
    email: "john.smith@example.com",
    rating: 4.8,
    propertiesSold: 95,
  },
  {
    id: 3,
    name: "Emily White",
    title: "Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 234-5678",
    email: "emily.white@example.com",
    rating: 4.5,
    propertiesSold: 70,
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 345-6789",
    email: "michael.brown@example.com",
    rating: 4.9,
    propertiesSold: 110,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    title: "Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 456-7890",
    email: "sarah.j@example.com",
    rating: 4.7,
    propertiesSold: 80,
  },
  {
    id: 6,
    name: "David Lee",
    title: "Agent",
    image: "/placeholder.svg?height=200&width=200",
    phone: "+1 (555) 567-8901",
    email: "david.l@example.com",
    rating: 4.6,
    propertiesSold: 65,
  },
]

export default function AllAgentsPage() {
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
            <Link href="/agents" className="flex items-center hover:text-gray-700">
              Agents
            </Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <span className="text-gray-700">All Agents</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in-up">All Agents</h1>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentsData.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up"
            >
              <img src={agent.image || "/placeholder.svg"} alt={agent.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h2>
                <p className="text-primary-600 font-medium mb-4">{agent.title}</p>
                <div className="flex items-center justify-center mb-4 text-gray-600">
                  <span className="flex items-center mr-2">
                    <svg className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                    {agent.rating}
                  </span>
                  <span className="text-gray-500">({agent.propertiesSold} properties sold)</span>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Phone className="h-6 w-6" />
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
