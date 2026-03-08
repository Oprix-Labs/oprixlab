import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Our Services
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              A full spectrum of digital and technical solutions delivered by curated professionals.
            </p>
          </div>
        </section>

        {/* Service 1 — Web Solutions */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">🌐</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Web Solutions
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  From simple landing pages to full business websites, we design and build modern,
                  responsive web presences tailored to your goals. We also handle ongoing
                  maintenance and optimization.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Website design &amp; development (static &amp; CMS)</li>
                  <li>Website redesign &amp; maintenance</li>
                  <li>Website security &amp; performance optimization</li>
                  <li>Hosting &amp; domain management</li>
                  <li>Basic SEO setup</li>
                  <li>Contact forms &amp; email integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 2 — Web Applications */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">💻</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Web Applications
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Interactive, functional web apps built to solve real operational problems — from
                  booking systems and portals to dashboards and data collection tools.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Simple web applications</li>
                  <li>Booking &amp; reservation systems</li>
                  <li>Login / authentication systems</li>
                  <li>Dashboards &amp; inventory systems</li>
                  <li>School / organization portals</li>
                  <li>Form-based systems &amp; data collection tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 3 — Mobile Applications */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">📱</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Mobile Applications
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Mobile apps built for practical use — informational apps, event or directory apps,
                  and lightweight internal tools, deployed cross-platform on Android and iOS.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Simple informational apps</li>
                  <li>Event &amp; directory apps</li>
                  <li>Internal-use mobile tools</li>
                  <li>Cross-platform setup (Android / iOS)</li>
                  <li>App maintenance &amp; updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 4 — IT Support & Technical Services */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">🛠️</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  IT Support &amp; Technical Services
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Hands-on technical support for individuals and businesses — from software setup
                  and troubleshooting to network configuration and data protection.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Software installation &amp; OS troubleshooting</li>
                  <li>Virus &amp; malware removal</li>
                  <li>System performance optimization</li>
                  <li>Data backup &amp; recovery</li>
                  <li>Peripheral setup &amp; configuration</li>
                  <li>Network / Wi-Fi setup &amp; internet troubleshooting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 5 — Infrastructure & Online Setup */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">☁️</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Infrastructure &amp; Online Setup
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Get your business properly set up online — from professional email and cloud
                  storage to website deployment and basic security configurations.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Business email &amp; Google Workspace setup</li>
                  <li>Cloud storage &amp; user permissions</li>
                  <li>Website / app deployment</li>
                  <li>Backup systems &amp; basic security configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 6 — Digital Systems & Automation */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">⚙️</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Digital Systems &amp; Automation
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Streamline your workflows with smart digital tools — automated forms, spreadsheet
                  systems, dashboards, and lightweight internal platforms.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Online forms &amp; data collection</li>
                  <li>Workflow &amp; spreadsheet automation</li>
                  <li>Dashboard reporting</li>
                  <li>Simple internal digital tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 7 — Training & Workshops */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">🎓</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Training &amp; Workshops
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Practical, tailored digital and technical training sessions for schools, churches,
                  businesses, and individuals looking to build their digital literacy.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Website &amp; digital tool usage training</li>
                  <li>Coding workshops (HTML, CSS, JavaScript)</li>
                  <li>IT literacy sessions</li>
                  <li>Tailored workshops for schools, churches, and businesses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 8 — Digital & E-Services */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">🪪</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Digital &amp; E-Services
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  We help individuals navigate and complete essential government and institutional
                  online processes — from academic result checks to business and ID registrations.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Academic result checking (BECE / WASSCE)</li>
                  <li>School &amp; university application assistance</li>
                  <li>Passport, Ghana Card, NHIS registration</li>
                  <li>Business &amp; TIN registration</li>
                  <li>Online payments &amp; subscriptions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 9 — Digital Access & Support Services */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">🖨️</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Digital Access &amp; Support Services
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Practical day-to-day digital support for those who need help navigating online
                  platforms, managing documents, and completing digital tasks.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">What's Included:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Online service assistance &amp; navigation</li>
                  <li>Document uploading &amp; status tracking</li>
                  <li>Printing &amp; digital document delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Explore how we can support your project
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Not sure which service fits your need? Reach out and we'll point you in the right direction.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
