import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import webIcon from '../assets/images/web-icon.png';
import mobileIcon from '../assets/images/mobile-icon.png';
import cloudIcon from '../assets/images/cloud-icon.png';

/* ─── Smooth scroll for anchor links ──────────────────────────────────────── */
function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute('href');
      if (id === '#') return;
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handler));
    return () => anchors.forEach((a) => a.removeEventListener('click', handler));
  }, []);
}

/* ─── Scroll progress bar ──────────────────────────────────────────────────── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

/* ─── Scroll-reveal hook ───────────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Animated 3D perspective grid canvas ─────────────────────────────────── */
function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const cols = 14;
      const rows = 10;
      const fov = 600;
      const horizon = H * 0.48;
      const speed = 0.004;
      t += speed;

      ctx.strokeStyle = 'rgba(34,211,238,0.13)';
      ctx.lineWidth = 1;

      const project = (gx, gz) => {
        const x3 = (gx - cols / 2) * 80;
        const z3 = gz * 90 - ((t * 90) % 90);
        const scale = fov / (fov + z3 + 200);
        return {
          x: W / 2 + x3 * scale,
          y: horizon + 180 * scale,
          scale,
        };
      };

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const p = project(c, r);
          c === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        const p0 = project(c, 0);
        const p1 = project(c, rows - 1);
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.55,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ─── Floating particles ───────────────────────────────────────────────────── */
function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: `${Math.random() * 12}s`,
        duration: `${Math.random() * 14 + 10}s`,
        drift: `${(Math.random() - 0.5) * 120}px`,
      })),
    []
  );

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(34,211,238,0.55)',
            '--drift': p.drift,
            animation: `float-up ${p.duration} ${p.delay} ease-in infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Magnetic button wrapper ──────────────────────────────────────────────── */
function MagneticButton({ children, strength = 0.35 }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const dx = (e.clientX - (left + width / 2)) * strength;
    const dy = (e.clientY - (top + height / 2)) * strength;
    el.style.transform = `translate(${dx}px,${dy}px)`;
  }, [strength]);

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  }, []);

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}
    >
      {children}
    </span>
  );
}

/* ─── Service card with 3D tilt + specular highlight ──────────────────────── */
function ServiceCard({ icon, alt, title, description, target = 120 }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const increment = target / 60;
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };
    update();
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const mx = ((e.clientX - left) / width) * 100;
    const my = ((e.clientY - top) / height) * 100;
    card.style.setProperty('--mx', `${mx}%`);
    card.style.setProperty('--my', `${my}%`);
    const rx = ((e.clientY - top) / height - 0.5) * -12;
    const ry = ((e.clientX - left) / width - 0.5) * 12;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className="service-card group relative overflow-hidden bg-[#112240] rounded-[15px] p-8 shadow-md cursor-pointer"
      style={{ transition: 'transform 0.25s ease, box-shadow 0.3s ease' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-full mb-4 items-center gap-3">
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.4s ease, background 0.3s ease',
          }}
          className="group-hover:[transform:rotate(8deg)] group-hover:![background:rgba(34,211,238,0.15)]"
        >
          <img src={icon} alt={alt || title} style={{ width: 28, height: 28, objectFit: 'contain' }} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
          <span className="counter-num text-[#22d3ee] font-bold text-base">{count}</span>
          <span className="plus-sign text-[#22d3ee] font-bold text-base">+</span>
          <span className="text-[#8892b0] text-xs whitespace-nowrap">Projects</span>
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-[1.5rem] font-bold leading-tight text-[#ccd6f6] mb-3">{title}</h3>
        <p className="text-[#8892b0] leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

/* ─── Home page ────────────────────────────────────────────────────────────── */
export default function Home() {
  useSmoothScroll();
  useScrollReveal();
  const progress = useScrollProgress();

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 4,
          width: `${progress}%`,
          background: 'linear-gradient(90deg,#22d3ee,#3b82f6)',
          zIndex: 9999,
          transition: 'width 0.1s linear',
          pointerEvents: 'none',
        }}
      />

      <Header />
      <main
        style={{ fontFamily: "'DM Sans',system-ui,-apple-system,sans-serif" }}
        className="bg-[#020c1b] text-[#8892b0] antialiased leading-relaxed"
      >
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg,#020c1b 0%,#061428 55%,#011027 100%)' }}
        >
          <HeroCanvas />
          <Particles />

          {/* radial glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '20%',
              left: '55%',
              width: 520,
              height: 520,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(34,211,238,0.07) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-20">
            <div className="max-w-[780px]">
              {/* eyebrow */}
              <span
                className="block text-[#22d3ee] mb-5 text-sm font-semibold tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  animation: 'hero-fade-up 0.7s ease both',
                  animationDelay: '0.05s',
                }}
              >
                Hi, we are Oprix Labs.
              </span>

              {/* headline */}
              <h1
                className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.08] text-[#ccd6f6] mb-3 tracking-tight"
                style={{ animation: 'hero-fade-up 0.7s ease both', animationDelay: '0.18s' }}
              >
                Collective{' '}
                <span
                  className="glitch-text text-[#22d3ee]"
                  data-text="Brilliance,"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  Brilliance,
                </span>
              </h1>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-[#8892b0] mb-8 tracking-tight"
                style={{ animation: 'hero-fade-up 0.7s ease both', animationDelay: '0.3s' }}
              >
                Real World Results.
              </h2>

              <p
                className="text-lg leading-relaxed max-w-[580px] mb-10 text-[#8892b0]"
                style={{ animation: 'hero-fade-up 0.7s ease both', animationDelay: '0.42s' }}
              >
                Oprix Labs is a curated network of skilled technical professionals delivering
                trusted digital solutions under one brand.
              </p>

              {/* CTA row */}
              <div
                className="flex gap-4 flex-wrap"
                style={{ animation: 'hero-fade-up 0.7s ease both', animationDelay: '0.55s' }}
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="btn-pulse-glow inline-block px-7 py-3 bg-[#22d3ee] text-[#020c1b] font-bold rounded no-underline cursor-pointer"
                  >
                    Get Started
                  </Link>
                </MagneticButton>
                <Link
                  to="/services"
                  className="btn-shimmer inline-block px-7 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* bottom fade */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background: 'linear-gradient(to bottom,transparent,#020c1b)',
              pointerEvents: 'none',
            }}
          />
        </section>

        {/* ── Our Mission ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#011027] relative overflow-hidden">
          {/* soft glow blob */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 600,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse,rgba(34,211,238,0.04) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div className="relative z-10 max-w-[1200px] mx-auto px-8 text-center">
            <div className="scroll-reveal">
              <p
                className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                Who We Are
              </p>
              <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black leading-tight text-[#ccd6f6] mb-6">
                Our Mission
              </h2>
              {/* scan-line divider */}
              <div className="scan-line-el mx-auto mb-8 max-w-[200px]" />
              <p
                className="text-lg leading-relaxed max-w-[680px] mx-auto text-[#8892b0]"
                style={{
                  borderLeft: '3px solid rgba(34,211,238,0.35)',
                  paddingLeft: '1.5rem',
                  textAlign: 'left',
                }}
              >
                Delivering reliable, accessible, and trustworthy digital and technical solutions
                through a curated network of skilled professionals.
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Services ────────────────────────────────────────────────── */}
        <section id="services" className="py-20 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="scroll-reveal mb-14">
              <p
                className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                Capabilities
              </p>
              <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black leading-tight text-[#ccd6f6]">
                What We Do
              </h2>
            </div>

            {/* top 3 icon cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
              <ServiceCard
                icon={webIcon}
                title="Web Solutions"
                description="Website design, development, maintenance, security, and performance optimization for businesses and individuals."
                target={120}
              />
              <ServiceCard
                icon={mobileIcon}
                title="Mobile Applications"
                description="Simple to functional cross-platform mobile apps for Android and iOS, including internal tools and event apps."
                target={120}
              />
              <ServiceCard
                icon={cloudIcon}
                title="IT Support & Infrastructure"
                description="Software setup, troubleshooting, network configuration, cloud storage, and online system deployment."
                target={120}
              />
            </div>

            {/* bottom 2 text cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 scroll-reveal">
              {[
                {
                  emoji: '⚙️',
                  title: 'Digital Systems & Automation',
                  desc: 'Online forms, workflow automation, dashboards, and simple internal digital tools tailored to your operations.',
                },
                {
                  emoji: '🌐',
                  title: 'Online Facilitation',
                  desc: 'Digital access support, e-services assistance, document handling, and online service navigation for individuals and organizations.',
                },
              ].map(({ emoji, title, desc }) => (
                <div
                  key={title}
                  className="bg-[#112240] rounded-[15px] p-8 shadow-md hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300 cursor-pointer border border-transparent hover:border-[rgba(34,211,238,0.15)]"
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'rgba(34,211,238,0.07)',
                      border: '1px solid rgba(34,211,238,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      marginBottom: 16,
                    }}
                  >
                    {emoji}
                  </div>
                  <h3 className="text-[1.4rem] font-bold leading-tight text-[#ccd6f6] mb-3">{title}</h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 scroll-reveal">
              <Link
                to="/services"
                className="btn-shimmer inline-block px-7 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Choose Oprix Labs ─────────────────────────────────────────── */}
        <section className="py-20 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="scroll-reveal mb-14">
              <p
                className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                Our Edge
              </p>
              <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-black leading-tight text-[#ccd6f6]">
                Why Choose Oprix Labs?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
              {[
                {
                  label: 'Trust & Accountability',
                  body: 'Every member is curated and accountable under the Oprix Labs brand. Clients deal with a single trusted point of contact.',
                  accent: '#22d3ee',
                },
                {
                  label: 'Competence',
                  body: 'Our curated network brings verified technical skill to every project, ensuring quality outcomes across all service areas.',
                  accent: '#3b82f6',
                },
                {
                  label: 'Professionalism',
                  body: 'We operate with clear processes, structured delivery, and a commitment to real-world results for universities, businesses, and individuals.',
                  accent: '#8b5cf6',
                },
              ].map(({ label, body, accent }) => (
                <div key={label} className="glass-card rounded-[15px] p-8 cursor-pointer">
                  <div
                    style={{
                      width: 40,
                      height: 4,
                      borderRadius: 2,
                      background: accent,
                      marginBottom: 20,
                    }}
                  />
                  <h3 className="text-[1.4rem] font-bold leading-tight text-[#ccd6f6] mb-3">{label}</h3>
                  <p className="text-[#8892b0] leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="py-24 text-center bg-[#020c1b] relative overflow-hidden">
          {/* watermark */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              fontSize: 'clamp(5rem,18vw,14rem)',
              fontFamily: "'Syne',sans-serif",
              fontWeight: 900,
              color: '#ccd6f6',
              opacity: 0.025,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.04em',
              userSelect: 'none',
            }}
          >
            OPRIX
          </div>

          {/* radial glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle,rgba(34,211,238,0.06) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="relative z-10 max-w-[1200px] mx-auto px-8 scroll-reveal">
            <p
              className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}
            >
              Let's Build Together
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black leading-tight text-[#ccd6f6] mb-4">
              Ready to start your project?
            </h2>
            <p className="text-[#8892b0] mb-10 max-w-[580px] mx-auto leading-relaxed">
              Whether you need a website, mobile app, IT support, or digital assistance — we have
              the right professional for your needs.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="btn-animated-border inline-block px-8 py-4 border-2 border-[#22d3ee] text-[#22d3ee] font-bold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.08)] hover:-translate-y-1 transition-all duration-300 text-base"
              >
                Contact Us Today
              </Link>
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
