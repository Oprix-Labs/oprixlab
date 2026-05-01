import { useState } from 'react';
import { Check, LoaderCircle, Send } from 'lucide-react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  subject: 'General Inquiry',
  message: '',
};

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Partnership',
  'Project Request',
  'Support',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL;
const EMAILJS_ACCESS_TOKEN = import.meta.env.VITE_EMAILJS_ACCESS_TOKEN;

function formatSubmittedAt() {
  return new Date().toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function validate(values) {
  const nextErrors = {};

  if (!values.fullName.trim()) {
    nextErrors.fullName = 'Please enter your full name.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    nextErrors.email = 'Please provide a valid email address.';
  }

  if (!values.subject) {
    nextErrors.subject = 'Please choose a subject.';
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Please enter your message.';
  } else if (values.message.trim().length < 10) {
    nextErrors.message = 'Your message should be at least 10 characters.';
  }

  return nextErrors;
}

export default function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState('');
  const [submitState, setSubmitState] = useState('idle');
  const [errorPulseToken, setErrorPulseToken] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const isSubmitting = submitState === 'loading';
  const isSuccess = submitState === 'success';

  const fieldHint = (fieldName, filledText) => {
    if (focusedField === fieldName) {
      return 'Typing...';
    }

    if (formValues[fieldName]?.trim()) {
      return filledText;
    }

    return 'Required';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const updatedErrors = { ...prev };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(formValues);
    setErrors(nextErrors);
    setSuccessMessage('');

    if (Object.keys(nextErrors).length > 0) {
      setErrorPulseToken((prev) => prev + 1);
      return;
    }

    setSubmitState('loading');

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('Missing EmailJS environment variables.');
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          ...(typeof EMAILJS_ACCESS_TOKEN === 'string' && EMAILJS_ACCESS_TOKEN.trim()
            ? { accessToken: EMAILJS_ACCESS_TOKEN.trim() }
            : {}),
          template_params: {
            name: formValues.fullName.trim(),
            email: formValues.email.trim(),
            subject: formValues.subject,
            message: formValues.message.trim(),
            time: formatSubmittedAt(),
            to_email: EMAILJS_TO_EMAIL,
          },
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`EmailJS /send failed (${response.status} ${response.statusText}) ${errorBody}`.trim());
      }

      setSuccessMessage('Message sent successfully. We will get back to you soon.');
      setFormValues(INITIAL_FORM);
      setSubmitState('success');
      window.setTimeout(() => setSubmitState('idle'), 1600);
    } catch (error) {
      const fallbackMessage =
        'Something went wrong while sending your message. Please try again.';
      const errorMessage =
        error instanceof Error ? error.message : fallbackMessage;

      // Keep this visible in DevTools to troubleshoot non-2xx responses quickly.
      console.error('[ContactForm] Email submit failed:', errorMessage);
      setSubmitState('idle');
      setErrors({
        submit: errorMessage || fallbackMessage,
      });
    }
  };

  const focusMotion = shouldReduceMotion
    ? {}
    : {
        scale: 1.01,
        boxShadow: '0 0 0 4px rgba(34, 211, 238, 0.18)',
      };

  const errorPulseMotion = (fieldName) => {
    if (!errors[fieldName]) {
      return {};
    }

    return {
      borderColor: ['#f43f5e', '#fb7185', '#f43f5e'],
      transition: { duration: shouldReduceMotion ? 0 : 0.36, ease: 'easeInOut' },
    };
  };

  const errorEnter = shouldReduceMotion ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: -4, x: 0 };
  const errorAnimate = shouldReduceMotion
    ? { opacity: 1, y: 0, x: 0 }
    : {
        opacity: 1,
        y: 0,
        x: [0, -8, 8, -4, 4, 0],
        transition: { duration: 0.35, ease: 'easeOut' },
      };
  const errorExit = shouldReduceMotion
    ? { opacity: 0, y: 0 }
    : { opacity: 0, y: -6, transition: { duration: 0.2, ease: 'easeInOut' } };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
        Send Us a Message
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Let's talk</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Tell us a bit about your goals and we will point you in the right direction.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
            Full Name{' '}
            <AnimatePresence mode="wait">
              <Motion.span
                key={`hint-fullName-${focusedField === 'fullName'}-${Boolean(formValues.fullName.trim())}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeInOut' }}
                className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400"
              >
                ({fieldHint('fullName', 'Looks good')})
              </Motion.span>
            </AnimatePresence>
          </label>
          <Motion.input
            key={`fullName-${errorPulseToken}`}
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={formValues.fullName}
            onChange={handleChange}
            onFocus={() => setFocusedField('fullName')}
            onBlur={() => setFocusedField('')}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            aria-invalid={Boolean(errors.fullName)}
            whileFocus={focusMotion}
            animate={errorPulseMotion('fullName')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/50"
            placeholder="Jane Doe"
          />
          <AnimatePresence>
            {errors.fullName && (
              <Motion.p
                id="fullName-error"
                initial={errorEnter}
                animate={errorAnimate}
                exit={errorExit}
                className="mt-1 text-sm text-rose-600 dark:text-rose-400"
              >
                {errors.fullName}
              </Motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
            Email Address{' '}
            <AnimatePresence mode="wait">
              <Motion.span
                key={`hint-email-${focusedField === 'email'}-${Boolean(formValues.email.trim())}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeInOut' }}
                className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400"
              >
                ({fieldHint('email', 'Ready to reach back')})
              </Motion.span>
            </AnimatePresence>
          </label>
          <Motion.input
            key={`email-${errorPulseToken}`}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            whileFocus={focusMotion}
            animate={errorPulseMotion('email')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/50"
            placeholder="you@company.com"
          />
          <AnimatePresence>
            {errors.email && (
              <Motion.p
                id="email-error"
                initial={errorEnter}
                animate={errorAnimate}
                exit={errorExit}
                className="mt-1 text-sm text-rose-600 dark:text-rose-400"
              >
                {errors.email}
              </Motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
            Subject
          </label>
          <Motion.select
            key={`subject-${errorPulseToken}`}
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField('')}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            aria-invalid={Boolean(errors.subject)}
            whileFocus={focusMotion}
            animate={errorPulseMotion('subject')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition duration-200 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/50"
          >
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Motion.select>
          <AnimatePresence>
            {errors.subject && (
              <Motion.p
                id="subject-error"
                initial={errorEnter}
                animate={errorAnimate}
                exit={errorExit}
                className="mt-1 text-sm text-rose-600 dark:text-rose-400"
              >
                {errors.subject}
              </Motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
            Message{' '}
            <AnimatePresence mode="wait">
              <Motion.span
                key={`hint-message-${focusedField === 'message'}-${Boolean(formValues.message.trim())}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeInOut' }}
                className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400"
              >
                ({fieldHint('message', 'Great context')})
              </Motion.span>
            </AnimatePresence>
          </label>
          <Motion.textarea
            key={`message-${errorPulseToken}`}
            id="message"
            name="message"
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={Boolean(errors.message)}
            whileFocus={focusMotion}
            animate={errorPulseMotion('message')}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/50"
            placeholder="Tell us about your project, timeline, and goals."
          />
          <AnimatePresence>
            {errors.message && (
              <Motion.p
                id="message-error"
                initial={errorEnter}
                animate={errorAnimate}
                exit={errorExit}
                className="mt-1 text-sm text-rose-600 dark:text-rose-400"
              >
                {errors.message}
              </Motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {errors.submit && (
            <Motion.p
              initial={errorEnter}
              animate={errorAnimate}
              exit={errorExit}
              className="text-sm text-rose-600 dark:text-rose-400"
            >
              {errors.submit}
            </Motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {successMessage && (
            <Motion.p
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' }}
              className="rounded-lg bg-emerald-100 px-3 py-2 text-sm text-emerald-800 dark:bg-emerald-900/35 dark:text-emerald-300"
            >
              {successMessage}
            </Motion.p>
          )}
        </AnimatePresence>

        <Motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={
            shouldReduceMotion || isSubmitting
              ? {}
              : { scale: 1.03, filter: 'brightness(1.07) saturate(1.04)' }
          }
          whileTap={shouldReduceMotion || isSubmitting ? {} : { scale: 0.97 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeInOut' }}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-70 ${
            isSuccess
              ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.65)] focus:ring-emerald-300 dark:bg-emerald-400 dark:text-slate-900 dark:focus:ring-emerald-900/60'
              : 'btn-gradient-border-flow text-white shadow-[0_0_18px_rgba(6,182,212,0.7)] focus:ring-cyan-300 dark:text-slate-900 dark:shadow-[0_0_20px_rgba(34,211,238,0.65)] dark:focus:ring-cyan-900/70'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isSubmitting ? (
              <Motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2"
              >
                <Motion.span
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }
                  }
                >
                  <LoaderCircle className="h-4 w-4" aria-hidden="true" />
                </Motion.span>
                Sending...
              </Motion.span>
            ) : isSuccess ? (
              <Motion.span
                key="success"
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="inline-flex items-center gap-2"
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                Message Sent
              </Motion.span>
            ) : (
              <Motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </Motion.span>
            )}
          </AnimatePresence>
        </Motion.button>
      </form>
    </section>
  );
}
