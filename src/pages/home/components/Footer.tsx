export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="K Dental Centar" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Vaš pouzdani partner za zdravlje zuba i lijep osmijeh u Lukavcu. Profesionalnost, kvalitet i briga o pacijentima.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/KDentalCentarLukavac"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/kdentalcentar/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="tel:035412873"
                aria-label="Telefon"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-500 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer">
                  O nama
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer">
                  Usluge
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer">
                  Cjenovnik
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer">
                  Galerija
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Usluge</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Opšta / preventivna stomatologija</li>
              <li>Restaurativna stomatologija</li>
              <li>Endodoncija</li>
              <li>Ortodoncija</li>
              <li>Parodontologija</li>
              <li>Oralna hirurgija i Implantologija</li>
              <li>Protetika</li>
              <li>Dječija stomatologija</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-teal-400 text-xl flex-shrink-0 mt-1"></i>
                <p className="text-gray-300 text-sm">
                  Luciana 5, Ulaz F2<br />
                  Armije RBiH<br />
                  Lukavac 75300
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-400 text-xl"></i>
                <a href="tel:035412873" className="text-gray-300 hover:text-teal-400 transition-colors">
                  035 412-873
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-teal-400 text-xl flex-shrink-0 mt-1"></i>
                <div className="text-gray-300 text-sm">
                  <p>Pon-Pet: 09:00-13:00 / 15:00 - 18:00</p>
                  <p>Subota: 09:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} K Dental Centar. Sva prava zadržana.
            </p>
            <p className="text-center text-sm text-gray-400 md:text-right">
              Izrada i održavanje:
              <a
                href="https://www.linkedin.com/in/aldin-be%C4%87i%C4%87-3baa7916b/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-medium text-teal-300 transition-colors hover:text-teal-200"
              >
                Aldin Bećić
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
