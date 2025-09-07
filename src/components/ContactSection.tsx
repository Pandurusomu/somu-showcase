import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pandurusomuofficial@gmail.com',
      label: 'pandurusomuofficial@gmail.com',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/panduru-somu',
      label: 'Connect on LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/panduru-somu',
      label: 'View GitHub Profile',
      gradient: 'from-gray-800 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative AI solutions? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-glow border-border/50 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat gradient-text">
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    className={`transition-all duration-200 ${errors.name ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive animate-fade-in">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={`transition-all duration-200 ${errors.email ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive animate-fade-in">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className={`transition-all duration-200 ${errors.message ? 'border-destructive animate-shake' : 'focus:border-primary'}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive animate-fade-in">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-secondary hover:bg-gradient-tertiary text-white shadow-lg hover:shadow-glow transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Card 
                    key={link.name}
                    className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-200"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-lg`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold text-lg text-primary">
                            {link.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {link.label}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-primary text-white shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-semibold mb-4">
                  Let's Build Something Amazing!
                </h3>
                <p className="leading-relaxed mb-4">
                  Whether you have a project in mind, want to collaborate, or just want to chat about AI and technology, 
                  I'm always excited to connect with fellow innovators and learners.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI Consulting', 'ML Development', 'Data Analysis', 'Technical Writing'].map((service) => (
                    <span 
                      key={service}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;