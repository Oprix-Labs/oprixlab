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
              About Oprix Labs
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              Building the future of technology, one line of code at a time.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Our Mission
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  To empower businesses with transformative digital solutions that
                  drive growth, efficiency, and innovation. We believe in technology
                  that serves people, not the other way around.
                </p>
              </div>
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Our Vision
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  To be the global standard for engineering excellence, creating
                  software that defines the next generation of the web and mobile
                  experiences.
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
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Innovation First
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We constantly push boundaries and explore new technologies to
                  deliver the best solutions.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Integrity
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We believe in transparent communication and honest partnerships
                  with our clients.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Quality Over Quantity
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  We prioritize writing clean, maintainable, and efficient code over
                  rushing features.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  User-Centric Design
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Every decision we make starts with the end-user in mind to ensure
                  intuitive experiences.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Collaboration
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  Great software is built by great teams. We foster a culture of
                  shared knowledge and support.
                </p>
              </div>
              <div className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer">
                <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Continuous Learning
                </h3>
                <p className="text-[#8892b0] leading-relaxed">
                  The tech landscape changes fast. We stay ahead of the curve
                  through constant education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Our Story
            </h2>
            <div className="max-w-[800px]">
              <p className="text-[#8892b0] mb-4 leading-relaxed">
                Founded in 2024, Oprix Labs began as a collective of passionate
                engineers and designers tired of the status quo in software
                development. We saw too many projects fail due to poor
                communication, legacy thinking, and bloated processes.
              </p>
              <p className="text-[#8892b0] leading-relaxed">
                We set out to build a firm that combines the agility of a startup
                with the engineering rigor of an enterprise. Today, we work with
                clients ranging from ambitious startups to established enterprises,
                helping them navigate the digital landscape with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Join our journey
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Interested in working with us or joining our team?
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
