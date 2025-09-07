import { useState, useEffect } from 'react';
import profilePicture from '@/assets/profile-picture.jpg';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        {/* Profile Picture with Split Animation */}
        <div className="relative mb-8 flex justify-center items-center">
          <div className="relative w-80 h-80 overflow-hidden">
            {/* Left Half */}
            <div 
              className={`absolute inset-0 w-1/2 overflow-hidden transition-transform duration-1000 ease-out ${
                isScrolled ? 'profile-split-left opacity-75' : 'profile-original'
              }`}
            >
              <img 
                src={profilePicture} 
                alt="Panduru Somu - Left Half" 
                className="w-full h-full object-cover object-center rounded-full shadow-glow"
                style={{ transform: 'translateX(0%)' }}
              />
            </div>
            
            {/* Right Half */}
            <div 
              className={`absolute inset-0 w-1/2 right-0 overflow-hidden transition-transform duration-1000 ease-out ${
                isScrolled ? 'profile-split-right opacity-75' : 'profile-original'
              }`}
            >
              <img 
                src={profilePicture} 
                alt="Panduru Somu - Right Half" 
                className="w-full h-full object-cover object-center rounded-full shadow-glow"
                style={{ transform: 'translateX(-100%)' }}
              />
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-20 blur-3xl animate-pulse"></div>
        </div>

        {/* Hero Text */}
        <div className={`transition-all duration-1000 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 gradient-text">
            Panduru Somu
          </h1>
          <h2 className="text-2xl md:text-3xl font-montserrat font-medium mb-4 text-primary-dark">
            Machine Learning & AI Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tools & Prompting Expert passionate about bridging theoretical AI concepts with real-world applications
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;