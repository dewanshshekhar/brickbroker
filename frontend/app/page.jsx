import Hero from "../components/Hero.jsx"
import PropertyCategories from "../components/PropertyCategories.jsx"
import PropertyTypes from "../components/PropertyTypes.jsx"
import FeaturedProperties from "../components/FeaturedProperties.jsx"
import Areas from "../components/Areas.jsx"
import Testimonials from "../components/Testimonials.jsx"
import VideoSection from "../components/VideoSection.jsx"
import News from "../components/News.jsx"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PropertyCategories />
      <PropertyTypes />
      <FeaturedProperties />
      <Areas />
      <Testimonials />
      <VideoSection />
      <News />
    </div>
  )
}
