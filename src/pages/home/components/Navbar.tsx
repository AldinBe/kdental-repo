interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/assets/logo.png" 
              alt="K Dental Centar Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              O nama
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Usluge
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Cjenovnik
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Galerija
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Kontakt
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="whitespace-nowrap bg-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl"
            >
              Zakaži pregled
            </button>
          </div>

          <button className="md:hidden text-gray-700">
            <i className={`ri-menu-line text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
