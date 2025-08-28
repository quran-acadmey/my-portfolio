import { MessageCircle, BookOpen, Star } from "lucide-react";
import QuranPic from "../Pic.jpeg";

const Hero = () => {
  const handleBookTrial = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open(
            "https://wa.me/923236297079?text=Assalamu Alaikum, I would like to inquire about Quran lessons for my child.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative mt-[70px] flex items-center bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-amber-300 rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 whitespace-nowrap">
           <span className="bg-gradient-to-r from-amber-700 to-yellow-500 bg-clip-text text-transparent">
            Bint_e_Fateh Muhammad
           </span>
          </h1>

          <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-5">
            Certified Tajweed Teacher for Children
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
            Helping children build a strong connection with the Quran through{" "}
            <span className="font-semibold text-amber-700">recitation</span>,{" "}
            <span className="font-semibold text-amber-700">memorization</span>,
            and{" "}
            <span className="font-semibold text-amber-700">understanding</span>.
            A nurturing approach that inspires love, discipline, and joy.
          </p>

          {/* Trust */}
          <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-700 text-sm sm:text-base">
              Rated <span className="font-medium text-amber-600">4.9/5</span> by
              100+ families
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleBookTrial}
              className="bg-amber-600 hover:bg-amber-700 justify-center text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <BookOpen size={20} />
              Book Free Trial
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 justify-center text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Chat
            </button>
          </div>
        </div>

        {/* Right Side: Qur’an Visual */}
        <div className="flex justify-center lg:justify-end relative">
          {/* Glowing Halo */}
          <div className="absolute w-80 h-80 bg-amber-300/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Qur’an Image Container */}
          <div className="relative w-72 h-72 rounded-full shadow-2xl overflow-hidden 
                          border-4 border-transparent bg-gradient-to-r from-amber-500 to-yellow-400 p-[5px]">
            <img
              src={QuranPic}
              alt="Holy Qur'an"
              loading="lazy"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Decorative floating shapes */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
