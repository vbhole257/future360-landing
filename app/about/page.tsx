import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutsUs'
import FounderProfile from '@/components/FounderProfile'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080f22] text-white pt-16">
      <Navbar />
      <AboutUs />
      <FounderProfile />
      <Footer />
    </main>
  )
}
