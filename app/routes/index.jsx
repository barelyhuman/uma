import { FeatureCard } from '../components/FeatureCard'
import { Navbar } from '../components/Navbar'

export default function () {
  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Feature 1"
          description="This is an amazing feature that enhances your experience."
        />
        <FeatureCard
          title="Feature 2"
          description="Discover how seamless integration can boost productivity."
        />
        <FeatureCard
          title="Feature 3"
          description="Unlock extraordinary capabilities with our innovative tools."
        />
      </section>
    </div>
  )
}
