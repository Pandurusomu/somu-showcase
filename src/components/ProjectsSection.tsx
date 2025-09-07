import { useState } from 'react';
import { Plus, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Customer Segmentation ML Model',
      description: 'Advanced machine learning model for customer segmentation using clustering algorithms and behavioral analysis. Achieved 92% accuracy in customer classification.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'K-Means'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '2',
      title: 'Medical Diagnosis AI System',
      description: 'Deep learning model for medical image analysis and diagnosis assistance. Uses CNN architecture to detect anomalies in medical scans with high precision.',
      techStack: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'CNN', 'Medical Imaging'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '3',
      title: 'Smart Recommendation Engine',
      description: 'Intelligent recommendation system using collaborative filtering and content-based approaches. Deployed as a scalable web application.',
      techStack: ['Python', 'Flask', 'MongoDB', 'React', 'Machine Learning', 'APIs'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '4',
      title: 'NLP Sentiment Analysis Tool',
      description: 'Real-time sentiment analysis application for social media monitoring and customer feedback analysis using advanced NLP techniques.',
      techStack: ['NLTK', 'spaCy', 'Python', 'Streamlit', 'Transformers', 'BERT'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '5',
      title: 'AI-Powered Chatbot',
      description: 'Intelligent conversational AI chatbot with context awareness and multi-domain knowledge integration.',
      techStack: ['OpenAI API', 'LangChain', 'Python', 'FastAPI', 'Vector DB', 'RAG'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '6',
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection system using YOLO architecture for autonomous systems and surveillance applications.',
      techStack: ['YOLO', 'PyTorch', 'OpenCV', 'Python', 'Computer Vision', 'Real-time'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProject = (newProject: Omit<Project, 'id'>) => {
    const project: Project = {
      ...newProject,
      id: Date.now().toString()
    };
    setProjects(prev => [project, ...prev]);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative AI and machine learning solutions that bridge theory with real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-primary group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Project Button */}
        <div className="text-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="group bg-gradient-secondary hover:bg-gradient-tertiary text-white shadow-glow hover:shadow-xl transition-all duration-300 float-animation"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add New Project
          </Button>
        </div>
      </div>

      {/* Add Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addProject}
      />
    </section>
  );
};

export default ProjectsSection;