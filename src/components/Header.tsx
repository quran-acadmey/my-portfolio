import { useState, useEffect } from 'react';
import { Menu, X, Diamond, Home, Info, Book, DollarSign, MessageCircle, Mail } from 'lucide-react';

// Debounce function to limit how often a function runs (for scroll event)
const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // State to track active section

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: Info },
    { label: 'Courses', id: 'courses', icon: Book },
    { label: 'Pricing', id: 'pricing', icon: DollarSign },
    { label: 'Testimonials', id: 'testimonials', icon: MessageCircle },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentActive = 'home';
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust offset to ensure the section is clearly in view, accounting for header height
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentActive = item.id;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 overflow-x-hidden inset-x-0 z-40 transition-all duration-300 ease-in-out border-b-2 h-13 sm:h-13 md:h-13 lg:h-13
          ${isScrolled
            ? 'bg-white shadow-lg border-amber-200 py-2 md:py-1'
            : 'bg-gradient-to-r from-amber-50/90 to-amber-100/90 backdrop-blur-md shadow-md border-amber-100 py-3 md:py-2'}
          rounded-b-2xl overflow-hidden flex items-center`} // Ensure header itself is a flex container to center its content vertically
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> {/* Ensure inner div takes full width */}
          <div className="flex items-center justify-between w-full"> {/* Inner flex for logo and nav */}
            {/* Branding/Logo */}
            <div
              className="flex items-center gap-1.5 font-black text-xl sm:text-2xl bg-gradient-to-r from-amber-900 to-yellow-700 bg-clip-text text-transparent cursor-pointer 
                         hover:scale-105 transition-transform duration-200 ease-in-out group drop-shadow-md pr-3" // Adjusted gap and right padding
              onClick={() => scrollToSection('home')}
            >
              <Diamond size={24} className="text-amber-700 group-hover:rotate-[360deg] transition-transform duration-700 ease-out" /> {/* Further reduced icon size for small screens */}
              Quran Academy
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6"> {/* Reduced spacing */}
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-1 text-gray-700 hover:text-amber-800 font-extrabold text-xs sm:text-sm 
                               transition-all duration-300 ease-in-out group px-2 py-1 rounded-lg 
                               transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                               ${activeSection === item.id
                                  ? 'text-amber-800 bg-amber-50 shadow-sm after:scale-x-100 after:bg-amber-700 after:h-0.5'
                                  : 'after:scale-x-0 after:h-0.5 hover:bg-amber-100/50'
                                } after:absolute after:inset-x-0 after:bottom-0 after:origin-left after:transition-transform after:duration-300 after:ease-out`}
                  >
                    <Icon size={14} className="text-amber-600 group-hover:text-amber-800 transition-colors duration-200" /> {/* Further reduced icon size */}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-amber-100 text-gray-700 hover:text-amber-800 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen
                ? <X size={20} className="rotate-90 transition-transform duration-300" />
                : <Menu size={20} className="rotate-0 transition-transform duration-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation (Full-Screen Overlay) */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 md:hidden transition-opacity duration-300 ${ // Increased z-index for overlay
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav
          className={`fixed top-0 left-0 w-full sm:w-56 h-full bg-gradient-to-b from-white to-amber-50 shadow-xl p-4 transform transition-transform duration-400 ease-in-out z-55 ${ // Increased z-index for mobile nav
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } rounded-r-xl`} // Reduced rounded edge
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-6"> {/* Reduced margin */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-full bg-amber-200 text-gray-800 hover:bg-amber-300 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col space-y-2"> {/* Reduced space-y */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2.5 text-lg text-gray-800 font-extrabold rounded-lg transition-colors duration-200 
                             focus:outline-none focus:ring-2 focus:ring-amber-500 transform hover:scale-[1.02] active:scale-95 shadow-sm
                             ${activeSection === item.id
                                ? 'bg-amber-200 text-amber-800 shadow-md'
                                : 'hover:bg-amber-100 hover:text-amber-700'}`}
                >
                  <Icon size={20} className="text-amber-700" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
