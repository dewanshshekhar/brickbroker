import { Play } from "lucide-react"

const VideoSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">Sell Your Home With Confidence</h2>

            <p className="text-sm md:text-xl mb-6 md:mb-8 leading-relaxed">
              Are you curious about the precise value of your home or its potential selling price?
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Benefit from our extensive expertise in the luxury home market.
            </p>

            <button className="border-2 border-white text-white hover:bg-white hover:text-[#BC8664] px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 md:gap-3 text-sm md:text-base">
              <div className="p-1.5 md:p-2 border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm">
                <Play size={14} className="md:w-4 md:h-4" />
              </div>
              Book a valuation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
