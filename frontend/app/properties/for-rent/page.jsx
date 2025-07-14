import { Home, ChevronRight } from "lucide-react"
import Link from "next/link" // Use Next.js Link
import PropertyCard from "../../../components/PropertyCard.jsx"
import SearchForm from "../../../components/SearchForm.jsx"
import LoadMoreButton from "../../../components/LoadMoreButton.jsx"

const propertiesData = [
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    price: "$320,000",
    address: "456 Oak Ave, Anytown USA",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Condo",
    status: "For Rent",
    slug: "cozy-downtown-condo",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600",
    price: "$210,000",
    address: "101 Elm St, Anytown USA",
    beds: 1,
    baths: 1,
    sqft: 700,
    type: "Apartment",
    status: "For Rent",
    slug: "charming-studio-apartment",
  },
]

export default function ForRentPage() {
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
            <span className="text-gray-700">For Rent</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url(/placeholder.svg?height=500&width=1500)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in-up">Properties For Rent</h1>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SearchForm />
      </section>

      {/* Properties Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <LoadMoreButton />
        </div>
      </section>
    </div>
  )
}
