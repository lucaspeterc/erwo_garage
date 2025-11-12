import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import WhyErwoSection from '@/components/sections/WhyErwoSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import BlogSection from '@/components/sections/BlogSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyErwoSection />
      <ProjectsSection />
      <ReviewsSection />
      <BlogSection />
      <CTASection />
    </main>
  )
}
