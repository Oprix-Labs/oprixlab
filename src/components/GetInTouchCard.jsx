import { createElement } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Clock } from 'lucide-react';
import { motion as Motion, useReducedMotion } from 'framer-motion';

const CONTACT_DETAILS = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'oprixlabs@gmail.com',
    href: 'mailto:oprixlabs@gmail.com',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: '+233 502 988 681',
    href: 'tel:+233 502 988 681',
  },
  {
    id: 'address',
    icon: MapPin,
    label: 'Address',
    value: 'Accra, Ghana',
    href: '#',
  },
];

const SOCIAL_LINKS = [
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { id: 'twitter', icon: Twitter, label: 'Twitter/X', href: 'https://x.com' },
  { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com' },
];

export default function GetInTouchCard() {
  const shouldReduceMotion = useReducedMotion();

  const rowsContainerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 380, damping: 24, mass: 0.6 },
    },
  };

  return (
    <aside className="rounded-2xl bg-gray-50 p-6 shadow-md dark:bg-slate-900/70 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
        Get In Touch
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">We'd love to hear from you</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Reach out for consultations, collaborations, or support. We are here to help you move your ideas forward.
      </p>

      <Motion.div
        className="mt-8 space-y-5"
        variants={rowsContainerVariants}
        initial="hidden"
        animate="show"
      >
        {CONTACT_DETAILS.map(({ id, icon, label, value, href }) => (
          <Motion.a
            key={id}
            href={href}
            variants={rowVariants}
            className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-400 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-cyan-500 dark:focus:ring-cyan-900/60"
          >
            <Motion.span
              className="mt-0.5 rounded-lg bg-cyan-100 p-2 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300"
              variants={iconVariants}
            >
              {createElement(icon, { className: 'h-4 w-4', 'aria-hidden': 'true' })}
            </Motion.span>
            <span>
              <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {label}
              </span>
              <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</span>
            </span>
          </Motion.a>
        ))}
      </Motion.div>

      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Follow us</p>
        <div className="mt-3 flex items-center gap-3">
          {SOCIAL_LINKS.map(({ id, icon, label, href }) => (
            <Motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeInOut' }}
              className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 dark:focus:ring-cyan-900/60"
            >
              {createElement(icon, { className: 'h-4 w-4', 'aria-hidden': 'true' })}
            </Motion.a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-dashed border-cyan-300 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-950/30">
        <Clock className="mt-0.5 h-4 w-4 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
        <p className="text-sm text-slate-700 dark:text-slate-200">We typically respond within 24 hours.</p>
      </div>
    </aside>
  );
}
