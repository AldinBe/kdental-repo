export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20luxury%20dental%20clinic%20interior%20with%20comfortable%20patient%20chair%2C%20bright%20natural%20lighting%20through%20large%20windows%2C%20clean%20white%20walls%2C%20professional%20dental%20equipment%2C%20welcoming%20atmosphere%2C%20contemporary%20medical%20design%2C%20soft%20blue%20and%20white%20color%20scheme%2C%20high-end%20healthcare%20facility%2C%20spacious%20treatment%20room%20with%20minimalist%20aesthetic&width=1920&height=1080&seq=dental-hero-bg-001&orientation=landscape"
          alt="K Dental Centar — enterijer ordinacije"
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
          className="h-full w-full object-cover object-center"
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

      <div className="absolute right-10 top-20 animate-bounce motion-reduce:animate-none">
        <div className="flex h-16 w-16 items-center justify-center">
          <i className="ri-tooth-line animate-spin-slow text-5xl text-white/30 motion-reduce:animate-none"></i>
        </div>
      </div>

      <div className="absolute bottom-32 left-10 animate-pulse motion-reduce:animate-none">
        <div className="flex h-12 w-12 items-center justify-center">
          <i className="ri-heart-pulse-line text-4xl text-teal-300/40"></i>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <i className="ri-star-fill text-sm text-yellow-400"></i>
            <span className="text-sm font-medium text-white">Vaš pouzdani stomatološki partner</span>
          </div>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          Zdrav osmijeh
          <br />
          počinje ovdje
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
          Profesionalna stomatološka njega u srcu Lukavca. Moderna oprema, iskusni stomatolozi i prijatno okruženje za vaš
          savršen osmijeh.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer whitespace-nowrap rounded-full bg-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:bg-teal-600 hover:shadow-teal-500/50"
          >
            <i className="ri-calendar-check-line mr-2"></i>
            Zakaži pregled
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="cursor-pointer whitespace-nowrap rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/20"
          >
            <i className="ri-service-line mr-2"></i>
            Pogledaj usluge
          </button>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">8+</div>
            <div className="text-sm text-white/80">Godina iskustva</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">1000+</div>
            <div className="text-sm text-white/80">Zadovoljnih pacijenata</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-white">4.8★</div>
            <div className="text-sm text-white/80">Prosječna ocjena</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce motion-reduce:animate-none">
        <i className="ri-arrow-down-line text-3xl text-white/60"></i>
      </div>
    </section>
  );
}
