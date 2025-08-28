import { Heart, MessageCircle, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/923151769775?text=Assalamu Alaikum, I would like to inquire about Quran lessons for my child.",
      "_blank"
    );
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 text-center gap-12 lg:gap-16 mb-16">
          
          {/* Brand Section */}
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-extrabold text-amber-400 mb-4">
              Qur'an Academy
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              Guided by <span className="font-semibold text-amber-300">Bint_e_Fateh Muhammad</span>, 
              empowering young hearts to build a deep, loving connection with the Qur’an 
              through patience, care, and structured learning.
            </p>
            <div className="flex justify-center gap-2 text-amber-400 text-sm">
              <Heart size={18} />
              <span>Teaching with love since 2019</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animation-delay-100">
            <h4 className="text-lg font-semibold text-amber-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About the Teacher', id: 'about' },
                { label: 'Course Offerings', id: 'courses' },
                { label: 'Pricing Plans', id: 'pricing' },
                { label: 'Parent Testimonials', id: 'testimonials' },
                { label: 'Contact & Book Trial', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp animation-delay-200">
            <h4 className="text-lg font-semibold text-amber-400 mb-4">Get In Touch</h4>
              <div className="space-y-5 text-sm">
                <div className="flex justify-center gap-3">
                 <Mail size={18} className="text-amber-400" />
                 <span className="text-gray-300">quranacademy0110@gmail.com </span>
                </div>
                <div className="flex items-start justify-center gap-3">
                 <Clock size={18} className="text-amber-400 mt-0.5" />
                  <div className="text-gray-300">
                   <p>Mon-Fri: 2:00 PM - 8:00 PM (UTC)</p>
                   <p>Sat-Sun: 10:00 AM - 6:00 PM (UTC)</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 
                    text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 
                    flex gap-2 shadow-lg"
                  >
                   <MessageCircle size={18} />
                   Quick WhatsApp Chat
                  </button>
                </div>
              </div>
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Qur'an Academy by{" "}
                <span className="text-amber-400 font-semibold">Bint_e_Fateh Muhammad</span>. 
                All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dedicated to excellence in Islamic education for children worldwide.
              </p>
            </div>
            <div>
              <p className="text-amber-400 font-medium text-sm">
                🌟 Free Trial Available
              </p>
              <p className="text-gray-500 text-xs mt-1">No payment required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/islamic.png')] bg-repeat"></div>
      </div>
    </footer>
  );
};

export default Footer;
