import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      emoji: '📊',
      title: 'FinTech Analytics Dashboard',
      description:
        'Built a real-time financial analytics platform that processes 2M+ transactions daily with sub-second latency. Features include customizable dashboards, predictive analytics, and compliance reporting.',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js', 'AWS'],
    },
    {
      id: 2,
      emoji: '🛒',
      title: 'E-Commerce Platform',
      description:
        'A headless e-commerce solution with advanced inventory management, multi-currency support, and integrated CRM. Handles 100K+ products with lightning-fast search.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    },
    {
      id: 3,
      emoji: '🤖',
      title: 'AI Content Generator',
      description:
        'Marketing automation tool powered by GPT models. Generates blog posts, social media content, and product descriptions. Reduced content creation time by 80%.',
      tags: ['Python', 'OpenAI API', 'Vue.js', 'FastAPI'],
    },
    {
      id: 4,
      emoji: '🏥',
      title: 'Healthcare Management System',
      description:
        'HIPAA-compliant patient management platform with scheduling, billing, and electronic health records. Serving 50+ clinics across North America.',
      tags: ['React', 'Express', 'MySQL', 'Docker'],
    },
    {
      id: 5,
      emoji: '📱',
      title: 'Fitness Tracking App',
      description:
        'Cross-platform mobile app with workout tracking, nutrition logging, and social features. Integrated with wearables and has 50K+ active users.',
      tags: ['React Native', 'Firebase', 'GraphQL'],
    },
    {
      id: 6,
      emoji: '🎓',
      title: 'Learning Management System',
      description:
        'Comprehensive LMS with video courses, assignments, quizzes, and live sessions. Supports 10K concurrent users with zero downtime.',
      tags: ['Next.js', 'WebRTC', 'PostgreSQL', 'AWS'],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Our Work
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              Real projects. Real results. Real impact.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#112240] rounded overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="w-full h-[200px] bg-gradient-to-br from-[#0a192f] to-[#112240] flex items-center justify-center text-5xl">
                    {project.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[#8892b0] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-['Fira Code',monospace] text-xs px-2 py-1 bg-[rgba(34,211,238,0.1)] text-[#22d3ee] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Want to be our next success story?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Let's discuss how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
