import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ============================================================
//  TOGGLE: set to true to preview the full Team page locally.
//  Set back to false before committing so visitors see "Coming Soon".
// ============================================================
const SHOW_FULL_PAGE = true;

// ── Gender Avatar ─────────────────────────────────────────────
function PersonAvatar({ gender }) {
  return (
    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#0f1a33] to-[#1a2744] flex items-end justify-center overflow-hidden border border-[#22d3ee]/30 flex-shrink-0">
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {gender === 'female' ? (
          <>
            <ellipse cx="40" cy="24" rx="16" ry="17" fill="#22d3ee" opacity="0.25" />
            <path d="M24 30 Q22 14 40 12 Q58 14 56 30" fill="#22d3ee" opacity="0.35" />
            <circle cx="40" cy="27" r="13" fill="#94a3b8" />
            <path d="M14 82 Q18 58 32 54 Q36 64 40 65 Q44 64 48 54 Q62 58 66 82Z" fill="#94a3b8" />
          </>
        ) : (
          <>
            <circle cx="40" cy="27" r="13" fill="#94a3b8" />
            <path d="M12 82 L14 56 Q16 50 40 50 Q64 50 66 56 L68 82Z" fill="#94a3b8" />
          </>
        )}
      </svg>
    </div>
  );
}

// ── Social Links ──────────────────────────────────────────────
function SocialLinks({ github, linkedin }) {
  return (
    <div className="flex gap-3 items-center">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-gray-500 hover:text-[#22d3ee] transition-colors"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-gray-500 hover:text-[#22d3ee] transition-colors"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      )}
    </div>
  );
}

// ── Coming Soon ──────────────────────────────────────────────
function ComingSoon() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] flex flex-col items-center justify-center px-5 py-[120px]">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#22d3ee] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
            Oprix Labs
          </p>
          <h1 className="text-7xl sm:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Coming<br />Soon
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0a192f] mx-auto rounded mb-8" />
          <p className="text-lg text-gray-400 mb-10">
            {"We're putting the finishing touches on our Team page. Check back shortly."}
          </p>
          <Link
            to="/"
            className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

