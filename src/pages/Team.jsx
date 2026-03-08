import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  const leadership = [
    {
      id: 1,
      name: 'Founder',
      role: 'Strategic Head & Brand Custodian',
      avatar: '🧭',
      responsibilities: [
        'Final approval on all project assignments',
        'Direct client communication & relationship management',
        'Overall quality control & brand standards',
        'Strategic direction and growth planning',
      ],
      bio: 'The strategic head of Oprix Lab responsible for brand integrity, operational oversight, and ensuring every project meets the highest standards of delivery.',
    },
    {
      id: 2,
      name: 'Operations Manager',
      role: 'Talent Management & Internal Coordination',
      avatar: '⚙️',
      responsibilities: [
        'Member verification & onboarding',
        'Project assignment recommendations',
        'Deadline monitoring & progress tracking',
        'Internal process coordination',
      ],
      bio: 'Oversees the internal operations of Oprix Lab — managing the technical pool, ensuring member accountability, and keeping projects on schedule.',
    },
    {
      id: 3,
      name: 'Client Acquisition Team',
      role: 'Business Development & Marketing',
      avatar: '📣',
      responsibilities: [
        'Lead generation & outreach',
        'Proposal preparation',
        'Marketing coordination',
        'Client onboarding support',
      ],
      bio: 'The team responsible for growing Oprix Lab\'s client base — identifying opportunities, preparing proposals, and coordinating marketing efforts.',
    },
  ];

  const members = [
    {
      id: 4,
      name: 'Member — Web Developer',
      role: 'Web Solutions',
      avatar: '🌐',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress'],
      services: [
        'Website design & development',
        'CMS websites & maintenance',
        'SEO setup & performance optimization',
        'Contact forms & email integration',
      ],
      bio: 'Delivers responsive, well-structured websites and web solutions for businesses and individuals.',
    },
    {
      id: 5,
      name: 'Member — Web App Developer',
      role: 'Web Applications',
      avatar: '💻',
      skills: ['React', 'Node.js', 'PHP', 'MySQL', 'Firebase'],
      services: [
        'Booking & reservation systems',
        'Dashboards & portals',
        'Login / authentication systems',
        'Form-based data collection tools',
      ],
      bio: 'Builds functional web applications that solve real operational problems for schools, organizations, and businesses.',
    },
    {
      id: 6,
      name: 'Member — Mobile Developer',
      role: 'Mobile Applications',
      avatar: '📱',
      skills: ['React Native', 'Flutter', 'Android', 'Firebase', 'Expo'],
      services: [
        'Cross-platform mobile apps',
        'Event & directory apps',
        'Internal-use mobile tools',
        'App maintenance & updates',
      ],
      bio: 'Creates lightweight, practical mobile applications for Android and iOS across a range of use cases.',
    },
    {
      id: 7,
      name: 'Member — IT Technician',
      role: 'IT Support & Technical Services',
      avatar: '🛠️',
      skills: ['Windows OS', 'Networking', 'Antivirus', 'Hardware', 'Cloud Setup'],
      services: [
        'Software installation & troubleshooting',
        'Virus & malware removal',
        'Network & Wi-Fi setup',
        'Data backup & system optimization',
      ],
      bio: 'Provides reliable hands-on IT support and technical assistance for individuals and businesses.',
    },
    {
      id: 8,
      name: 'Member — Digital Systems',
      role: 'Digital Systems & Automation',
      avatar: '⚡',
      skills: ['Google Sheets', 'Zapier', 'Airtable', 'Forms', 'Dashboards'],
      services: [
        'Workflow & spreadsheet automation',
        'Online forms & data collection',
        'Dashboard reporting tools',
        'Simple internal digital systems',
      ],
      bio: 'Designs and builds lightweight digital systems and automation tools that simplify day-to-day operations.',
    },
    {
      id: 9,
      name: 'Member — E-Services Facilitator',
      role: 'Digital & E-Services',
      avatar: '🪪',
      skills: ['E-Government Portals', 'Online Registrations', 'Document Processing', 'Digital Payments'],
      services: [
        'Academic result checking (BECE/WASSCE)',
        'School & university applications',
        'Passport, Ghana Card, NHIS registration',
        'Business registration & TIN',
      ],
      bio: 'Assists individuals with completing essential government and institutional online processes accurately and efficiently.',
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] px-5 sm:px-20 py-[60px]">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fadeInDown pt-[60px]">
          <h1 className="text-5xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.025em]">
            Meet the Team
          </h1>
          <p className="text-xl text-[#64ffda] mb-5 font-light tracking-widest">
            Collective Brilliance, Real-World Results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f] mx-auto rounded shadow-lg shadow-[rgba(100,255,218,0.5)]"></div>
        </section>

        {/* Leadership */}
        <section className="mb-16 max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {leadership.map((member) => (
              <div
                key={member.id}
                className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#64ffda]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[360px] group hover:border-[#64ffda]/60 hover:shadow-lg hover:shadow-[#64ffda]/15 hover:-translate-y-2 ${
                  expandedCard === member.id ? 'ring-2 ring-[#64ffda]/40' : ''
                }`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#64ffda]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600"></div>

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#64ffda] to-[#0a192f] rounded-lg flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-[#64ffda]/30">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#64ffda] text-base font-medium">{member.role}</p>
                  </div>
                </div>

                <div
                  className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
                    expandedCard === member.id ? 'max-h-[1000px]' : 'max-h-20'
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed mb-5 italic">{member.bio}</p>

                  <div>
                    <h4 className="text-[#64ffda] text-xs font-semibold uppercase tracking-wider mb-3">
                      Responsibilities
                    </h4>
                    <ul
                      className={`space-y-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-[#64ffda] font-bold text-lg">•</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#64ffda]/10 flex justify-end items-center relative z-10">
                  <span className="text-gray-500 text-xs font-medium tracking-wide group-hover:text-[#64ffda] transition-colors">
                    {expandedCard === member.id ? '✓ Click to collapse' : '+ Click for details'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Pool */}
        <section className="max-w-7xl mx-auto mb-20 px-5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Pool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {members.map((member) => (
              <div
                key={member.id}
                className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#64ffda]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[400px] group hover:border-[#64ffda]/60 hover:shadow-lg hover:shadow-[#64ffda]/15 hover:-translate-y-2 ${
                  expandedCard === member.id ? 'ring-2 ring-[#64ffda]/40' : ''
                }`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#64ffda]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600"></div>

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#64ffda] to-[#0a192f] rounded-lg flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-[#64ffda]/30">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#64ffda] text-base font-medium">{member.role}</p>
                  </div>
                </div>

                <div
                  className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
                    expandedCard === member.id ? 'max-h-[1000px]' : 'max-h-36'
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed mb-5 italic">{member.bio}</p>

                  <div className="mb-5">
                    <h4 className="text-[#64ffda] text-xs font-semibold uppercase tracking-wider mb-3">
                      Skills
                    </h4>
                    <div
                      className={`flex flex-wrap gap-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#64ffda]/10 text-[#64ffda] px-4 py-2 rounded-full text-sm border border-[#64ffda]/30 hover:bg-[#64ffda]/20 hover:border-[#64ffda]/60 hover:scale-105 transition-all cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#64ffda] text-xs font-semibold uppercase tracking-wider mb-3">
                      Services Offered
                    </h4>
                    <ul
                      className={`space-y-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-[#64ffda] font-bold text-lg">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#64ffda]/10 flex justify-between items-center relative z-10">
                  <button
                    className={`bg-gradient-to-r from-[#64ffda] to-[#0a192f] text-black px-5 py-2 rounded text-sm font-semibold transition-all shadow-md shadow-[#64ffda]/30 hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/50 ${
                      expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Get In Touch
                  </button>
                  <span className="text-gray-500 text-xs font-medium tracking-wide group-hover:text-[#64ffda] transition-colors">
                    {expandedCard === member.id ? '✓ Click to collapse' : '+ Click for details'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-10 bg-gradient-to-br from-[#64ffda]/5 to-blue-500/5 border border-[#64ffda]/20 rounded-xl max-w-2xl mx-auto animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how Oprix Lab can help bring your project to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#64ffda] to-[#0a192f] text-black px-10 py-4 rounded-lg font-semibold text-base transition-all shadow-md shadow-[#64ffda]/30 hover:-translate-y-1 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
