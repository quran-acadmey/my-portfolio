import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/923236297079?text=Assalamu Alaikum, I would like to inquire about Quran lessons for my child.",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-4"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to begin your child’s Quranic journey? Let’s connect and
            discuss how I can help nurture their learning with care and
            dedication.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-emerald-100 group-hover:bg-emerald-200 p-3 rounded-xl transition">
                <MessageCircle className="text-emerald-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                WhatsApp Chat
              </h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Get instant responses to your queries.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md hover:scale-105 active:scale-95 transition"
            >
              Start Chat
            </button>
          </div>

          {/* Email */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-xl transition">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Email</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              quranacademy0110@gmail.com 
            </p>

          </div>

          {/* Available Hours */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-100 group-hover:bg-amber-200 p-3 rounded-xl transition">
                <Clock className="text-amber-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Available Hours
              </h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mon - Fri: 2:00 PM – 8:00 PM (UTC)
              <br />
              Sat - Sun: 10:00 AM – 6:00 PM (UTC)
            </p>
          </div>

          {/* Online Classes */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 group-hover:bg-purple-200 p-3 rounded-xl transition">
                <MapPin className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Online Classes
              </h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teaching students worldwide via Zoom with flexible scheduling.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl shadow-sm p-5 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            🎁 Free Trial Lesson
          </h4>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
            Book a complimentary 30-minute session and experience my teaching
            style first-hand. No commitment, no payment required.
          </p>
          <button
            onClick={handleWhatsApp}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition"
          >
            Book Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
