import Hero from "@/components/home/Hero"
import AboutPreview from "@/components/home/AboutPreview"
import UpcomingConcerts from "@/components/home/UpcomingConcerts"
import GalleryPreview from "@/components/home/GalleryPreview"
import Press from "@/components/home/Press"
import Workshops from "@/components/home/Workshops"
import FAQ from "@/components/home/FAQ"
import Newsletter from "@/components/home/Newsletter"
import FinalCTA from "@/components/home/FinalCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <UpcomingConcerts />
      <GalleryPreview />
      <Press />
      <Workshops />
      <FAQ />
      <Newsletter />
      <FinalCTA />
    </>
  )
}
