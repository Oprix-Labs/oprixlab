import { useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ─── Service data ────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'web-solutions',
    icon: '🌐',
    title: 'Web Solutions',
    desc: 'From simple landing pages to full business websites, we design and build modern, responsive web presences tailored to your goals. We also handle ongoing maintenance and optimization.',
    items: [
      'Website design & development (static & CMS)',
      'Website redesign & maintenance',
      'Website security & performance optimization',
      'Hosting & domain management',
      'Basic SEO setup',
      'Contact forms & email integration',
    ],
  },
  {
    id: 'web-applications',
    icon: '💻',
    title: 'Web Applications',
    desc: 'Interactive, functional web apps built to solve real operational problems, from booking systems and portals to dashboards and data collection tools.',
    items: [
      'Simple web applications',
      'Booking & reservation systems',
      'Login / authentication systems',
      'Dashboards & inventory systems',
      'School / organization portals',
      'Form-based systems & data collection tools',
    ],
  },
  {
    id: 'mobile-applications',
    icon: '📱',
    title: 'Mobile Applications',
    desc: 'Mobile apps built for practical use: informational apps, event or directory apps, and lightweight internal tools, deployed cross-platform on Android and iOS.',
    items: [
      'Simple informational apps',
      'Event & directory apps',
      'Internal-use mobile tools',
      'Cross-platform setup (Android / iOS)',
      'App maintenance & updates',
    ],
  },
  {
    id: 'it-support-technical-services',
    icon: '🛠️',
    title: 'IT Support & Technical Services',
    desc: 'Hands-on technical support for individuals and businesses, from software setup and troubleshooting to network configuration and data protection.',
    items: [
      'Software installation & OS troubleshooting',
      'Virus & malware removal',
      'System performance optimization',
      'Data backup & recovery',
      'Peripheral setup & configuration',
      'Network / Wi-Fi setup & internet troubleshooting',
    ],
  },
  {
    id: 'infrastructure-online-setup',
    icon: '☁️',
    title: 'Infrastructure & Online Setup',
    desc: 'Get your business properly set up online, from professional email and cloud storage to website deployment and basic security configurations.',
    items: [
      'Business email & Google Workspace setup',
      'Cloud storage & user permissions',
      'Website / app deployment',
      'Backup systems & basic security configuration',
    ],
  },
  {
    id: 'digital-systems-automation',
    icon: '⚙️',
    title: 'Digital Systems & Automation',
    desc: 'Streamline your workflows with smart digital tools: automated forms, spreadsheet systems, dashboards, and lightweight internal platforms.',
    items: [
      'Online forms & data collection',
      'Workflow & spreadsheet automation',
      'Dashboard reporting',
      'Simple internal digital tools',
    ],
  },
  {
    id: 'training-workshops',
    icon: '🎓',
    title: 'Training & Workshops',
    desc: 'Practical, tailored digital and technical training sessions for schools, churches, businesses, and individuals looking to build their digital literacy.',
    items: [
      'Website & digital tool usage training',
      'Coding workshops (HTML, CSS, JavaScript)',
      'IT literacy sessions',
      'Tailored workshops for schools, churches, and businesses',
    ],
  },
  {
    id: 'digital-e-services',
    icon: '🪪',
    title: 'Digital & E-Services',
    desc: 'We help individuals navigate and complete essential government and institutional online processes, from academic result checks to business and ID registrations.',
    items: [
      'Academic result checking (BECE / WASSCE)',
      'School & university application assistance',
      'Passport, Ghana Card, NHIS registration',
      'Business & TIN registration',
      'Online payments & subscriptions',
    ],
  },
  {
    id: 'digital-access-support',
    icon: '🖨️',
    title: 'Digital Access & Support Services',
    desc: 'Practical day-to-day digital support for those who need help navigating online platforms, managing documents, and completing digital tasks.',
    items: [
      'Online service assistance & navigation',
      'Document uploading & status tracking',
      'Printing & digital document delivery',
    ],
  },
];

