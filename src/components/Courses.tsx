import { BookOpen, Volume2, Brain, Star, Check } from 'lucide-react'; // Added Check icon for features

const Courses = () => {
  const courses = [
    {
      icon: <BookOpen size={36} />, // Increased icon size
      title: 'Noorani Qaida',
      description: 'Foundation course for beginners to learn Arabic letters, pronunciation, and basic reading skills.',
      features: ['Arabic alphabet recognition', 'Correct pronunciation (Makharij)', 'Letter joining rules', 'Basic reading of Quranic verses'],
      ageRange: '4-8 years',
      duration: '3-4 months'
    },
    {
      icon: <Volume2 size={36} />, // Increased icon size
      title: 'Tajweed Essentials',
      description: 'Learn the fundamental rules of proper Quranic recitation with emphasis on articulation points and melodic flow.',
      features: ['All essential Tajweed rules', 'Accurate articulation (Makharij)', 'Intonation rules (Ahkam al-Tajweed)', 'Fluency and melodic recitation practice'],
      ageRange: '6-12 years',
      duration: '6-8 months'
    },
    {
      icon: <Brain size={36} />, // Increased icon size
      title: 'Memorization Support',
      description: 'Structured and encouraging program designed to help children memorize Quranic verses and chapters effectively and consistently.',
      features: ['Effective memory techniques', 'Personalized revision schedules', 'Detailed progress tracking', 'Guidance for parents to support hifz'],
      ageRange: '5-16 years',
      duration: 'Ongoing'
    },
    {
      icon: <Star size={36} />, // Increased icon size
      title: 'Fluency & Recitation Mastery',
      description: 'Advanced course focusing on achieving fluent and beautiful recitation of the Holy Quran with confidence and skill.',
      features: ['Advanced fluent reading', 'Beautiful recitation (Tilawah)', 'Building confidence in public recitation', 'Developing performance skills'],
      ageRange: '8-16 years',
      duration: '4-6 months'
    }
  ];

  return (
    <section id="courses" className="bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative background shapes for extra flair */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-short"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob-short animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-20 animate-fadeInUp"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our <span className="text-amber-700">Course Offerings</span>
          </h2>
          <div className="w-28 h-1.5 bg-amber-600 mx-auto mb-8 rounded-full"></div> {/* Thicker, rounded divider */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Quranic education programs designed specifically for children, with age-appropriate teaching methods and patient guidance to nurture their love for the Holy Quran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"> {/* Adjusted gap */}
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border-2 border-amber-100 p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-2 
                         transition-all duration-300 ease-in-out group animate-fadeInUp flex flex-col justify-between" // Added flex-col for button alignment
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              <div className="flex flex-col flex-grow"> {/* Flex-grow content wrapper */}
                <div className="inline-flex p-4 rounded-full bg-amber-100 text-amber-700 mb-6 mx-auto group-hover:bg-amber-600 
                                group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-md">
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">{course.title}</h3>
                <p className="text-base text-gray-600 mb-6 leading-snug">{course.description}</p>
                
                <div className="flex-grow"> {/* This div allows the features list to grow and push the age/duration down */}
                  <h4 className="font-bold text-gray-900 text-lg mb-3 border-b border-amber-100 pb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6"> {/* More space between features */}
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-base flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-1 flex-shrink-0" /> {/* Check icon for features */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-5 border-t-2 border-amber-50 mt-6"> {/* Thicker amber divider */}
                  <div className="flex justify-between items-center text-base">
                    <span className="text-gray-600">Age Range:</span>
                    <span className="font-bold text-amber-700">{course.ageRange}</span>
                  </div>
                  <div className="flex justify-between items-center text-base mt-2"> {/* Increased margin-top */}
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-amber-700">{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-20 p-12 bg-gradient-to-r from-amber-50 to-white rounded-3xl border-2 border-amber-200 shadow-xl animate-fadeInUp animation-delay-400"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Ready to <span className="text-amber-700">Start Your Child's Journey?</span></h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our dedicated teachers are ready to guide your child through a rewarding Quranic learning experience. Enroll today and watch them connect with the Holy Book.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 hover:scale-[1.03] active:scale-98 text-white px-10 py-4 rounded-xl font-bold text-lg 
              transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300 animate-pulse-btn"
          >
            Start Learning Today!
          </button>
        </div>
      </div>

      {/* Tailwind CSS keyframes for custom animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-400 { animation-delay: 0.4s; }

        @keyframes pulse-btn {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1);
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 15px 20px -5px rgba(234, 179, 8, 0.3), 0 6px 8px -3px rgba(234, 179, 8, 0.15);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1);
          }
        }
        .animate-pulse-btn {
          animation: pulse-btn 2s infinite ease-in-out;
        }

        @keyframes blob-short {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob-short {
          animation: blob-short 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Courses;
