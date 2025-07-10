
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Cpu, 
  Shield, 
  Building, 
  Lightbulb, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications built with cutting-edge technologies",
      features: ["React/Next.js Web Apps", "React Native Mobile Apps", "Progressive Web Apps", "API Development"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that transform data into actionable insights",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & Automation"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Blockchain Applications",
      description: "Secure, transparent, and decentralized solutions for modern businesses",
      features: ["Smart Contracts", "DeFi Applications", "NFT Platforms", "Cryptocurrency Solutions"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Enterprise Software",
      description: "Scalable solutions tailored to your business needs and processes",
      features: ["ERP Systems", "CRM Solutions", "Inventory Management", "Business Intelligence"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Lightbulb,
      title: "IT Consultancy",
      description: "Strategic guidance to optimize your technology infrastructure",
      features: ["Digital Transformation", "Cloud Migration", "Security Audits", "Tech Strategy"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Database,
      title: "Automation Solutions",
      description: "Streamline operations with intelligent process automation",
      features: ["Workflow Automation", "RPA Implementation", "Integration Services", "Performance Optimization"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward 
            with innovation, reliability, and Islamic principles of excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Technology Stack</h3>
            <p className="text-xl text-gray-300">
              We work with cutting-edge technologies to deliver world-class solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[
              "React", "Node.js", "Python", "AWS", "Docker", "MongoDB",
              "TypeScript", "Next.js", "TensorFlow", "Blockchain", "Kubernetes", "PostgreSQL"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-lg font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
