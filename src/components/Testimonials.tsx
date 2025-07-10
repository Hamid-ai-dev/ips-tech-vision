
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      position: "CEO, Digital Solutions Inc.",
      content: "IPS Technologies transformed our business with their innovative e-commerce platform. Their commitment to both technical excellence and ethical practices sets them apart. The team's professionalism and Islamic values created a trust that's rare in this industry.",
      rating: 5,
      project: "E-commerce Platform Development"
    },
    {
      name: "Michael Roberts",
      position: "CTO, FinTech Innovations",
      content: "Working with Hafiz Numair and his team was exceptional. They delivered a complex blockchain solution on time and exceeded our expectations. Their combination of technical expertise and integrity made this partnership incredibly valuable.",
      rating: 5,
      project: "Blockchain Payment System"
    },
    {
      name: "Dr. Fatima Khan",
      position: "Director, Healthcare Systems",
      content: "The AI-powered patient management system IPS Technologies built for us has revolutionized our operations. Their attention to detail, ethical approach, and technical brilliance delivered exactly what we needed.",
      rating: 5,
      project: "AI Healthcare Management System"
    },
    {
      name: "James Wilson",
      position: "Founder, StartupBoost",
      content: "IPS Technologies didn't just build our mobile app; they became our technology partners. Their consultancy helped us make strategic decisions that saved us time and money. Truly professional and trustworthy.",
      rating: 5,
      project: "Mobile App & IT Consultancy"
    }
  ];

  const successMetrics = [
    { metric: "Client Retention Rate", value: "95%", description: "Long-term partnerships built on trust" },
    { metric: "Project Success Rate", value: "99%", description: "Delivered on time and within budget" },
    { metric: "Client Satisfaction", value: "4.9/5", description: "Consistently exceeding expectations" },
    { metric: "Revenue Growth", value: "300%", description: "Average client business growth post-implementation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories & <span className="text-blue-600">Client Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how our technology solutions have 
            transformed businesses and created lasting value across industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Project */}
              <div className="bg-blue-50 rounded-lg p-3 mb-6">
                <div className="text-sm text-blue-600 font-semibold">Project:</div>
                <div className="text-blue-800">{testimonial.project}</div>
              </div>
              
              {/* Client Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Measurable Impact</h3>
            <p className="text-xl text-gray-300">
              Our commitment to excellence translates into real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                <div className="text-xl font-semibold mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Featured Case Study</h3>
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              "IPS Technologies helped us build a comprehensive Islamic banking platform that 
              serves over 10,000 customers daily. Their deep understanding of both Sharia-compliant 
              finance and modern technology made them the perfect partner for our digital transformation."
            </div>
            <div className="bg-white rounded-2xl p-6 inline-block">
              <div className="font-bold text-gray-900">Al-Barakah Islamic Bank</div>
              <div className="text-gray-600">Digital Banking Platform</div>
              <div className="text-blue-600 font-semibold mt-2">300% increase in digital transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
