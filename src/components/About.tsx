
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">IPS Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded by Hafiz Muhammad Numair, a visionary leader who bridges the worlds of 
            Islamic scholarship and cutting-edge technology to create solutions that serve both 
            humanity and business excellence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in ethical technology solutions, where Islamic principles 
              of justice, integrity, and excellence drive innovation that transforms businesses 
              and enriches communities worldwide.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver world-class technology solutions while upholding the highest standards 
              of ethical conduct, transparency, and client service, creating lasting value for 
              our clients and positive impact for society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Faith & Integrity</h4>
            <p className="text-gray-600">
              Guided by Islamic principles of honesty, trustworthiness, and ethical conduct in all our endeavors.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
            <p className="text-gray-600">
              Constantly pushing boundaries with cutting-edge technology while maintaining ethical standards.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Client-Centric</h4>
            <p className="text-gray-600">
              Your success is our priority. We build lasting partnerships through exceptional service and results.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
            <p className="text-gray-600">
              Commitment to delivering the highest quality solutions that exceed expectations and drive growth.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Leadership That Inspires</h3>
              <p className="text-xl leading-relaxed mb-6">
                "At IPS Technologies, we believe that true innovation comes from combining 
                deep technical expertise with unwavering ethical principles. Our commitment 
                to Islamic values doesn't limit our reach—it amplifies our impact."
              </p>
              <div className="text-lg font-semibold">
                - Hafiz Muhammad Numair, Founder & CEO
              </div>
              <div className="text-blue-200 mt-2">
                Islamic Scholar • Technology Visionary • Innovation Leader
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
