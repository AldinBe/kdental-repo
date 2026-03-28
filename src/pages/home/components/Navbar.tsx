import { useEffect, useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const barSolid = scrolled || mobileOpen;

  const linkClassMobile =
    'block w-full border-b border-gray-100 py-3 text-left text-base font-medium text-gray-800 transition-colors hover:text-teal-600 last:border-0';

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        barSolid ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex cursor-pointer items-center space-x-3" onClick={() => scrollToSection('hero')}>
            <img src="/assets/logo.png" alt="K Dental Centar Logo" className="h-12 w-auto object-contain" />
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              O nama
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Usluge
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('pricing')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Cjenovnik
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('gallery')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Galerija
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}
            >
              Kontakt
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="whitespace-nowrap rounded-full bg-teal-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-teal-600 hover:shadow-xl"
            >
              Zakaži pregled
            </button>
          </div>

          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 md:hidden ${
              barSolid ? 'hover:bg-black/5' : 'hover:bg-white/10'
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <i className={`ri-close-line text-2xl ${barSolid ? 'text-gray-700' : 'text-white'}`}></i>
            ) : (
              <i className={`ri-menu-line text-2xl ${barSolid ? 'text-gray-700' : 'text-white'}`}></i>
            )}
          </button>
        </div>

        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 top-20 z-40 bg-black/40 md:hidden"
              aria-hidden
              onClick={() => setMobileOpen(false)}
            />
            <div
              id="mobile-menu"
              className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-lg md:hidden"
            >
              <div className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto px-4 py-2 pb-6">
                <button type="button" onClick={() => scrollToSection('about')} className={linkClassMobile}>
                  O nama
                </button>
                <button type="button" onClick={() => scrollToSection('services')} className={linkClassMobile}>
                  Usluge
                </button>
                <button type="button" onClick={() => scrollToSection('pricing')} className={linkClassMobile}>
                  Cjenovnik
                </button>
                <button type="button" onClick={() => scrollToSection('gallery')} className={linkClassMobile}>
                  Galerija
                </button>
                <button type="button" onClick={() => scrollToSection('contact')} className={linkClassMobile}>
                  Kontakt
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full rounded-full bg-teal-500 py-3 text-center text-base font-semibold text-white hover:bg-teal-600"
                >
                  Zakaži pregled
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
