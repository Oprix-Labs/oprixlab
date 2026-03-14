import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              How we protect and manage your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[900px] mx-auto px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Information We Collect
                </h2>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Oprix Labs collects only the information required to deliver and support client
                  services, such as contact details, project requirements, and communication records.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>Client information is used solely for project communication, delivery, and support.</li>
                  <li>We do not sell or rent personal data to third parties.</li>
                  <li>Data access is restricted to authorized team members assigned to a project.</li>
                  <li>Reasonable technical and organizational safeguards are applied to protect stored data.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Data Security
                </h2>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  We implement industry-standard security measures to protect your personal data from
                  unauthorized access, alteration, disclosure, or destruction. All communication with our
                  server is encrypted using SSL/TLS protocols.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Data Retention
                </h2>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Client data is retained only for the duration of the project and reasonable period
                  thereafter for business and legal requirements. Data is securely deleted upon
                  client request or completion of legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Contact Us
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  If you have questions or concerns about our privacy practices, please contact us
                  at <span className="text-[#22d3ee]">oprixlabs@gmail.com</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
