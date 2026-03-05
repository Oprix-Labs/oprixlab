import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const posts = [
    {
      id: 1,
      emoji: '💡',
      category: 'Web Development',
      title: 'Building Scalable Web Apps in 2026',
      date: 'Feb 5, 2026',
      author: 'Oprix Team',
      excerpt:
        'As web applications grow in complexity, scalability becomes paramount. In this article, we explore architectural patterns and technologies that ensure your app can handle millions of users without breaking a sweat.',
    },
    {
      id: 2,
      emoji: '⚛️',
      category: 'React',
      title: 'React Server Components Explained',
      date: 'Jan 28, 2026',
      author: 'Oprix Team',
      excerpt:
        'React Server Components are changing the way we think about data fetching and rendering. We break down what they are, why they matter, and how to use them effectively in your Next.js apps.',
    },
    {
      id: 3,
      emoji: '🔐',
      category: 'Security',
      title: 'API Security Best Practices',
      date: 'Jan 15, 2026',
      author: 'Oprix Team',
      excerpt:
        'Securing your API is non-negotiable. From authentication and rate limiting to input validation and encryption, we cover the essential security measures every API should implement.',
    },
    {
      id: 4,
      emoji: '☁️',
      category: 'Cloud',
      title: 'AWS vs Azure vs GCP: Which to Choose?',
      date: 'Jan 8, 2026',
      author: 'Oprix Team',
      excerpt:
        'Choosing a cloud provider is a critical decision. We compare AWS, Azure, and Google Cloud across pricing, services, developer experience, and performance to help you make an informed choice.',
    },
    {
      id: 5,
      emoji: '🚀',
      category: 'Performance',
      title: 'Optimizing Web Performance: A Checklist',
      date: 'Dec 20, 2025',
      author: 'Oprix Team',
      excerpt:
        'Fast websites convert better. We provide a comprehensive checklist covering image optimization, code splitting, caching strategies, and more to help you achieve sub-second load times.',
    },
    {
      id: 6,
      emoji: '🤖',
      category: 'AI/ML',
      title: 'Integrating AI Into Your Application',
      date: 'Dec 12, 2025',
      author: 'Oprix Team',
      excerpt:
        'AI is no longer just for tech giants. Learn how to integrate powerful AI features like natural language processing, image recognition, and recommendation systems into your apps using modern APIs.',
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
              Insights & Ideas
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              Sharing knowledge on tech, development, and digital transformation.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#112240] rounded overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg"
                >
                  <div className="w-full h-[200px] bg-gradient-to-br from-[#0a192f] to-[#112240] flex items-center justify-center text-5xl">
                    {post.emoji}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-[rgba(100,255,218,0.1)] text-[#64ffda] rounded text-xs mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-2">
                      {post.title}
                    </h3>
                    <p className="font-['Fira Code',monospace] text-xs text-[#8892b0] mb-4">
                      By {post.author} • {post.date}
                    </p>
                    <p className="text-[#8892b0] mb-4 leading-relaxed">{post.excerpt}</p>
                    <a href="#" className="text-[#64ffda] font-semibold inline-block mt-4">
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Want to discuss a technical challenge?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Our team is here to help you navigate complex technical decisions.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
