import { useState, useEffect } from 'react';
import profilePicture from '@/assets/profile-picture.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and transform based on scroll position
  const maxScroll = 800; // Maximum scroll distance for full fade
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  const imageOpacity = Math.max(1 - scrollProgress * 1.2, 0);
  const imageScale = Math.max(1 - scrollProgress * 0.3, 0.7);
  const textOpacity = Math.max(1 - scrollProgress * 0.8, 0);
  const backgroundOpacity = Math.max(1 - scrollProgress * 0.5, 0.3);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-hero transition-opacity duration-300 ease-out"
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* Profile Picture Background */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
        style={{ 
          opacity: imageOpacity,
          transform: `scale(${imageScale}) translateY(${scrollProgress * 100}px)`,
        }}
      >
        <div className="relative">
          <img 
            src={profilePicture} 
            alt="Panduru Somu" 
            className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover rounded-full shadow-glow"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-full"></div>
          {/* Animated glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-30 blur-2xl animate-pulse"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="transition-all duration-500 ease-out"
            style={{ 
              opacity: textOpacity,
              transform: `translateY(${scrollProgress * -50}px)`
            }}
          >
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-montserrat font-bold mb-6 gradient-text drop-shadow-lg">
              Panduru Somu
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl font-montserrat font-medium mb-6 text-primary-dark drop-shadow-md">
              Machine Learning & AI Enthusiast
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Tools & Prompting Expert passionate about bridging theoretical AI concepts with real-world applications
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-secondary hover:bg-gradient-tertiary text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300"
        style={{ opacity: Math.max(1 - scrollProgress * 3, 0) }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;