// ── Reusable Card ─────────────────────────────────────────────
function TeamCard({ member, expandedCard, toggleCard }) {
  const isExpanded = expandedCard === member.id;
  return (
    <div
      className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#22d3ee]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[360px] group hover:border-[#22d3ee]/60 hover:shadow-lg hover:shadow-[#22d3ee]/15 hover:-translate-y-2 ${
        isExpanded ? 'ring-2 ring-[#22d3ee]/40' : ''
      }`}
      onClick={() => toggleCard(member.id)}
    >
      <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#22d3ee]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600" />

      <div className="flex items-center gap-5 mb-6 relative z-10">
        <PersonAvatar gender={member.gender} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
          <p className="text-[#22d3ee] text-sm font-medium">{member.role}</p>
        </div>
      </div>

      <div
        className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-16'
        }`}
      >
        <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">{member.bio}</p>

        {member.responsibilities && (
          <div>
            <h4 className="text-[#22d3ee] text-xs font-semibold uppercase tracking-wider mb-3">
              Responsibilities
            </h4>
            <ul className={`space-y-2 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              {member.responsibilities.map((r, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-3 hover:translate-x-1 transition-transform">
                  <span className="text-[#22d3ee] font-bold text-lg leading-none mt-0.5">•</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {member.skills && (
          <div className="mb-4">
            <h4 className="text-[#22d3ee] text-xs font-semibold uppercase tracking-wider mb-3">Skills</h4>
            <div className={`flex flex-wrap gap-2 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              {member.skills.map((skill, idx) => (
                <span key={idx} className="bg-[#22d3ee]/10 text-[#22d3ee] px-3 py-1.5 rounded-full text-xs border border-[#22d3ee]/30 hover:bg-[#22d3ee]/20 hover:border-[#22d3ee]/60 hover:scale-105 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 pt-5 border-t border-[#22d3ee]/10 flex justify-between items-center relative z-10">
        <SocialLinks github={member.github} linkedin={member.linkedin} />
        <span className="text-gray-500 text-xs font-medium tracking-wide group-hover:text-[#22d3ee] transition-colors">
          {isExpanded ? '✓ Click to collapse' : '+ Click for details'}
        </span>
      </div>
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────
function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-10">
      {label && (
        <p className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.3em] mb-3">{label}</p>
      )}
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
      <div className="w-12 h-0.5 bg-gradient-to-r from-[#22d3ee] to-transparent mx-auto mt-4 rounded" />
    </div>
  );
}

// ── Full Team Page ────────────────────────────────────────────
function FullTeamPage() {

  const founders = [
    {
      id: 'f1',
      gender: 'male',
      name: 'Ciici Crentsil',
      role: 'Co-Founder & Chief Executive Officer',
      linkedin: '#',
      github: '#',
      responsibilities: [
        'Preserving the founding vision and purpose of Oprix Lab',
        'Providing high-level strategic guidance',
        'Safeguarding the long-term integrity of the brand',
        'Participating in major structural decisions',
        'Advising executive leadership when consulted',
      ],
      bio: 'Conceptualized and co-founded Oprix Lab. Serves as CEO and primary governance custodian, ensuring the founding vision is upheld across all operational phases.',
    },
    {
      id: 'f2',
      gender: 'male',
      name: 'Simon Prince Quarm',
      role: 'Co-Founder & Chief External Operations Officer',
      linkedin: '#',
      github: '#',
      responsibilities: [
        'Overseeing all external-facing operations and partnerships',
        'Defining external growth and acquisition strategy',
        'Representing Oprix Lab in external stakeholder engagements',
        'Aligning external operations with internal capabilities',
        'Consulting on external structural changes and decisions',
      ],
      bio: "Co-founded Oprix Lab and leads the external operations function, shaping how the organization engages with clients, partners, and the broader market.",
    },
    {
      id: 'f3',
      gender: 'female',
      name: 'Blessing Hackman',
      role: 'Co-Founder & Chief Internal Operations Officer',
      linkedin: '#',
      github: '#',
      responsibilities: [
        'Overseeing the overall health of internal operations',
        'Ensuring alignment between operational teams and vision',
        'Supporting governance and policy integrity',
        'Consulting on significant internal structural changes',
        'Protecting brand standards and service quality benchmarks',
      ],
      bio: "Co-founded Oprix Lab and directs all internal operations, ensuring the organization's systems, teams, and processes reflect the founding principles and growth objectives.",
    },
  ];

  const executives = [
    {
      id: 'e1',
      gender: 'male',
      name: 'Ciici Crentsil',
      role: 'President',
      linkedin: '#',
      github: '#',
      skills: ['Strategic Leadership', 'Project Management', 'Client Relations', 'Web Development', 'Business Operations'],
      responsibilities: [
        'Final authority on all operational decisions',
        'Oversight of client communication and project approval',
        'Approval of project assignments to members',
        'Financial oversight and payment management',
        'Quality control and final project review before delivery',
        'Protecting and managing the Oprix Lab brand reputation',
        'Strategic planning and operational development',
        'Final authority in internal dispute resolution',
      ],
      bio: 'Leads day-to-day operational execution of Oprix Lab, ensuring service quality, client trust, and strategic direction across all active functions.',
    },
    {
      id: 'e2',
      gender: 'male',
      name: 'Simon Prince Quarm',
      role: 'Vice President',
      linkedin: '#',
      github: '#',
      skills: ['Business Development', 'Client Acquisition', 'Partnership Management', 'Digital Marketing', 'Full-Stack Development'],
      responsibilities: [
        'Assisting the President in overseeing operations',
        'Coordinating internal teams when necessary',
        'Ensuring internal procedures and policies are followed',
        'Supporting monitoring of project progress and deadlines',
        'Managing internal escalation issues',
        'Acting on behalf of the President when delegated',
      ],
      bio: 'Supports operational execution by coordinating teams, reinforcing policy compliance, and acting for the President when delegated.',
    },
  ];

  const operations = [
    {
      id: 'o1',
      gender: 'female',
      name: 'Blessing Hackman',
      role: 'Head of Internal Affairs',
      linkedin: '#',
      github: '#',
      skills: ['Operations Management', 'Talent Coordination', 'Process Documentation', 'UI/UX Design', 'Digital Systems'],
      responsibilities: [
        'Leading the Operations & Talent Management Team',
        'Overseeing member onboarding and identity verification',
        'Designing and enforcing internal operational policies',
        'Reporting operational metrics to executive leadership',
        'Managing escalation of internal conflicts',
        'Documenting member skills, specialties, and availability',
        'Tracking member performance and reliability',
        'Recommending qualified members for project assignments',
      ],
      bio: 'Directs all internal affairs at Oprix Lab, ensuring that processes, people, and performance standards are consistently upheld across every operational activity.',
    },
    {
      id: 'o2',
      gender: 'male',
      name: 'Operations Specialist',
      role: 'Internal Operations',
      linkedin: '#',
      github: '#',
      skills: ['Project Coordination', 'Client Communication', 'Web Development', 'IT Support', 'Documentation'],
      responsibilities: [
        'Supporting member onboarding and profile documentation',
        'Monitoring active project timelines and deadlines',
        'Maintaining internal communication channels',
        'Coordinating task handoffs between teams',
        'Flagging operational bottlenecks and scheduling conflicts',
        'Enforcing internal policies at the team level',
      ],
      bio: 'Supports the day-to-day running of internal operations, ensuring assigned clients and projects are managed with consistency and accountability.',
    },
    {
      id: 'o3',
      gender: 'female',
      name: 'Operations Specialist',
      role: 'Internal Operations',
      linkedin: '#',
      github: '#',
      skills: ['Project Coordination', 'Mobile Development', 'Digital Systems', 'Client Communication', 'Quality Assurance'],
      responsibilities: [
        'Supporting member onboarding and profile documentation',
        'Monitoring active project timelines and deadlines',
        'Maintaining internal communication channels',
        'Coordinating task handoffs between teams',
        'Flagging operational bottlenecks and scheduling conflicts',
        'Enforcing internal policies at the team level',
      ],
      bio: 'Supports the day-to-day running of internal operations, ensuring assigned clients and projects are managed with consistency and accountability.',
    },
  ];

  const clientAcquisition = [
    {
      id: 'ca1',
      gender: 'male',
      name: 'Simon Prince Quarm',
      role: 'Head of External Affairs',
      linkedin: '#',
      github: '#',
      skills: ['Business Development', 'Client Acquisition', 'Partnership Management', 'Digital Marketing', 'Full-Stack Development'],
      responsibilities: [
        'Leading the Client Acquisition Team strategy',
        'Identifying high-value leads and business opportunities',
        'Overseeing proposal development and service pitches',
        'Building and nurturing strategic partnerships',
        'Reporting acquisition metrics to executive leadership',
      ],
      bio: 'Drives the outward growth of Oprix Lab by spearheading external affairs strategies and maintaining a steady pipeline of client opportunities.',
    },
    {
      id: 'ca2',
      gender: 'female',
      name: 'External Affairs Specialist',
      role: 'Client Acquisition',
      linkedin: '#',
      github: '#',
      skills: ['Lead Generation', 'Client Outreach', 'Web Development', 'Content Creation', 'CRM Tools'],
      responsibilities: [
        'Generating leads and identifying new prospects',
        'Conducting client outreach and follow-up communications',
        'Preparing service proposals and pitch materials',
        'Recording and documenting incoming service inquiries',
        'Maintaining assigned client relationships',
      ],
      bio: 'Handles external outreach, lead nurturing, and client engagement for assigned accounts, converting prospects into active Oprix Lab clients.',
    },
    {
      id: 'ca3',
      gender: 'male',
      name: 'External Affairs Specialist',
      role: 'Client Acquisition',
      linkedin: '#',
      github: '#',
      skills: ['Lead Generation', 'Client Outreach', 'IT Support', 'Proposal Writing', 'Social Media'],
      responsibilities: [
        'Generating leads and identifying new prospects',
        'Conducting client outreach and follow-up communications',
        'Preparing service proposals and pitch materials',
        'Recording and documenting incoming service inquiries',
        'Maintaining assigned client relationships',
      ],
      bio: 'Handles external outreach, lead nurturing, and client engagement for assigned accounts, converting prospects into active Oprix Lab clients.',
    },
  ];

  // Dynamic members list — add or remove entries as the team grows
  const members = [
    {
      id: 'm1',
      gender: 'male',
      name: 'Marcus Owusu',
      role: 'Full-Stack Developer',
      linkedin: '#',
      github: '#',
      skills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'TypeScript'],
      bio: 'Builds end-to-end web solutions, handling everything from front-end interfaces to back-end systems and database architecture.',
    },
    {
      id: 'm2',
      gender: 'female',
      name: 'Priya Sharma',
      role: 'UI/UX Designer',
      linkedin: '#',
      github: '#',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility'],
      bio: 'Crafts intuitive and visually compelling interfaces, translating project goals into polished user experiences grounded in research.',
    },
    {
      id: 'm3',
      gender: 'male',
      name: 'David Asante',
      role: 'Mobile Developer',
      linkedin: '#',
      github: '#',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      bio: 'Designs and develops cross-platform mobile applications that deliver seamless experiences on both iOS and Android.',
    },
    {
      id: 'm4',
      gender: 'female',
      name: 'Aisha Mensah',
      role: 'Data Analyst',
      linkedin: '#',
      github: '#',
      skills: ['Python', 'SQL', 'Power BI', 'Data Visualization', 'Statistical Analysis'],
      bio: 'Transforms raw data into actionable insights through dashboards, analytical models, and business intelligence reporting.',
    },
    {
      id: 'm5',
      gender: 'male',
      name: 'Carlos Rivera',
      role: 'Cybersecurity Specialist',
      linkedin: '#',
      github: '#',
      skills: ['Penetration Testing', 'OWASP', 'Network Security', 'Compliance', 'Incident Response'],
      bio: 'Identifies vulnerabilities and fortifies digital assets, providing clients with thorough security assessments and risk mitigation strategies.',
    },
    {
      id: 'm6',
      gender: 'female',
      name: 'Sofia Chen',
      role: 'Cloud Architect',
      linkedin: '#',
      github: '#',
      skills: ['AWS', 'Azure', 'GCP', 'Serverless', 'Cloud Cost Optimization'],
      bio: 'Designs scalable, cost-efficient cloud infrastructures tailored to client needs, with a focus on reliability and long-term maintainability.',
    },
    {
      id: 'm7',
      gender: 'male',
      name: 'James Nkrumah',
      role: 'DevOps Engineer',
      linkedin: '#',
      github: '#',
      skills: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux', 'Infrastructure as Code'],
      bio: 'Manages deployment pipelines and cloud infrastructure, ensuring solutions are delivered and maintained with precision and reliability.',
    },
    {
      id: 'm8',
      gender: 'female',
      name: 'Naomi Addo',
      role: 'IT Support Specialist',
      linkedin: '#',
      github: '#',
      skills: ['Help Desk', 'Networking', 'Windows & Linux', 'Hardware Setup', 'Troubleshooting'],
      bio: 'Provides hands-on technical support and systems administration, resolving IT challenges and keeping client infrastructure running smoothly.',
    },
    {
      id: 'm9',
      gender: 'male',
      name: 'Ahmed Hassan',
      role: 'Backend Developer',
      linkedin: '#',
      github: '#',
      skills: ['Python', 'Django', 'Node.js', 'MongoDB', 'GraphQL'],
      bio: 'Engineers robust server-side foundations, handling business logic, database design, and API development with a focus on performance.',
    },
    {
      id: 'm10',
      gender: 'female',
      name: 'Fatima Al-Rashid',
      role: 'Digital Systems Facilitator',
      linkedin: '#',
      github: '#',
      skills: ['Zapier', 'Make', 'Process Mapping', 'ERP Systems', 'Digital Strategy'],
      bio: 'Streamlines operations through workflow automation and digital system integration, helping clients modernize how their businesses function.',
    },
    {
      id: 'm11',
      gender: 'male',
      name: 'Kwame Boateng',
      role: 'Frontend Developer',
      linkedin: '#',
      github: '#',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Animation', 'Performance Optimization'],
      bio: 'Brings designs to life with pixel-perfect, performant front-end code, focusing on smooth interactions and exceptional user-facing quality.',
    },
    {
      id: 'm12',
      gender: 'female',
      name: 'Yara Osei',
      role: 'Business Analyst',
      linkedin: '#',
      github: '#',
      skills: ['Requirements Gathering', 'Stakeholder Management', 'Documentation', 'Agile', 'Wireframing'],
      bio: 'Bridges the gap between client needs and technical execution, translating business requirements into clear, actionable project scopes.',
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const toggleCard = (id) => setExpandedCard(expandedCard === id ? null : id);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] px-5 sm:px-20 py-[60px]">

        {/* ── Hero ── */}
        <section className="text-center mb-20 animate-fadeInDown pt-[60px]">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-[-0.025em]">Meet the Team</h1>
          <p className="text-xl text-[#22d3ee] mb-5 font-light tracking-widest">
            Collective Brilliance, Real-World Results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0a192f] mx-auto rounded shadow-lg shadow-[rgba(34,211,238,0.5)]" />
        </section>

        {/* ── Founders ── */}
        <section className="mb-24 max-w-7xl mx-auto px-5">
          <SectionHeader
            label="Oprix Lab"
            title="Founders"
            subtitle="The visionaries who built Oprix Lab from the ground up"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {founders.map((m) => (
              <TeamCard key={m.id} member={m} expandedCard={expandedCard} toggleCard={toggleCard} />
            ))}
          </div>
        </section>

        {/* ── Management ── */}
        <section className="mb-24 max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-[#22d3ee] text-xs font-semibold uppercase tracking-[0.3em] mb-3">Structure</p>
            <h2 className="text-4xl font-bold text-white mb-3">Management</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              The teams responsible for running, growing, and scaling Oprix Lab operations.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0a192f] mx-auto mt-5 rounded" />
          </div>

          {/* Executive Leadership */}
          <div className="mb-16">
            <SectionHeader title="Executive Leadership" subtitle="Strategic and operational authority" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto">
              {executives.map((m) => (
                <TeamCard key={m.id} member={m} expandedCard={expandedCard} toggleCard={toggleCard} />
              ))}
            </div>
          </div>

          {/* Operations & Internal Affairs */}
          <div className="mb-16">
            <SectionHeader
              title="Operations & Talent Management"
              subtitle="Internal coordination, member management, and performance oversight"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {operations.map((m) => (
                <TeamCard key={m.id} member={m} expandedCard={expandedCard} toggleCard={toggleCard} />
              ))}
            </div>
          </div>

          {/* Client Acquisition */}
          <div>
            <SectionHeader title="Client Acquisition Team" subtitle="External affairs and business development" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {clientAcquisition.map((m) => (
                <TeamCard key={m.id} member={m} expandedCard={expandedCard} toggleCard={toggleCard} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Members ── */}
        <section className="max-w-7xl mx-auto mb-24 px-5">
          <SectionHeader
            label="Our People"
            title="Members"
            subtitle="Technical professionals delivering real results across every project"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {members.map((m) => (
              <TeamCard key={m.id} member={m} expandedCard={expandedCard} toggleCard={toggleCard} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center py-16 px-10 bg-gradient-to-br from-[#22d3ee]/5 to-blue-500/5 border border-[#22d3ee]/20 rounded-xl max-w-2xl mx-auto animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8">
            {"Let's discuss how Oprix Labs can help bring your project to life."}
          </p>
          <Link
            to="/contact"
            className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </section>

      </div>
      <Footer />
    </>
  );
}

// ── Export ────────────────────────────────────────────────────
export default function Team() {
  return SHOW_FULL_PAGE ? <FullTeamPage /> : <ComingSoon />;
}
