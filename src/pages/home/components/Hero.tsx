import { useEffect, useState } from 'react';

export default function Hero() {
  const [toothRotate, setToothRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setToothRotate((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20luxury%20dental%20clinic%20interior%20with%20comfortable%20patient%20chair%2C%20bright%20natural%20lighting%20through%20large%20windows%2C%20clean%20white%20walls%2C%20professional%20dental%20equipment%2C%20welcoming%20atmosphere%2C%20contemporary%20medical%20design%2C%20soft%20blue%20and%20white%20color%20scheme%2C%20high-end%20healthcare%20facility%2C%20spacious%20treatment%20room%20with%20minimalist%20aesthetic&width=1920&height=1080&seq=dental-hero-bg-001&orientation=landscape"
          alt="K Dental Centar Interior"
          className="w-full h-full object-cover object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/pozadina.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
      </div>

      <div className="absolute top-20 right-10 animate-bounce">
        <div className="w-16 h-16 flex items-center justify-center">
          <i 
            className="ri-tooth-line text-5xl text-white/30"
            style={{ transform: `rotate(${toothRotate}deg)` }}
          ></i>
        </div>
      </div>

      <div className="absolute bottom-32 left-10 animate-pulse">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="ri-heart-pulse-line text-4xl text-teal-300/40"></i>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <i className="ri-star-fill text-yellow-400 text-sm"></i>
            <span className="text-white text-sm font-medium">Vaš pouzdani stomatološki partner</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Zdrav osmijeh<br />počinje ovdje
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Profesionalna stomatološka njega u srcu Lukavca. Moderna oprema, iskusni stomatolozi i prijatno okruženje za vaš savršen osmijeh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="whitespace-nowrap bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all shadow-2xl hover:shadow-teal-500/50 hover:scale-105 cursor-pointer"
          >
            <i className="ri-calendar-check-line mr-2"></i>
            Zakaži pregled
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="whitespace-nowrap bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50 cursor-pointer"
          >
            <i className="ri-service-line mr-2"></i>
            Pogledaj usluge
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">8+</div>
            <div className="text-white/80 text-sm">Godina iskustva</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-white/80 text-sm">Zadovoljnih pacijenata</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.8★</div>
            <div className="text-white/80 text-sm">Prosječna ocjena</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white/60"></i>
      </div>
    </section>
  );
}
