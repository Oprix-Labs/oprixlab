import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import GetInTouchCard from '../components/GetInTouchCard';
import { motion as Motion, useReducedMotion } from 'framer-motion';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const parentVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-100 pt-24 text-slate-700 dark:bg-slate-950 dark:text-slate-200">
        <Motion.section
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
          variants={parentVariants}
          initial="hidden"
          animate="show"
        >
          <Motion.div className="mx-auto max-w-2xl text-center" variants={headingVariants}>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">
              Start Your Project with Oprix Labs
            </h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Share your idea, timeline, and goals. Our team will help you shape the right solution.
            </p>
          </Motion.div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Motion.div variants={cardVariants}>
              <GetInTouchCard />
            </Motion.div>
            <Motion.div variants={formVariants}>
              <ContactForm />
            </Motion.div>
          </div>
        </Motion.section>
      </main>
      <Footer />
    </>
  );
}
