import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050d1f] text-white pt-24">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-blue-400 mb-8 font-medium">
          Effective Date: July 23, 2026
        </p>

        <div className="space-y-8 text-white/70 leading-relaxed text-sm sm:text-base">
          {/* Intro */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <p>
              At Future 360 IT Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              By accessing our website, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Personal Information</h3>
                <p className="mb-2">When you contact us or submit an enquiry, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 text-white/80 pl-2">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Project Requirements</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10">
                <h3 className="text-base font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p className="mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-white/80 pl-2">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Operating System</li>
                  <li>Pages Visited</li>
                  <li>Date and Time of Visit</li>
                  <li>Referral Source</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-white/80 pl-2">
              <li>Respond to enquiries and service requests.</li>
              <li>Provide our digital and technology services.</li>
              <li>Improve our website and user experience.</li>
              <li>Communicate updates and important information.</li>
              <li>Send marketing communications (only where permitted).</li>
              <li>Monitor website performance and security.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Cookies
            </h2>
            <p className="mb-3">Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-white/80 pl-2 mb-4">
              <li>Remember user preferences.</li>
              <li>Improve website functionality.</li>
              <li>Analyse website traffic.</li>
              <li>Measure marketing performance.</li>
            </ul>
            <p>You can manage or disable cookies through your browser settings.</p>
          </section>

          {/* Sharing of Information */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Sharing of Information
            </h2>
            <p className="mb-3">We do not sell, rent, or trade your personal information.</p>
            <p className="mb-3">We may share information with:</p>
            <ul className="list-disc list-inside space-y-1.5 text-white/80 pl-2">
              <li>Trusted service providers who assist in operating our business.</li>
              <li>Analytics and marketing platforms.</li>
              <li>Government authorities when required by applicable law.</li>
              <li>Professional advisers where necessary.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Data Security
            </h2>
            <p className="mb-3">
              We implement appropriate technical and organisational security measures to protect your information against unauthorised access, disclosure, alteration, or destruction.
            </p>
            <p>
              While we strive to protect your data, no method of internet transmission or electronic storage is completely secure.
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Data Retention
            </h2>
            <p className="mb-3">We retain your personal information only for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-white/80 pl-2">
              <li>Provide our services.</li>
              <li>Fulfil legal and contractual obligations.</li>
              <li>Resolve disputes.</li>
              <li>Maintain business records.</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Third-Party Services
            </h2>
            <p className="mb-3">
              Our website may contain links to third-party websites or integrate third-party services, including analytics, payment gateways, or social media platforms.
            </p>
            <p>
              We are not responsible for the privacy practices or content of those third-party services.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Your Rights
            </h2>
            <p className="mb-3">Depending on applicable laws, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-white/80 pl-2 mb-4">
              <li>Access your personal information.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Object to certain processing activities.</li>
              <li>Request a copy of your personal information.</li>
            </ul>
            <p>To exercise these rights, please contact us using the details below.</p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Children&apos;s Privacy
            </h2>
            <p className="mb-3">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
            <p>
              If you believe a child has provided us with personal information, please contact us so we can remove the information promptly.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time.
            </p>
            <p>
              Any changes will be posted on this page along with the revised effective date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 font-playfair">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="space-y-2 text-white font-medium">
              <p className="text-lg font-semibold text-blue-400">Future 360 IT Solutions</p>
              <p>
                📧 Email:{' '}
                <a href="mailto:team@future360itsolutions.com" className="hover:underline text-blue-300">
                  team@future360itsolutions.com
                </a>
              </p>
              <p>
                📞 Phone:{' '}
                <a href="tel:+918889995985" className="hover:underline text-blue-300">
                  +91 88899 95985
                </a>
              </p>
              <p>
                📍 Address: Vijay Nagar, Indore, Madhya Pradesh, India
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
