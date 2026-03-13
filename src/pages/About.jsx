import { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

const cardFlip = {
  hidden: { rotateY: 90, opacity: 0, transformPerspective: 1000 },
  visible: (i = 0) => ({
    rotateY: 0,
    opacity: 1,
    transformPerspective: 1000,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
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

/* ─── Three.js Hero Background ───────────────────────────────────────────── */
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
      camera.position.z = 4;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Inner icosahedron — electric blue
      const geo1 = new THREE.IcosahedronGeometry(1.4, 1);
      const mat1 = new THREE.MeshBasicMaterial({
        color: 0x0066ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const mesh1 = new THREE.Mesh(geo1, mat1);
      scene.add(mesh1);

      // Outer icosahedron — cyan
      const geo2 = new THREE.IcosahedronGeometry(2.2, 1);
      const mat2 = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const mesh2 = new THREE.Mesh(geo2, mat2);
      scene.add(mesh2);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const { x, y } = mouseRef.current;
        mesh1.rotation.x += 0.003 + y * 0.0008;
        mesh1.rotation.y += 0.004 + x * 0.0008;
        mesh2.rotation.x -= 0.0012;
        mesh2.rotation.y += 0.0022;
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

/* ─── 3D Tilt Card (perspective hover + directional glow shadow) ──────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (y - 0.5) * 14;
    const ry = (x - 0.5) * -14;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    el.style.boxShadow = `${ry * -1.2}px ${rx * 1.2}px 28px rgba(0,212,255,0.15)`;
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    el.style.boxShadow = '';
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.4s ease, box-shadow 0.4s ease', willChange: 'transform' }}
    >
      {children}
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

/* ─── Section heading: mask-wipe text reveal + accent line draw ───────────── */
function SectionHeading({ children, className, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div className="overflow-hidden">
        <motion.h2
          className={className}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.h2>
      </div>
      <motion.span
        className="about-accent-line"
        style={{
          display: 'block',
          transformOrigin: center ? 'center' : 'left',
          ...(center ? { margin: '8px auto 0' } : { marginTop: '8px' }),
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
      />
    </div>
  );
}

export default function About() {
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
              About Oprix Labs
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              A curated collective building real-world results through skilled professionals.
            </motion.p>
          </div>
        </section>

        {/* ── Who We Are / Our Mission ─────────────────────────────────────── */}
        <section className="py-16 bg-[#020c1b] about-section">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65 }}
              >
                <SectionHeading className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Who We Are
                </SectionHeading>
                <p className="text-[#8892b0] leading-relaxed">
                  Oprix Labs is a private tech collective. We curate skilled professionals to
                  deliver multi-service digital solutions spanning web development, mobile apps,
                  IT support, digital systems, and online facilitation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.15, duration: 0.65 }}
              >
                <SectionHeading className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                  Our Mission
                </SectionHeading>
                <p className="text-[#8892b0] leading-relaxed">
                  Delivering reliable, accessible, and trustworthy digital and technical solutions
                  through a curated network of skilled professionals. We aim to build reputation,
                  deliver real projects, and develop operational experience before formal company
                  registration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Core Values ──────────────────────────────────────────────────── */}
        <section className="py-16 bg-[#112240] about-section">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionHeading
              className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8"
              center
            >
              Our Core Values
            </SectionHeading>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {[
                {
                  title: 'Trust',
                  body: 'Our single most important value. Every client interaction, member assignment, and project delivery is guided by accountability and transparency.',
                },
                {
                  title: 'Accountability',
                  body: 'Every member operates under the Oprix Labs brand with clear responsibilities. We take ownership of our commitments from inquiry to delivery.',
                },
                {
                  title: 'Competence',
                  body: 'We curate only skilled, capable professionals. Technical quality is non-negotiable. We only accept members who can reliably deliver results.',
                },
                {
                  title: 'Professionalism',
                  body: 'We operate with structure, process documentation, and consistent standards, even as an unregistered collective. Professional conduct is expected at every level.',
                },
                {
                  title: 'Accessibility',
                  body: 'We make reliable digital solutions accessible to individuals, small businesses, churches, schools, and organizations at every level.',
                },
                {
                  title: 'Structured Growth',
                  body: "We don't rush. The trial-phase strategy ensures sustainable growth, building systems and reputation before scaling and formal registration.",
                },
              ].map((val, i) => (
                <motion.div key={val.title} variants={fadeUp} custom={i} style={{ height: '100%' }}>
                  <TiltCard className="group about-value-card bg-[#0d1f3c] rounded-[15px] p-8 shadow-md cursor-pointer h-full">
                    <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                      {val.title}
                    </h3>
                    <p className="text-[#8892b0] group-hover:text-white leading-relaxed transition-colors duration-300">
                      {val.body}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Our Story ────────────────────────────────────────────────────── */}
        <section className="py-16 bg-[#020c1b] about-section">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionHeading className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8">
              Our Story
            </SectionHeading>
            <motion.div
              className="max-w-[800px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#8892b0] mb-6 leading-relaxed">
                Oprix Labs was founded as a structured experiment during university, a deliberate plan to build a trustworthy digital brand before formal registration. Rather
                than waiting for the "perfect" moment, we chose to act: build systems, deliver real
                projects, and earn a reputation the right way.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {[
                {
                  phase: 'Year 1: Build',
                  body: 'Establish internal systems, onboard skilled members, deliver real client projects, and collect testimonials. Focus on execution and learning.',
                },
                {
                  phase: 'Year 2: Refine',
                  body: 'Improve structure, increase pricing, standardize documentation, and prepare for formal company registration. Scale sustainably with proven operational excellence.',
                },
                {
                  phase: 'Year 3: Evolve',
                  body: 'Expand into higher-value projects, deepen team specialization, and strengthen long-term client partnerships while continuously improving systems for sustainable growth.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.phase}
                  variants={cardFlip}
                  custom={i}
                  style={{ willChange: 'transform' }}
                >
                  <div className="bg-[#112240] rounded-[15px] p-6 border-l-4 border-[#22d3ee] h-full">
                    <h3 className="text-xl font-bold text-[#22d3ee] mb-3">{item.phase}</h3>
                    <p className="text-[#8892b0] leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Organizational Structure ──────────────────────────────────────── */}
        <section className="py-16 bg-[#112240] about-section">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionHeading
              className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-8"
              center
            >
              Organizational Structure
            </SectionHeading>
            <div className="max-w-[800px] mx-auto">
              <motion.div
                className="flex flex-col gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="bg-[#22d3ee] text-[#020c1b] rounded-[15px] p-6 text-center shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-1">Founders</h3>
                  <p className="text-sm">Foundational architects and long-term vision custodians; non-operational during the trial phase.</p>
                </motion.div>
                <motion.div variants={fadeUp} custom={0.5} className="flex justify-center">
                  <div className="w-0.5 h-8 bg-[#22d3ee]"></div>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  custom={1}
                  className="bg-[#0d1f3c] rounded-[15px] p-6 border border-[#22d3ee]/30"
                >
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-1 text-center">Executive Leadership Team</h3>
                  <p className="text-sm text-[#8892b0] text-center mb-4">Manages day-to-day operations and executes strategy across Oprix Lab.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#112240] rounded-[12px] p-4 text-center border border-[#22d3ee]/20">
                      <h4 className="text-base font-bold text-[#ccd6f6] mb-1">President</h4>
                      <p className="text-sm text-[#8892b0]">Operational head with final authority over project approval, quality control, and strategic direction.</p>
                    </div>
                    <div className="bg-[#112240] rounded-[12px] p-4 text-center border border-[#22d3ee]/20">
                      <h4 className="text-base font-bold text-[#ccd6f6] mb-1">Vice President</h4>
                      <p className="text-sm text-[#8892b0]">Deputy operational leader supporting coordination, compliance, and internal escalation management.</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} custom={1.5} className="flex justify-center">
                  <div className="w-0.5 h-8 bg-[#22d3ee]"></div>
                </motion.div>
                <motion.div
                  variants={stagger}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <motion.div
                    variants={fadeUp}
                    custom={2}
                    className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#22d3ee]/30"
                  >
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Operations &amp; Talent Management Team (Internal)</h3>
                    <p className="text-sm text-[#8892b0]">Handles onboarding, verification, performance tracking, and internal coordination.</p>
                  </motion.div>
                  <motion.div
                    variants={fadeUp}
                    custom={2.3}
                    className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#22d3ee]/30"
                  >
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Client Acquisition Team (External)</h3>
                    <p className="text-sm text-[#8892b0]">Leads prospecting, outreach, proposals, marketing coordination, and client relationship management.</p>
                  </motion.div>
                </motion.div>
                <motion.div variants={fadeUp} custom={2.6} className="flex justify-center">
                  <div className="w-0.5 h-8 bg-[#22d3ee]"></div>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="bg-[#0d1f3c] rounded-[15px] p-6 text-center border border-[#22d3ee]/30"
                >
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-1">Members</h3>
                  <p className="text-sm text-[#8892b0]">Technical professionals who execute assigned projects, meet milestones, and uphold service standards.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-16 text-center bg-[#020c1b] about-section">
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
                Be part of the journey
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-[#8892b0] mb-8 leading-relaxed"
              >
                Interested in working with us or joining our curated network of professionals?
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
                  >
                    Get in Touch
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
