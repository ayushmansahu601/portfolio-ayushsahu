
import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link for now - you can replace this with your SMTP service
      const mailtoLink = `mailto:ayushmansahu0601@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300 flex items-center">
                    <User className="w-4 h-4 mr-2 text-tech-cyan" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-tech-cyan"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-tech-cyan" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-tech-cyan"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-tech-cyan" />
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-tech-cyan"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-tech-cyan resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-tech-cyan to-tech-purple text-white rounded-full font-medium hover:shadow-xl hover:shadow-tech-cyan/25 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
