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
              Our Capabilities
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              End-to-end software engineering services tailored to your business
              needs.
            </p>
          </div>
        </section>

        {/* Service 1 */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">💻</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Web Development
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  We build modern, responsive, and accessible websites and web
                  applications. From simple landing pages to complex SaaS platforms,
                  we ensure your web presence is fast, secure, and SEO-friendly.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Key Features:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Single Page Applications (SPA)</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>E-commerce Solutions</li>
                  <li>Content Management Systems (CMS)</li>
                </ul>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Tech Stack:</h3>
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    React
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    Next.js
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    TypeScript
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    HTML/CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 2 */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">📱</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Mobile Development
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Reach your customers wherever they are with intuitive mobile
                  applications. We specialize in cross-platform development to
                  maximize your reach while maintaining a native look and feel.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Key Features:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>iOS and Android Support</li>
                  <li>Offline Functionality</li>
                  <li>Push Notifications</li>
                  <li>App Store Deployment</li>
                </ul>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Tech Stack:</h3>
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    React Native
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    Flutter
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    Expo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-0 border-t border-[#112240] max-w-[1200px] mx-auto" />

        {/* Service 3 */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <div className="text-5xl mb-4">☁️</div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Cloud & DevOps
                </h2>
              </div>
              <div>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Build a solid foundation for your applications with our cloud
                  infrastructure services. We ensure your systems are scalable,
                  secure, and cost-effective.
                </p>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Key Features:</h3>
                <ul className="list-disc ml-6 mb-6 text-[#8892b0]">
                  <li>Serverless Architecture</li>
                  <li>CI/CD Pipelines</li>
                  <li>Database Management</li>
                  <li>Security Audits</li>
                </ul>
                <h3 className="text-xl mb-4 text-[#ccd6f6]">Tech Stack:</h3>
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    AWS
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    Docker
                  </span>
                  <span className="bg-[#112240] text-[#e6f1ff] px-4 py-2 text-sm rounded">
                    GitHub Actions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Need a custom solution?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              We love solving unique challenges. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
