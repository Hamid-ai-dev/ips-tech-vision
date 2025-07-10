
import { 
  Shield, 
  Trophy, 
  Users, 
  Clock, 
  Globe, 
  Zap,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Islamic Work Ethics",
      description: "Our commitment to honesty, integrity, and excellence is rooted in Islamic principles, ensuring trustworthy partnerships.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Proven Expertise",
      description: "5+ years of delivering successful projects across diverse industries with cutting-edge technologies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your success is our success. We build long-term relationships through exceptional service and results.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and deadlines. Our agile methodology ensures on-time project completion.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class solutions that meet international standards while maintaining local cultural sensitivity.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "We stay ahead of technology trends to deliver solutions that give you a competitive edge.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const achievements = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">IPS Technologies?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with Islamic values to deliver solutions 
            that not only transform your business but also align with principles of trust, 
            integrity, and service to humanity.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`bg-gradient-to-r ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-xl text-blue-100">
              Numbers that speak to our commitment and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">Trusted by Leading Organizations</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            <div className="bg-gray-100 rounded-xl p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-gray-700">Enterprise Corp</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-gray-700">Tech Solutions</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-gray-700">Global Industries</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-gray-700">Innovation Labs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