/* ─── Framer Motion variants ──────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/* ─── Scroll Progress Bar ─────────────────────────────────────────────────── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="about-scroll-progress"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
}

/* ─── Three.js Hero Background (torus knot — distinct from About's icosahedron) */
function HeroCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId;
    let renderer;
    let resizeObs;

    import('three').then((THREE) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 4.5;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Inner torus knot — electric blue
      const geo1 = new THREE.TorusKnotGeometry(1.1, 0.32, 80, 12);
      const mat1 = new THREE.MeshBasicMaterial({
        color: 0x0066ff,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });
      const mesh1 = new THREE.Mesh(geo1, mat1);
      scene.add(mesh1);

      // Outer sphere shell — cyan
      const geo2 = new THREE.SphereGeometry(2.4, 16, 12);
      const mat2 = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.07,
      });
      const mesh2 = new THREE.Mesh(geo2, mat2);
      scene.add(mesh2);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const { x, y } = mouseRef.current;
        mesh1.rotation.x += 0.004 + y * 0.0007;
        mesh1.rotation.y += 0.005 + x * 0.0007;
        mesh2.rotation.y += 0.0015;
        mesh2.rotation.x += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      resizeObs = new ResizeObserver(() => {
        if (!canvas.parentElement) return;
        const pw = canvas.parentElement.clientWidth;
        const ph = canvas.parentElement.clientHeight;
        camera.aspect = pw / ph;
        camera.updateProjectionMatrix();
        renderer.setSize(pw, ph);
      });
      if (parent) resizeObs.observe(parent);
    });

    const onMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
      if (resizeObs) resizeObs.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}

/* ─── Animated scan-line divider (replaces <hr>) ─────────────────────────── */
function ScanDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <motion.div
        className="services-scan-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}

/* ─── Magnetic CTA wrapper ────────────────────────────────────────────────── */
function Magnetic({ children }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.35;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate3d(${dx}px,${dy}px,0)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0,0,0)';
  }, []);

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: 'inline-block',
        transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        willChange: 'transform',
      }}
    >
      {children}
    </span>
  );
}

/* ─── Main Services Page ──────────────────────────────────────────────────── */
export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // Delay lets the page finish rendering before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">

        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <section
          className="py-16 bg-[#020c1b] pt-[120px] pb-10 about-section relative overflow-hidden"
          style={{ minHeight: '38vh' }}
        >
          <HeroCanvas />
          <div className="max-w-[1200px] mx-auto px-8 text-center relative" style={{ zIndex: 1 }}>
            <motion.h1
              className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              A full spectrum of digital and technical solutions delivered by curated professionals.
            </motion.p>
          </div>
        </section>

        {/* ── Service Sections ─────────────────────────────────────────────── */}
        {SERVICES.map((svc, i) => (
          <div key={svc.title}>
            <section
              {...(svc.id ? { id: svc.id } : {})}
              className="py-16 bg-[#020c1b] about-section"
            >
              <div className="max-w-[1200px] mx-auto px-8">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  {/* Left: icon + heading */}
                  <motion.div variants={fadeUp} custom={0}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="services-icon-badge">
                        <span>{svc.icon}</span>
                      </div>
                      <h2 className="text-[2rem] font-bold leading-tight text-[#ccd6f6]">
                        {svc.title}
                      </h2>
                    </div>
                    <motion.span
                      className="about-accent-line"
                      style={{ display: 'block', transformOrigin: 'left', marginTop: '6px' }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                    />
                  </motion.div>

                  {/* Right: description + list */}
                  <motion.div variants={fadeUp} custom={1}>
                    <p className="text-[#8892b0] mb-4 leading-relaxed">{svc.desc}</p>
                    <motion.h3
                      className="text-xl mb-4 text-[#ccd6f6]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      What's Included:
                    </motion.h3>
                    <motion.ul
                      className="mb-6 space-y-2"
                      variants={listStagger}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                    >
                      {svc.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={listItem}
                          className="services-list-item"
                        >
                          <span className="services-list-dot" aria-hidden="true" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Scan-line divider between services (not after the last one) */}
            {i < SERVICES.length - 1 && <ScanDivider />}
          </div>
        ))}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 text-center bg-[#112240] about-section">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4"
              >
                Explore how we can support your project
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-[#8892b0] mb-8 leading-relaxed"
              >
                Not sure which service fits your need? Reach out and we'll point you in the right direction.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
