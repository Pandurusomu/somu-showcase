import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
  }) => void;
}

const ProjectModal = ({ isOpen, onClose, onSubmit }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Project title is required';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    if (!formData.techStack.trim()) newErrors.techStack = 'Tech stack is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process tech stack
    const techStackArray = formData.techStack
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech.length > 0);

    onSubmit({
      title: formData.title,
      description: formData.description,
      techStack: techStackArray,
      githubUrl: formData.githubUrl || undefined,
      liveUrl: formData.liveUrl || undefined
    });

    // Reset form
    setFormData({
      title: '',
      description: '',
      techStack: '',
      githubUrl: '',
      liveUrl: ''
    });
    setErrors({});
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-glow max-w-md w-full max-h-[90vh] overflow-y-auto border border-border animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-2xl font-montserrat font-semibold gradient-text">
            Add New Project
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-muted rounded-full p-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Project Title *
            </Label>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter project title"
              className={`transition-all duration-200 ${errors.title ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
            />
            {errors.title && (
              <p className="text-sm text-destructive animate-fade-in">{errors.title}</p>
            )}
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Project Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe your project"
              rows={4}
              className={`transition-all duration-200 ${errors.description ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
            />
            {errors.description && (
              <p className="text-sm text-destructive animate-fade-in">{errors.description}</p>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <Label htmlFor="techStack" className="text-sm font-medium">
              Tech Stack *
            </Label>
            <Input
              id="techStack"
              type="text"
              value={formData.techStack}
              onChange={(e) => handleInputChange('techStack', e.target.value)}
              placeholder="React, Node.js, MongoDB (comma separated)"
              className={`transition-all duration-200 ${errors.techStack ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
            />
            <p className="text-xs text-muted-foreground">
              Separate technologies with commas
            </p>
            {errors.techStack && (
              <p className="text-sm text-destructive animate-fade-in">{errors.techStack}</p>
            )}
          </div>

          {/* GitHub URL */}
          <div className="space-y-2">
            <Label htmlFor="githubUrl" className="text-sm font-medium">
              GitHub URL (Optional)
            </Label>
            <Input
              id="githubUrl"
              type="url"
              value={formData.githubUrl}
              onChange={(e) => handleInputChange('githubUrl', e.target.value)}
              placeholder="https://github.com/username/project"
              className="focus:border-primary transition-all duration-200"
            />
          </div>

          {/* Live URL */}
          <div className="space-y-2">
            <Label htmlFor="liveUrl" className="text-sm font-medium">
              Live Demo URL (Optional)
            </Label>
            <Input
              id="liveUrl"
              type="url"
              value={formData.liveUrl}
              onChange={(e) => handleInputChange('liveUrl', e.target.value)}
              placeholder="https://your-project-demo.com"
              className="focus:border-primary transition-all duration-200"
            />
          </div>

          {/* Form Actions */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 hover:bg-muted transition-colors duration-200"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-secondary hover:bg-gradient-tertiary text-white transition-all duration-200"
            >
              Add Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;