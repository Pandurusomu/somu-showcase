import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold">
              Panduru Somu
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Machine Learning & AI Enthusiast passionate about creating intelligent solutions 
              that make a difference in the world.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/30 mx-auto"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/70">
            <div className="flex items-center space-x-2">
              <span>© {currentYear} Panduru Somu. All rights reserved.</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Back to Top */}
          <div className="pt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-200">
                <svg 
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;