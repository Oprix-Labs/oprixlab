import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              About Oprix Lab
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              A curated collective building real-world results through skilled professionals.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Who We Are
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  Oprix Lab is a private tech collective. We curate skilled professionals to
                  deliver multi-service digital solutions — spanning web development, mobile apps,
                  IT support, digital systems, and online facilitation.
                </p>
              </div>
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Our Mission
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  Delivering reliable, accessible, and trustworthy digital and technical solutions
                  through a curated network of skilled professionals. We aim to build reputation,
                  deliver real projects, and develop operational experience before formal company
                  registration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Trust
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Our single most important value. Every client interaction, member assignment, and
                  project delivery is guided by accountability and transparency.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Accountability
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Every member operates under the Oprix Lab brand with clear responsibilities. We
                  take ownership of our commitments from inquiry to delivery.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Competence
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We curate only skilled, capable professionals. Technical quality is non-negotiable
                  — we only accept members who can reliably deliver results.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Professionalism
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We operate with structure, process documentation, and consistent standards — even
                  as an unregistered collective. Professional conduct is expected at every level.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Accessibility
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We make reliable digital solutions accessible to individuals, small businesses,
                  churches, schools, and organizations at every level.
                </p>
              </div>
              <div className="bg-[#0d1f3c] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Structured Growth
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We don't rush. The trial-phase strategy ensures sustainable growth — building
                  systems and reputation before scaling and formal registration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story / Trial Phase Strategy */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Our Story
            </h2>
            <div className="max-w-[800px]">
              <p className="text-[#8892b0] mb-6 leading-relaxed">
                Oprix Lab was founded as a structured experiment during university — a deliberate plan to build a trustworthy digital brand before formal registration. Rather
                than waiting for the "perfect" moment, we chose to act: build systems, deliver real
                projects, and earn a reputation the right way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-[#112240] rounded-[15px] p-6 border-l-4 border-[#64ffda]">
                  <h3 className="text-xl font-bold text-[#64ffda] mb-3">Year 1 — Build</h3>
                  <p className="text-[#8892b0] leading-relaxed">
                    Establish internal systems, onboard skilled members, deliver real client
                    projects, and collect testimonials. Focus on execution and learning.
                  </p>
                </div>
                <div className="bg-[#112240] rounded-[15px] p-6 border-l-4 border-[#64ffda]">
                  <h3 className="text-xl font-bold text-[#64ffda] mb-3">Year 2 — Refine</h3>
                  <p className="text-[#8892b0] leading-relaxed">
                    Improve structure, increase pricing, standardize documentation, and prepare for
                    formal company registration. Scale sustainably with proven operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-16 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8 text-center">
              Organizational Structure
            </h2>
            <div className="max-w-[800px] mx-auto">
              <div className="flex flex-col gap-4">
                <div className="bg-[#64ffda] text-[#020c1b] rounded-[15px] p-6 text-center shadow-lg">
                  <h3 className="text-xl font-bold mb-1">Founder</h3>
                  <p className="text-sm">Strategic head &amp; brand custodian — final approvals, client communication, quality control</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-[#64ffda]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#64ffda]/30">
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Operations Manager</h3>
                    <p className="text-sm text-[#8892b0]">Internal coordination, member verification, deadline monitoring, talent management</p>
                  </div>
                  <div className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#64ffda]/30">
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Client Acquisition Team</h3>
                    <p className="text-sm text-[#8892b0]">Lead generation, proposal preparation, marketing coordination</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-[#64ffda]"></div>
                </div>
                <div className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#64ffda]/30">
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Members — Technical Pool</h3>
                  <p className="text-sm text-[#8892b0]">Curated skilled professionals across web, mobile, IT, digital systems, and facilitation services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Be part of the journey
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Interested in working with us or joining our curated network of professionals?
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
