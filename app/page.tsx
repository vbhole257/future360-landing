import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import ExpertiseStats from '@/components/ExpertiseStats'
import OurWork from '@/components/OurWork'
import LayoutShowcase from '@/components/LayoutShowcase'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Page 1: Cover/Hero */}
      <Hero />
      {/* Client logos strip */}
      <Clients />
      {/* Page 2: Experience & Expertise */}
      <ExpertiseStats />
      {/* Page 3: Our Work */}
      <OurWork />
      {/* Page 4: Layout Showcase */}
      <LayoutShowcase />
      {/* Page 5: Our Services */}
      <Services />
      {/* Page 6: Testimonials */}
      <Testimonials />
      {/* Page 7: Contact Us */}
      <ContactForm />
      <Footer />
    </>
  )
}
