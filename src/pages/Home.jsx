import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import webIcon from '../assets/images/web-icon.png';
import mobileIcon from '../assets/images/mobile-icon.png';
import cloudIcon from '../assets/images/cloud-icon.png';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="max-w-[800px]">
              <span className="block text-[#64ffda] font-['Fira Code',monospace] mb-4 text-base">
                Hi, we are Oprix Lab.
              </span>
              <h1 className="text-[4rem] font-bold leading-tight text-[#ccd6f6] mb-2">
                We build digital products.
              </h1>
              <h2 className="text-[3rem] font-bold leading-tight text-[#8892b0] mb-8">
                Transforming ideas into reality.
              </h2>
              <p className="text-xl leading-relaxed max-w-[600px] mb-10 text-[#8892b0]">
                We are a software development firm specializing in building
                exceptional digital experiences. From robust web applications to
                scalable backend systems, we engineer the future of tech.
              </p>
              <Link
                to="/portfolio"
                className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                Check out our work
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              {/* Service 1 */}
              <div className="card backs group relative overflow-hidden bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <div className="card-icon flex w-[100px] mb-0">
                  <img src={webIcon} alt="Web Development" className="max-w-full h-auto" />
                  <div className="count opacity-0 group-hover:opacity-100 font-bold text-lg text-center flex justify-start items-center gap-2 whitespace-nowrap relative z-10 transition-opacity duration-500 cursor-pointer">
                    <h2>+</h2>
                    <h2 className="counter">120</h2>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="info relative z-10 p-5">
                  <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                    Web Development
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    Custom, responsive websites and web applications built with
                    modern frameworks and best practices for speed and scalability.
                  </p>
                </div>
              </div>
              {/* Service 2 */}
              <div className="card mobile group relative overflow-hidden bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <div className="card-icon flex w-[100px] mb-0">
                  <img src={mobileIcon} alt="Mobile Apps" className="max-w-full h-auto" />
                  <div className="count opacity-0 group-hover:opacity-100 font-bold text-lg text-center flex justify-start items-center gap-2 whitespace-nowrap relative z-10 transition-opacity duration-500 cursor-pointer">
                    <h2>+</h2>
                    <h2 className="counter">120</h2>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="info relative z-10 p-5">
                  <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                    Mobile Apps
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    Native and cross-platform mobile applications that provide
                    seamless user experiences on iOS and Android devices.
                  </p>
                </div>
              </div>
              {/* Service 3 */}
              <div className="card cloud group relative overflow-hidden bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <div className="card-icon flex w-[100px] mb-0">
                  <img src={cloudIcon} alt="Cloud Solutions" className="max-w-full h-auto" />
                  <div className="count opacity-0 group-hover:opacity-100 font-bold text-lg text-center flex justify-start items-center gap-2 whitespace-nowrap relative z-10 transition-opacity duration-500 cursor-pointer">
                    <h2>+</h2>
                    <h2 className="counter">120</h2>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="info relative z-10 p-5">
                  <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                    Cloud Solutions
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    Scalable cloud infrastructure design and implementation using
                    AWS, Azure, or Google Cloud to ensure your apps are always
                    online.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="work" className="py-16 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              {/* Project 1 */}
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  FinTech Dashboard
                </h3>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  A real-time analytics dashboard for a financial services firm,
                  processing millions of transactions daily.
                </p>
                <ul className="font-['Fira Code',monospace] text-xs text-[#8892b0] flex gap-4 list-none">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>D3.js</li>
                </ul>
              </div>
              {/* Project 2 */}
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  E-Commerce Platform
                </h3>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  A fully custom e-commerce solution with integrated payments,
                  inventory management, and customer CRM.
                </p>
                <ul className="font-['Fira Code',monospace] text-xs text-[#8892b0] flex gap-4 list-none">
                  <li>Next.js</li>
                  <li>Stripe</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              {/* Project 3 */}
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  AI Content Generator
                </h3>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  An AI-powered tool that helps marketers generate blog posts and
                  social media content in seconds.
                </p>
                <ul className="font-['Fira Code',monospace] text-xs text-[#8892b0] flex gap-4 list-none">
                  <li>Python</li>
                  <li>OpenAI API</li>
                  <li>Vue.js</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Why Oprix Labs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Technical Excellence
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We don't just write code; we engineer solutions that are robust,
                  maintainable, and scalable.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Client-Centric
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Your business goals are our priority. We work as an extension of
                  your team.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Future-Proof
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We use modern technologies and patterns to ensure your software
                  stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-[#8892b0] mb-8 max-w-[600px] mx-auto leading-relaxed">
              Whether you have a clear vision or just an idea, we can help you bring
              it to life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
