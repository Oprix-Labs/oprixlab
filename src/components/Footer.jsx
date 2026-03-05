export default function Footer() {
  return (
    <footer className="bg-[#112240] py-16 text-center mt-auto">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-center gap-8 mb-4">
          <a
            href="#"
            className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-[#8892b0] text-2xl no-underline hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Twitter
          </a>
        </div>
        <p className="text-[#8892b0] font-['Fira Code',monospace] text-sm">
          &copy; 2026 Oprix Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
