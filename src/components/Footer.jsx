import { useState } from 'react';
import { Link } from 'react-router-dom';
import oprixLogo from '../assets/images/oprix-labs-logo.png';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects / Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  'Web Development',
  'Software Development',
  'Digital Transformation',
  'UI/UX Design',
  'Cloud Solutions',
  'IT Consulting',
];

const resources = ['Blog', 'Case Studies', 'FAQs', 'Documentation', 'Support'];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.08H5.92V17.34H8.34ZM7.13 8.97A1.41 1.41 0 1 0 7.13 6.16A1.41 1.41 0 0 0 7.13 8.97ZM18.09 17.34V13.25C18.09 11.06 16.92 10.04 15.35 10.04C14.08 10.04 13.51 10.74 13.19 11.23V10.08H10.77C10.8 10.84 10.77 17.34 10.77 17.34H13.19V13.29C13.19 13.08 13.2 12.87 13.27 12.72C13.44 12.3 13.82 11.87 14.46 11.87C15.3 11.87 15.63 12.51 15.63 13.45V17.34H18.09Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.9 2H22L15.23 9.74L23.2 22H16.96L12.08 14.57L5.57 22H2.46L9.7 13.72L2.06 2H8.46L12.87 8.79L18.9 2ZM17.81 20.03H19.53L7.52 3.86H5.66L17.81 20.03Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.74 4.87 20.57 8.84 21.92C9.34 22.02 9.52 21.7 9.52 21.43C9.52 21.19 9.51 20.53 9.51 19.77C6.73 20.39 6.14 18.56 6.14 18.56C5.68 17.34 5.03 17.02 5.03 17.02C4.12 16.38 5.1 16.39 5.1 16.39C6.1 16.47 6.63 17.44 6.63 17.44C7.52 19.01 8.97 18.56 9.54 18.29C9.63 17.63 9.89 17.18 10.17 16.92C7.95 16.66 5.62 15.77 5.62 11.8C5.62 10.67 6.01 9.74 6.65 9.02C6.55 8.76 6.2 7.7 6.75 6.27C6.75 6.27 7.59 6 9.5 7.33C10.3 7.1 11.15 6.98 12 6.98C12.85 6.98 13.7 7.1 14.5 7.33C16.41 6 17.25 6.27 17.25 6.27C17.8 7.7 17.45 8.76 17.35 9.02C17.99 9.74 18.38 10.67 18.38 11.8C18.38 15.78 16.04 16.66 13.81 16.91C14.17 17.24 14.49 17.88 14.49 18.86C14.49 20.25 14.48 21.11 14.48 21.43C14.48 21.7 14.66 22.03 15.17 21.92C19.13 20.57 22 16.74 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.75 2H16.25C19.42 2 22 4.58 22 7.75V16.25C22 19.42 19.42 22 16.25 22H7.75C4.58 22 2 19.42 2 16.25V7.75C2 4.58 4.58 2 7.75 2ZM7.55 4A3.56 3.56 0 0 0 4 7.55V16.45A3.56 3.56 0 0 0 7.55 20H16.45A3.56 3.56 0 0 0 20 16.45V7.55A3.56 3.56 0 0 0 16.45 4H7.55ZM17.5 5.5A1 1 0 1 1 17.5 7.5A1 1 0 0 1 17.5 5.5ZM12 7A5 5 0 1 1 12 17A5 5 0 0 1 12 7ZM12 9A3 3 0 1 0 12 15A3 3 0 0 0 12 9Z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 22V13.88H16.2L16.61 10.72H13.5V8.7C13.5 7.78 13.76 7.16 15.1 7.16H16.72V4.34C15.93 4.25 15.13 4.2 14.34 4.2C11.99 4.2 10.38 5.63 10.38 8.27V10.72H7.69V13.88H10.38V22H13.5Z" />
      </svg>
    ),
  },
];

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

export default function Footer() {
  const [newsletterState, setNewsletterState] = useState('idle');

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterState('success');
  };

  return (
    <footer className="mt-auto border-t border-[#1f3a5f] bg-[#08182c] text-[#cbd5e1]" aria-label="Site footer">
      <div className="mx-auto max-w-[1200px] px-6 pb-6 pt-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <section aria-labelledby="company-overview">
            <div className="mb-5 flex items-center gap-3">
              <img src={oprixLogo} alt="Oprix Labs logo" className="h-10 w-10 rounded-xl object-contain" />
              <p className="text-lg font-semibold tracking-tight text-[#f1f5f9]">Oprix Labs</p>
            </div>
            <h2 id="company-overview" className="sr-only">
              Company Overview
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#94a3b8]">
              Oprix Labs helps growth-focused businesses solve complex challenges
              through engineering excellence, product thinking, and digital
              innovation.
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                Subscribe to updates
              </h3>
              <form
                className="mt-3 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                aria-label="Newsletter subscription form"
                onSubmit={handleNewsletterSubmit}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-lg border border-[#2f4e74] bg-[#0b1f36] px-4 text-sm text-[#e2e8f0] placeholder:text-[#7b8fa9] focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/40"
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="h-11 rounded-lg bg-[#22d3ee] px-5 text-sm font-semibold text-[#03202a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#67e8f9] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/60"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-[#7b8fa9]" aria-live="polite">
                {newsletterState === 'success'
                  ? 'Thanks for subscribing. You will hear from us soon.'
                  : 'Get product updates and engineering insights in your inbox.'}
              </p>
            </div>
          </section>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8fafc]">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center text-[#94a3b8] transition-all duration-300 hover:translate-x-1 hover:text-[#22d3ee]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="services-footer-heading">
            <h2
              id="services-footer-heading"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8fafc]"
            >
              Services
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#94a3b8]">
              {services.map((service) => (
                <li key={service}>
                  <span className="transition-colors duration-300 hover:text-[#22d3ee]">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="resources-footer-heading">
            <h2
              id="resources-footer-heading"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8fafc]"
            >
              Resources
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#94a3b8] transition-all duration-300 hover:translate-x-1 hover:text-[#22d3ee]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#1f3a5f] pt-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <section aria-labelledby="contact-footer-heading">
            <h2
              id="contact-footer-heading"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8fafc]"
            >
              Contact Information
            </h2>
            <address className="mt-4 not-italic text-sm leading-7 text-[#94a3b8]">
              <p>
                Email:{' '}
                <a
                  href="mailto:hello@oprixlabs.com"
                  className="transition-colors duration-300 hover:text-[#22d3ee]"
                >
                  hello@oprixlabs.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+15551234567" className="transition-colors duration-300 hover:text-[#22d3ee]">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>Office: 200 Innovation Drive, Austin, TX 78701</p>
              <p>Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
            </address>
          </section>

          <section aria-label="Social media links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f8fafc]">Social</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#2f4e74] bg-[#0b1f36] text-[#cbd5e1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22d3ee] hover:text-[#22d3ee]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-[#1f3a5f] pt-6">
          <div className="flex flex-col gap-4 text-xs text-[#8295ad] md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Oprix Labs. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((legal) => (
                <li key={legal}>
                  <a href="#" className="transition-colors duration-300 hover:text-[#22d3ee]">
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Built with <span aria-hidden="true">❤</span> by Oprix Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
