import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Requirements',
      description:
        'We start by listening. We deep dive into your business goals, target audience, and technical requirements to understand exactly what needs to be built.',
      deliverables: 'Project Brief, Requirement Specifications',
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description:
        'We outline the technical architecture, choose the right technology stack, and create a roadmap. This ensures we build a scalable solution from day one.',
      deliverables: 'Technical Architecture Doc, Project Roadmap',
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description:
        'Our designers create high-fidelity mockups and interactive prototypes, giving you a clear visual of the final product before we write a single line of code.',
      deliverables: 'UI/UX Designs, Interactive Prototypes',
    },
    {
      number: '04',
      title: 'Development',
      description:
        'This is where the magic happens. We code your solution using best practices, ensuring clean, maintainable, and efficient code.',
      deliverables: 'Alpha/Beta Builds, Source Code',
    },
    {
      number: '05',
      title: 'Testing & QA',
      description:
        'We rigorously test the application across different devices, browsers, and scenarios to catch bugs and maximize performance.',
      deliverables: 'Test Reports, Bug Fixes',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description:
        'We deploy your application to production and monitor it closely. Our relationship doesn\'t end at launch; we offer ongoing support and maintenance.',
      deliverables: 'Live Product, Documentation, Support Plan',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              How We Work
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              A proven methodology designed to deliver transparency, quality, and
              results.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[800px] mx-auto px-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex mb-12 relative">
                <div className="font-['Fira Code',monospace] text-6xl font-bold text-[#112240] mr-8 leading-none opacity-50 hover:text-[#64ffda] hover:opacity-100 transition-all duration-300">
                  {step.number}
                </div>
                <div
                  className={`flex-1 ${
                    idx !== steps.length - 1 ? 'border-l-2' : ''
                  } border-[#112240] pl-8 pb-8`}
                >
                  <h2 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#8892b0] mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-[#8892b0]">
                    <strong>Deliverables:</strong> {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Ready to start?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Let's turn your vision into a reality.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Start Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
