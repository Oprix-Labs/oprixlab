import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import webIcon from '../assets/images/web-icon.png';
import mobileIcon from '../assets/images/mobile-icon.png';
import cloudIcon from '../assets/images/cloud-icon.png';

// smooth scroll hook for anchor links
function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handler));
    return () => anchors.forEach((a) => a.removeEventListener('click', handler));
  }, []);
}

// service card with hover counter animation
function ServiceCard({ icon, alt, title, description, target = 120 }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const handleMouseEnter = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const increment = target / 100;
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };
    update();
  };

  return (
    <div
      className="card group relative overflow-hidden bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <div className="card-icon flex w-[100px] mb-0">
        <img src={icon} alt={alt || title} className="max-w-full h-auto" />
        <div className="count opacity-0 group-hover:opacity-100 font-bold text-lg text-center flex justify-start items-center gap-2 whitespace-nowrap relative z-10 transition-opacity duration-500 cursor-pointer">
          <h2>+</h2>
          <h2 className="counter">{count}</h2>
          <p>Projects Completed</p>
        </div>
      </div>
      <div className="info relative z-10 p-5">
        <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
          {title}
        </h3>
        <p className="text-[#8892b0] mb-4">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-[#020c1b] to-[#011027]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="max-w-[800px]">
              <span className="block text-[#64ffda] font-['Fira Code',monospace] mb-4 text-base">
                Hi, we are Oprix Lab.
              </span>
              <h1 className="text-[4rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                Collective Brilliance,
              </h1>
              <h2 className="text-[3rem] font-bold leading-tight text-[#8892b0] mb-8">
                Real World Results.
              </h2>
              <p className="text-xl leading-relaxed max-w-[600px] mb-10 text-[#8892b0]">
                Oprix Lab is a curated network of skilled technical professionals delivering
                trusted digital solutions under one brand.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-[#64ffda] text-[#020c1b] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.85)] hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-[#011027]">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed max-w-[700px] mx-auto text-[#8892b0]">
              Delivering reliable, accessible, and trustworthy digital and technical solutions
              through a curated network of skilled professionals.
            </p>
          </div>
        </section>

        {/* Core Services Snapshot */}
        <section id="services" className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <ServiceCard
                icon={webIcon}
                title="Web Solutions"
                description="Website design, development, maintenance, security, and performance optimization for businesses and individuals."
                target={120}
              />
              <ServiceCard
                icon={mobileIcon}
                title="Mobile Applications"
                description="Simple to functional cross-platform mobile apps for Android and iOS, including internal tools and event apps."
                target={120}
              />
              <ServiceCard
                icon={cloudIcon}
                title="IT Support & Infrastructure"
                description="Software setup, troubleshooting, network configuration, cloud storage, and online system deployment."
                target={120}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-[800px]">
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Digital Systems & Automation
                </h3>
                <p className="text-[#8892b0]">
                  Online forms, workflow automation, dashboards, and simple internal digital tools tailored to your operations.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Online Facilitation
                </h3>
                <p className="text-[#8892b0]">
                  Digital access support, e-services assistance, document handling, and online service navigation for individuals and organizations.
                </p>
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

        {/* Why Choose Oprix Lab */}
        <section className="py-16 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Why Choose Oprix Lab?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Trust & Accountability
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Every member is curated and accountable under the Oprix Lab brand. Clients deal with a single trusted point of contact.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Competence
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Our curated network brings verified technical skill to every project, ensuring quality outcomes across all service areas.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Professionalism
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We operate with clear processes, structured delivery, and a commitment to real-world results for universities, businesses, and individuals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-16 text-center bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Ready to start your project?
            </h2>
            <p className="text-[#8892b0] mb-8 max-w-[600px] mx-auto leading-relaxed">
              Whether you need a website, mobile app, IT support, or digital assistance — we have the right professional for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
