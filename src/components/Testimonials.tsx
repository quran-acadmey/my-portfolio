import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "London, UK",
      rating: 5,
      text: "Bint_e_Fateh Muhammad has been absolutely wonderful with my 7-year-old daughter. Her patience and gentle approach helped my daughter fall in love with Quran recitation. The progress in just 3 months has been remarkable!",
      highlight: "Daughter fell in love with Quran recitation",
    },
    {
      name: "Fatima Al-Rashid",
      location: "Dubai, UAE",
      rating: 5,
      text: "What impressed me most is how Bint_e_Fateh Muhammad makes each lesson engaging and fun. My twin boys, who usually have short attention spans, now look forward to their Quran lessons every week. Highly recommended!",
      highlight: "Boys now look forward to lessons",
    },
    {
      name: "Amina Khan",
      location: "Toronto, Canada",
      rating: 5,
      text: "The structured approach and clear progress tracking gave me confidence in my son's learning journey. Bint_e_Fateh Muhammad’s regular updates and parent consultations show her dedication to each child's success.",
      highlight: "Clear progress tracking and dedication",
    },
    {
      name: "Maryam Hassan",
      location: "Sydney, Australia",
      rating: 5,
      text: "My daughter was struggling with Arabic pronunciation before joining Bint_e_Fateh Muhammad’s classes. Now she recites with confidence and correct Tajweed. The transformation has been incredible to witness!",
      highlight: "Incredible transformation in pronunciation",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-10 bg-gradient-to-br from-amber-50 via-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from parents who have seen their children flourish with{" "}
            <span className="font-semibold text-amber-700">
              Bint_e_Fateh Muhammad’s
            </span>{" "}
            Quran teaching.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                         relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote size={32} />
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-sm font-medium italic">
                    {testimonial.highlight}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary Card */}
        <div className="text-center mt-12 animate-fadeInUp animation-delay-400">
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-amber-400 fill-current"
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              4.9/5 Average Rating
            </h3>
            <p className="text-gray-600 mb-6">
              Trusted by 100+ families across the globe
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-amber-600 hover:bg-amber-700 hover:scale-105 active:scale-95 
                         text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 
                         shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Join Our Happy Families
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
