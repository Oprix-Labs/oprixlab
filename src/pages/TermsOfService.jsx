import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Terms of Service
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              The terms and conditions governing your engagement with Oprix Labs.
            </p>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[900px] mx-auto px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  By engaging Oprix Labs, clients agree to the project scope, payment terms, and
                  delivery process defined in the approved proposal or written agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Client Responsibilities
                </h2>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>Clients must provide accurate project requirements and timely feedback.</li>
                  <li>Payment must be made according to the agreed billing schedule.</li>
                  <li>Delayed feedback or input may extend delivery timelines accordingly.</li>
                  <li>Clients are responsible for ensuring all requested content and assets are lawful.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Project Work & Delivery
                </h2>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>Work begins only after payment confirmation according to agreed billing terms.</li>
                  <li>Delivery timelines may be adjusted if scope changes or required inputs are delayed.</li>
                  <li>All deliverables are provided as specified in the approved project scope.</li>
                  <li>Upon delivery and sign-off, the client receives full ownership of agreed-upon deliverables.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Acceptable Use
                </h2>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>All services must be requested and used for lawful purposes only.</li>
                  <li>Services may not be used for illegal, fraudulent, or unethical purposes.</li>
                  <li>Clients agree not to use Oprix Labs for misrepresenting identity or unauthorized access.</li>
                  <li>Any violation of these terms may result in immediate termination of services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Oprix Labs is not liable for any indirect, incidental, or consequential damages resulting
                  from the use or inability to use our services. Our total liability for any claim shall not
                  exceed the amount paid by the client for the project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Changes to Terms
                </h2>
                <p className="text-[#8892b0] leading-relaxed">
                  Oprix Labs reserves the right to update these terms at any time. Continued use of our
                  services following changes constitutes acceptance of the revised terms. We encourage
                  clients to review these terms periodically.
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
