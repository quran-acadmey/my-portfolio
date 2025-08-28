import { Check, Star, Users, Zap } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Starter',
      icon: <Users size={28} />, // Increased icon size
      price: '$40',
      period: 'per month',
      description: 'Perfect for beginners starting their Quranic journey',
      features: [
        '2 lessons per week (30 minutes each)',
        'Noorani Qaida curriculum',
        'Basic Tajweed introduction',
        'Progress reports',
        'WhatsApp support',
        'Homework assignments'
      ],
      popular: false,
      buttonText: 'Start Learning'
    },
    {
      name: 'Regular',
      icon: <Star size={28} />, // Increased icon size
      price: '$70',
      period: 'per month',
      description: 'Comprehensive program for steady progress',
      features: [
        '3 lessons per week (45 minutes each)',
        'All Tajweed rules covered',
        'Memorization support',
        'Fluency training',
        'Weekly progress calls with parents',
        'Interactive learning materials',
        'Flexible scheduling',
        'Makeup classes included'
      ],
      popular: true,
      buttonText: 'Most Popular Choice'
    },
    {
      name: 'Hifz Support',
      icon: <Zap size={28} />, // Increased icon size
      price: '$120',
      period: 'per month',
      description: 'Intensive program for Quran memorization',
      features: [
        '5 lessons per week (60 minutes each)',
        'Dedicated memorization plan',
        'Advanced Tajweed mastery',
        'Revision techniques',
        'Daily progress tracking',
        'Parent coaching sessions',
        '24/7 WhatsApp support',
        'Competition preparation',
        'Certificate upon completion'
      ],
      popular: false,
      buttonText: 'Intensive Program'
    }
  ];

  const handleBookTrial = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-5 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden">
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
            Choose the <span className="text-amber-700">Perfect Plan</span> for Your Child
          </h2>
          <div className="w-28 h-1.5 bg-amber-600 mx-auto mb-8 rounded-full"></div> {/* Thicker, rounded divider */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover flexible learning options tailored to fit your family's needs and support your child's journey in connecting with the Quran.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl shadow-xl border-4 p-8 lg:p-10 transition-all duration-500 ease-in-out flex flex-col justify-between 
                ${pkg.popular
                  ? 'border-amber-500 bg-gradient-to-br from-amber-100 to-white transform scale-105 shadow-2xl z-20' // More prominent popular card
                  : 'border-gray-200 bg-white hover:border-amber-200 hover:shadow-lg' // Subtle hover border for non-popular
                } hover:-translate-y-2 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md tracking-wide animate-pulse-badge">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Content wrapper with flex-grow to push button to bottom */}
              <div className="flex flex-col flex-grow text-center mb-10"> 
                <div className={`inline-flex p-4 rounded-full mb-6 transition-all duration-300 mx-auto ${ // mx-auto to center
                  pkg.popular ? 'bg-amber-600 text-white shadow-lg' : 'bg-amber-100 text-amber-600'
                }`}>
                  {pkg.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                <p className="text-gray-600 text-base mb-5">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-amber-700">{pkg.price}</span> {/* Price stands out more */}
                  <span className="text-gray-500 ml-2 text-lg">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-auto text-left"> {/* mb-auto pushes ul content up, allowing flex-grow on container */}
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={22} className="text-green-500 mt-1 flex-shrink-0" /> {/* Larger check icon */}
                      <span className="text-gray-700 text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button is outside the flex-grow content, so it stays at the bottom */}
              <button
                onClick={handleBookTrial}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out 
                  focus:outline-none focus:ring-4 transform hover:scale-[1.02] active:scale-98 shadow-md 
                  ${pkg.popular
                    ? 'bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-300 shadow-amber-300/50'
                    : 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-300'
                  }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-24 p-12 bg-gradient-to-r from-amber-50 to-white rounded-3xl border-2 border-amber-200 shadow-xl animate-fadeInUp animation-delay-400"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Start Your Journey with a <span className="text-amber-700">Free Trial!</span></h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unsure which package suits your child best? Experience our teaching firsthand with a **complimentary 30-minute trial lesson**. It’s the perfect way to see how your child connects with our engaging approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleBookTrial}
              className="bg-amber-600 hover:bg-amber-700 hover:scale-[1.03] active:scale-98 text-white px-10 py-4 rounded-xl font-bold text-lg 
                transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300 animate-pulse-btn"
            >
              Book Free Trial Now
            </button>
            <p className="text-base text-gray-600 font-medium">No payment required • No commitments</p>
          </div>
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

        @keyframes pulse-badge {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-badge {
          animation: pulse-badge 2s infinite ease-in-out;
        }

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

export default Pricing;
