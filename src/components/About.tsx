
import { Shield, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Islamic Ethics",
      description: "Every project reflects our commitment to honesty, integrity, and ethical business practices rooted in Islamic principles."
    },
    {
      icon: Lightbulb,
      title: "Innovation Excellence",
      description: "We combine cutting-edge technology with creative problem-solving to deliver solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships through transparent communication, dedicated support, and mutual respect."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Our rigorous standards ensure every solution is reliable, scalable, and designed for long-term success."
    }
  ];

  const leadership = [
    {
      name: "Hafiz Muhammad Numair",
      title: "Founder & CEO",
      description: "Islamic scholar and technology visionary, combining deep religious knowledge with cutting-edge technical expertise to lead IPS Technologies toward innovative solutions.",
      expertise: ["Islamic Jurisprudence", "Software Architecture", "AI/ML Strategy", "Business Leadership"]
    },
    {
      name: "Hamid",
      title: "Co-Founder & General Manager",
      description: "Strategic operations leader driving organizational excellence and ensuring seamless delivery of world-class technology solutions to our global clientele.",
      expertise: ["Operations Management", "Strategic Planning", "Client Relations", "Team Leadership"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">IPS Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where Islamic values meet cutting-edge innovation. We are a technology company 
            that believes in building solutions with both technical excellence and moral integrity.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the leading technology partner that bridges the gap between innovation and 
              Islamic principles, creating solutions that benefit humanity while upholding the 
              highest ethical standards.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver exceptional technology solutions that empower businesses to thrive in 
              the digital age, while maintaining unwavering commitment to integrity, innovation, 
              and Islamic values in everything we do.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl w-fit mb-4">
                  <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div id="leadership">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Leadership
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                    {leader.title}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {leader.description}
                </p>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Expertise:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
