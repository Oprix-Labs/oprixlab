import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Full-Stack Developer',
      avatar: '👨‍💻',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
      services: [
        'Web Application Development',
        'API Design & Development',
        'Database Architecture',
        'Cloud Infrastructure Setup'
      ],
      bio: 'Expert in building scalable web applications with modern tech stack.',
      experience: '7 years'
    },
    {
      id: 2,
      name: 'Zara Khan',
      role: 'UI/UX Designer',
      avatar: '👩‍🎨',
      skills: ['Figma', 'Web Design', 'User Research', 'Prototyping', 'Design Systems'],
      services: [
        'UI/UX Design',
        'Wireframing & Prototyping',
        'Design System Creation',
        'User Research & Testing'
      ],
      bio: 'Passionate about creating beautiful and intuitive user experiences.',
      experience: '5 years'
    },
    {
      id: 3,
      name: 'Jordan Chen',
      role: 'AI/ML Engineer',
      avatar: '🧠',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis', 'NLP'],
      services: [
        'Machine Learning Solutions',
        'AI Model Development',
        'Data Science Consulting',
        'Predictive Analytics'
      ],
      bio: 'Specialized in building intelligent systems and data-driven solutions.',
      experience: '6 years'
    },
    {
      id: 4,
      name: 'Sam Patterson',
      role: 'DevOps Engineer',
      avatar: '⚙️',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform'],
      services: [
        'Infrastructure Automation',
        'Deployment Pipeline Setup',
        'System Monitoring & Optimization',
        'Cloud Migration'
      ],
      bio: 'Ensures smooth deployment and reliable infrastructure.',
      experience: '8 years'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      role: 'Product Manager',
      avatar: '📊',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping'],
      services: [
        'Product Strategy & Vision',
        'Stakeholder Management',
        'Roadmap Planning',
        'Market Analysis'
      ],
      bio: 'Visionary leader focused on delivering market-winning products.',
      experience: '9 years'
    },
    {
      id: 6,
      name: 'Marcus Lewis',
      role: 'Mobile Developer',
      avatar: '📱',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Mobile UX'],
      services: [
        'iOS & Android Development',
        'Cross-Platform Mobile Apps',
        'Mobile App Optimization',
        'App Store Deployment'
      ],
      bio: 'Creates exceptional mobile experiences across all platforms.',
      experience: '6 years'
    }
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
        <section className="text-center mb-20 animate-fadeInDown">
          <h1 className="text-5xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.025em]">
            Meet Our Elite Team
          </h1>
          <p className="text-xl text-[#64ffda] mb-5 font-light tracking-widest">
            Collective Brilliance, Real-World Results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f] mx-auto rounded shadow-lg shadow-[rgba(100,255,218,0.5)]"></div>
        </section>

        {/* Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto mb-20 px-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#64ffda]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[400px] group hover:border-[#64ffda]/60 hover:shadow-lg hover:shadow-[#64ffda]/15 hover:-translate-y-2 ${
                expandedCard === member.id ? 'ring-2 ring-[#64ffda]/40' : ''
              }`}
              onClick={() => toggleCard(member.id)}
            >
              {/* Gradient overlay effect */}
              <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#64ffda]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600"></div>

              {/* Card Header */}
              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#64ffda] to-[#0a192f] rounded-lg flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-[#64ffda]/30">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#64ffda] text-base font-medium">{member.role}</p>
                  <span className="inline-block mt-2 text-xs text-gray-400 px-3 py-1 bg-[#64ffda]/10 rounded-full">
                    ⏱️ {member.experience}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div
                className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
                  expandedCard === member.id ? 'max-h-[1000px]' : 'max-h-36'
                }`}
              >
                <p className="text-gray-300 text-base leading-relaxed mb-5 italic">{member.bio}</p>

                {/* Skills Section */}
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

                {/* Services Section */}
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

              {/* Card Footer */}
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
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-10 bg-gradient-to-br from-[#64ffda]/5 to-blue-500/5 border border-[#64ffda]/20 rounded-xl max-w-2xl mx-auto animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how our team can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#64ffda] to-[#0a192f] text-black px-10 py-4 rounded-lg font-semibold text-base transition-all shadow-md shadow-[#64ffda]/30 hover:-translate-y-1 hover:shadow-lg hover-[#64ffda]/50 letter-spacing-1px"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
