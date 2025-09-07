const AboutSection = () => {
  const skills = [
    'Machine Learning',
    'Artificial Intelligence', 
    'Python',
    'TensorFlow',
    'PyTorch',
    'Data Science',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Prompt Engineering',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary rounded-full mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-primary">
                  Education
                </h3>
                <p className="text-lg text-muted-foreground">
                  <span className="font-semibold text-foreground">B.Tech in Artificial Intelligence and Machine Learning</span><br />
                  2023 - 2027
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-primary">
                  Passion & Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am driven by a strong desire to innovate and solve real-world problems using intelligent technologies. 
                  With expertise in advanced AI tools, prompt engineering, and practical implementation of machine learning models, 
                  I specialize in bridging the gap between theoretical concepts and impactful applications.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-primary">
                  Goals
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to develop cutting-edge solutions that empower businesses and individuals to unlock the full potential 
                  of data-driven intelligence. Always eager to explore new trends, tools, and techniques in the rapidly evolving AI landscape.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-montserrat font-semibold mb-6 text-primary">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-badge animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-glow">
                <h3 className="text-2xl font-montserrat font-semibold mb-4">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Machine Learning Model Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>AI Tool Integration & Optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Data Analysis & Visualization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Prompt Engineering & Fine-tuning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
