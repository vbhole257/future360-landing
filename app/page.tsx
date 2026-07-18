import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutsUs'
import ExpertiseStats from '@/components/ExpertiseStats'
import OurWork from '@/components/OurWork'
import LayoutShowcase from '@/components/LayoutShowcase'
import Services from '@/components/Services'
import OurProcess from '@/components/OurProcess'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Clients from '@/components/Clients'
import Achievements from '@/components/Achievements'
import Testimonials from '@/components/Testimonials'
import FounderProfile from '@/components/FounderProfile'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Page 1: Cover/Hero */}
      <Hero />
      {/* Client logos strip */}
      <Clients />
      {/* Page 2: About Us */}
      <AboutUs />
      {/* Page 3: Experience & Expertise */}
      <ExpertiseStats />
      {/* Founder Profile */}
      <FounderProfile />
      {/* Page 5: Our Work */}
      <OurWork />
      {/* Page 6: Layout Showcase */}
      <LayoutShowcase />
      {/* Page 7: Our Services */}
      <Services />
      {/* Achievements */}
      <Achievements />
      {/* Testimonials */}
      <Testimonials />
      {/* Page 8: Our Process */}
      <OurProcess />
      {/* Page 9: Contact Us */}
      <ContactForm />
      <Footer />
    </>
  )
}
