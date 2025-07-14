import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const areas = [
    [
      "Golf Course Road, Gurgaon",
      "DLF Phase 1, Gurgaon",
      "Sohna Road, Gurgaon",
      "DLF Phase 2, Gurgaon",
      "Ambience Islands, Gurgaon",
    ],
    [
      "DLF Phase 4, Gurgaon",
      "Golf Course Extension, Gurgaon",
      "Nirvana Country, Gurgaon",
      "South City 1, Gurgaon",
      "Palam Vihar, Gurgaon",
    ],
    [
      "MG Road, Gurgaon",
      "Sushant Lok 1, Gurgaon",
      "South City 2, Gurgaon",
      "Gurgaon Sector 23, Gurgaon",
      "Central Park Flower Valley",
    ],
    ["Sultanpur Gurgaon", "Sector 37d Gurgaon", "Dwarka Expressway", "Sector 57 Gurgaon", "Sector 79 Gurgaon"],
  ]

  return (
    <footer className="bg-[#0C1015] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="border-b border-gray-700 pb-8 md:pb-12 mb-8 md:mb-12">
          <h3 className="text-lg font-medium mb-6 md:mb-8 text-center md:text-left md:pl-4">Gurugram Area</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {areas.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-2 md:space-y-3">
                  {column.map((area, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 py-1 min-h-[44px] md:min-h-0 md:py-0"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        {area}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <div className="mb-4 text-center md:text-left">
              <img src="/logo.PNG" alt="Brick Broker" className="h-8 w-auto brightness-0 invert mx-auto md:mx-0" />
            </div>
            <p className="text-gray-400 mb-6 text-center md:text-left leading-relaxed">
              Your trusted real estate partner in Gurugram. We specialize in residential and commercial properties,
              helping you find your perfect home or investment opportunity.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-[#BC8664] transition-all min-h-[44px] flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-[#BC8664] transition-all min-h-[44px] flex items-center justify-center"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-[#BC8664] transition-all min-h-[44px] flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-[#BC8664] transition-all min-h-[44px] flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-center md:text-left">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-center md:text-left">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block py-2 md:py-0 min-h-[44px] md:min-h-0 flex items-center justify-center md:justify-start"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block py-2 md:py-0 min-h-[44px] md:min-h-0 flex items-center justify-center md:justify-start"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block py-2 md:py-0 min-h-[44px] md:min-h-0 flex items-center justify-center md:justify-start"
                >
                  Agents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block py-2 md:py-0 min-h-[44px] md:min-h-0 flex items-center justify-center md:justify-start"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-center md:text-left">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400 text-center md:text-left">
              <p className="py-1">+91 95992 71680</p>
              <p className="py-1">info@brickbroker.in</p>
              <p className="py-1 leading-relaxed">UG 27A Signum 36 Signature Global Sector 36 Sohna Gurgaon</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brick Broker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
