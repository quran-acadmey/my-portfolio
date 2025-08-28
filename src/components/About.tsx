import { Award, Heart, Clock, Users, BookOpen, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award size={22} />,
      title: 'Certified Tajweed Teacher',
      description: 'Graduated from International Islamic University',
    },
    {
      icon: <Users size={22} />,
      title: '5+ Years Experience',
      description: 'Teaching Qur’an to children & young learners',
    },
    {
      icon: <Heart size={22} />,
      title: 'Patient & Caring',
      description: 'Specialized in child psychology & mentoring',
    },
    {
      icon: <Clock size={22} />,
      title: 'Flexible Schedule',
      description: 'Available on weekdays & weekends',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute max-w-full inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/arabesque.png')]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            About <span className="text-amber-600">Bint_e_Fateh Muhammad</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Inspiring young Muslims to build a lifelong love for the Qur’an
            through Tajweed, care, and patience.
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Portrait */}
          <div className="animate-slideInLeft">
            <div className="relative group">
              <div className="w-72 h-80 mx-auto bg-gradient-to-tr from-amber-100 to-amber-200 rounded-2xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden border-2 border-amber-200">
                {/* Profile Icon */}
                <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition">
                  <BookOpen size={28} className="text-amber-700" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Bint_e_Fateh Muhammad
                </h3>
                <p className="text-amber-700 font-medium text-xs">
                  Certified Tajweed Teacher
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Text & Achievements */}
          <div className="animate-slideInRight space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                My Journey with the Quran
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                Assalamu Alaikum! I am{' '}
                <span className="font-semibold text-amber-700">
                  Bint_e_Fateh Muhammad
                </span>
                , a certified Tajweed teacher with over 5 years of experience.
                My mission is to help young Muslims connect deeply with the
                Quran through accurate recitation and a nurturing learning
                environment.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                With specialized training in child psychology and a diploma in
                teaching methodology, I ensure every student learns at their own
                pace—building not just skills, but love for the Quran.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-5">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm hover:shadow-md transition rounded-lg p-4 border border-amber-100"
                >
                  <div className="text-amber-600 mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Star size={16} className="text-amber-600" /> Certifications &
                Qualifications
              </h4>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Award size={14} className="text-amber-600" />
                  International Islamic University - Tajweed Certification
                </li>
                <li className="flex items-center gap-2">
                  <Award size={14} className="text-amber-600" />
                  Child Development & Psychology Diploma
                </li>
                <li className="flex items-center gap-2">
                  <Award size={14} className="text-amber-600" />
                  Online Teaching Methodology Certificate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
