
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar,
  MessageCircle,
  Rocket
} from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-blue-600">Great Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology and Islamic values? 
            Let's discuss your project and create solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <p className="text-gray-600">Tell us about your vision and we'll make it reality</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                  <select 
                    name="project"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="consultancy">IT Consultancy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  required
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-14 text-lg font-semibold"
              >
                Send Project Details
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours • All consultations are free
              </p>
            </div>
          </div>

          {/* Contact Information & CTAs */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-100">info@ipstech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-blue-100">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-blue-100">Global Technology Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Schedule a Free Consultation</h4>
                    <p className="text-gray-600 text-sm">30-minute strategy session</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Live Chat Support</h4>
                    <p className="text-gray-600 text-sm">Get instant answers</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Chat Now
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Rocket className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Project Proposal</h4>
                    <p className="text-gray-600 text-sm">Detailed scope & timeline</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Request
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white text-center">
              <h4 className="font-bold text-xl mb-2">Trusted by 50+ Companies</h4>
              <p className="text-gray-300 mb-4">
                Join businesses worldwide who chose IPS Technologies for their digital transformation
              </p>
              <div className="text-sm text-gray-400">
                ⭐ 4.9/5 Client Satisfaction • 99% Project Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
