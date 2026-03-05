import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Please enter your name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Please enter a message';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Let's Build Together
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-[#ccd6f6] font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 bg-[#112240] border ${
                        errors.name ? 'border-[#f5576c]' : 'border-transparent'
                      } rounded text-[#e6f1ff] font-['Inter',system-ui,-apple-system,sans-serif] text-base transition-all duration-200 focus:outline-none focus:border-[#64ffda]`}
                    />
                    {errors.name && <p className="text-[#f5576c] text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-[#ccd6f6] font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 bg-[#112240] border ${
                        errors.email ? 'border-[#f5576c]' : 'border-transparent'
                      } rounded text-[#e6f1ff] font-['Inter',system-ui,-apple-system,sans-serif] text-base transition-all duration-200 focus:outline-none focus:border-[#64ffda]`}
                    />
                    {errors.email && <p className="text-[#f5576c] text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="company" className="block mb-2 text-[#ccd6f6] font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#112240] border border-transparent rounded text-[#e6f1ff] font-['Inter',system-ui,-apple-system,sans-serif] text-base transition-all duration-200 focus:outline-none focus:border-[#64ffda]"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block mb-2 text-[#ccd6f6] font-medium">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-3 bg-[#112240] border border-transparent rounded text-[#e6f1ff] font-['Inter',system-ui,-apple-system,sans-serif] text-base transition-all duration-200 focus:outline-none focus:border-[#64ffda]"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-[#ccd6f6] font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 bg-[#112240] border ${
                        errors.message ? 'border-[#f5576c]' : 'border-transparent'
                      } rounded text-[#e6f1ff] font-['Inter',system-ui,-apple-system,sans-serif] text-base transition-all duration-200 focus:outline-none focus:border-[#64ffda] resize-y min-h-[150px]`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[#f5576c] text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
                  Get in touch
                </h2>
                <div className="bg-[#112240] p-8 rounded">
                  <div className="mb-8">
                    <h3 className="text-xl mb-2 text-[#64ffda]">Email</h3>
                    <p className="text-[#8892b0]">hello@oprixlabs.com</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl mb-2 text-[#64ffda]">Business Hours</h3>
                    <p className="text-[#8892b0]">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl mb-2 text-[#64ffda]">Follow Us</h3>
                    <div className="flex gap-4 mt-4">
                      <a
                        href="#"
                        className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      >
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2 text-[#64ffda]">Response Time</h3>
                    <p className="text-[#8892b0]">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
