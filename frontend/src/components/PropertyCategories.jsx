"use client"
import { Home, Building, Warehouse, Store } from "lucide-react"

const categories = [
  { icon: Home, label: "For Sale", active: true },
  { icon: Building, label: "For Rent", active: false },
  { icon: Warehouse, label: "Residential", active: false },
  { icon: Store, label: "Apartments", active: false },
  { icon: Home, label: "Villa", active: false },
  { icon: Building, label: "Studios", active: false },
  { icon: Warehouse, label: "Farm House", active: false },
  { icon: Store, label: "Commercial", active: false },
  { icon: Store, label: "Shops", active: false },
]

const PropertyCategories = () => {
  return (
    <section className="bg-white py-4 md:py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start md:justify-center items-center gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <button
                key={index}
                className={`flex flex-col items-center p-3 md:p-3 rounded-lg transition-all flex-shrink-0 min-w-[80px] md:min-w-0 border ${
                  category.active
                    ? "text-[#BC8664] bg-[#BC8664]/5 border-[#BC8664]/20 shadow-sm"
                    : "text-[#484848] hover:text-[#BC8664] hover:bg-gray-50 border-gray-200 hover:border-[#BC8664]/20 hover:shadow-sm"
                }`}
              >
                <div
                  className={`p-2 rounded-lg border mb-2 transition-all ${
                    category.active
                      ? "border-[#BC8664]/30 bg-[#BC8664]/10"
                      : "border-gray-200 hover:border-[#BC8664]/30 hover:bg-[#BC8664]/5"
                  }`}
                >
                  <Icon size={16} className="md:w-4 md:h-4" />
                </div>
                <span className="text-xs font-medium text-center leading-tight">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default PropertyCategories
