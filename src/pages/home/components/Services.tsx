import { useEffect, useState } from 'react';

type Service = {
  icon: string;
  title: string;
  description: string;
  color: string;
  details: string;
  procedures: string[];
};

const services: Service[] = [
  {
    icon: 'ri-tooth-line',
    title: 'Opštaa / preventivna stomatologija',
    description: 'Redovni pregledi, dijagnostika i preventivna njega za dugoročno očuvanje zdravlja zuba i desni.',
    color: 'from-teal-400 to-cyan-500',
    details:
      'Preventivna stomatologija usmjerena je na rano otkrivanje problema i očuvanje zdravlja usne šupljine kroz redovne kontrole i individualne preporuke.',
    procedures: ['Kontrolni pregledi', 'Preventivna dijagnostika', 'Uklanjanje kamenca', 'Savjeti za oralnu higijenu'],
  },
  {
    icon: 'ri-first-aid-kit-line',
    title: 'Restaurativna stomatologija',
    description: 'Sanacija karijesa, ispuni i restaurativni zahvati za očuvanje prirodne strukture zuba.',
    color: 'from-blue-400 to-indigo-500',
    details:
      'Restaurativna stomatologija obuhvata tretmane kojima se uklanja karijes i funkcionalno obnavlja zub uz maksimalno očuvanje prirodnog tkiva.',
    procedures: ['Bijeli ispuni', 'Sanacija karijesa', 'Rekonstrukcija oštećenih zuba', 'Zbrinjavanje osjetljivosti zuba'],
  },
  {
    icon: 'ri-microscope-line',
    title: 'Endodoncija',
    description: 'Precizno liječenje korijenskih kanala uz savremene tehnike i maksimalno očuvanje zuba.',
    color: 'from-purple-400 to-pink-500',
    details:
      'Endodontska terapija primjenjuje se kada je potrebno sačuvati zub zahvaćen upalom ili infekcijom korijenskog kanala.',
    procedures: ['Liječenje kanala korijena', 'Revizija prethodne endodontske terapije', 'Uklanjanje infekcije', 'Očuvanje prirodnog zuba'],
  },
  {
    icon: 'ri-align-center',
    title: 'Ortodoncija',
    description: 'Ispravljanje položaja zuba i vilica radi funkcionalnog zagriza i pravilnog osmijeha.',
    color: 'from-green-400 to-teal-500',
    details:
      'Ortodontski tretmani pomažu u ispravljanju nepravilnog položaja zuba i vilica, uz poseban fokus na funkciju, estetiku i dugoročnu stabilnost.',
    procedures: ['Pregled', 'Plan terapije', 'Ortodonske folije', 'Retineri'],
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Parodontologija',
    description: 'Dijagnostika i terapija bolesti desni i potpornih struktura zuba.',
    color: 'from-orange-400 to-red-500',
    details:
      'Parodontologija je usmjerena na zdravlje desni i koštane potpore zuba, kao i na terapiju upalnih i hroničnih stanja parodonta.',
    procedures: ['Pregled i procjena stanja desni', 'Terapija upale desni', 'Dubinsko čišćenje', 'Praćenje parodontološkog statusa'],
  },
  {
    icon: 'ri-capsule-line',
    title: 'Oralna hirurgija i Implantologija',
    description: 'Hirurški zahvati, vađenja i implantološka rješenja za sigurnu i trajnu rehabilitaciju.',
    color: 'from-cyan-400 to-blue-500',
    details:
      'Ova grana obuhvata hirurške intervencije i implantološka rješenja kojima se vraća funkcija, stabilnost i estetika osmijeha.',
    procedures: ['Vađenje zuba', 'Hirurški zahvati u usnoj šupljini', 'Ugradnja implantata', 'Planiranje implantološke terapije'],
  },
  {
    icon: 'ri-building-line',
    title: 'Protetika',
    description: 'Krunice, mostovi i protetski radovi za obnovu funkcije, estetike i stabilnosti zagriza.',
    color: 'from-emerald-400 to-teal-500',
    details:
      'Protetika vraća punu funkciju i estetiku osmijeha kroz individualno planirane nadoknade koje odgovaraju vašem zagrizu i potrebama.',
    procedures: ['Krunice i mostovi', 'Fiksni protetski radovi', 'Mobilne proteze', 'Rehabilitacija zagriza'],
  },
  {
    icon: 'ri-bear-smile-line',
    title: 'Dječija stomatologija',
    description: 'Nježna i prijateljska njega za najmlađe pacijente u opuštajućem okruženju.',
    color: 'from-pink-400 to-rose-500',
    details:
      'Dječija stomatologija prilagođena je najmlađim pacijentima kako bi pregledi i tretmani bili sigurni, nježni i bez stresa.',
    procedures: ['Preventivni pregledi za djecu', 'Sanacija mliječnih zuba', 'Savjeti roditeljima', 'Stvaranje pozitivnog iskustva kod djece'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const scrollToForm = () => {
    setSelectedService(null);
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
              <i className="ri-service-line text-teal-600"></i>
              <span className="text-teal-600 text-sm font-semibold">Naše usluge</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kompletan spektar<br />stomatoloških usluga
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Od preventivne i restaurativne stomatologije do ortodoncije, hirurgije, implantologije i protetike, nudimo sve na jednom mjestu.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedService(service)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedService(service);
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-teal-200"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
                  }}
                ></div>

                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="flex items-center text-teal-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Saznaj više
                  <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </button>

                <div className="absolute top-4 right-4 w-20 h-20 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
                  <i className={`${service.icon} text-6xl text-teal-600`}></i>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-4 rounded-2xl">
              <i className="ri-question-line text-teal-600 text-xl"></i>
              <span className="text-gray-700">
                Niste sigurni koja usluga vam je potrebna?
              </span>
              <button
                type="button"
                onClick={scrollToForm}
                className="whitespace-nowrap ml-2 text-teal-600 font-semibold hover:text-teal-700 cursor-pointer"
              >
                Kontaktirajte nas →
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[88vh] sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`bg-gradient-to-r ${selectedService.color} px-5 py-5 text-white sm:px-8 sm:py-7`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm sm:h-16 sm:w-16">
                    <i className={`${selectedService.icon} text-2xl sm:text-3xl`}></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">Detalji usluge</p>
                    <h3 id="service-modal-title" className="mt-1 text-2xl font-bold leading-tight sm:text-3xl">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                  aria-label="Zatvori detalje usluge"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-6 sm:max-h-[calc(88vh-120px)] sm:px-8 sm:py-8">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                {selectedService.details}
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 sm:text-xl">Šta obuhvata</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedService.procedures.map((procedure) => (
                    <div
                      key={procedure}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
                    >
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                        <i className="ri-check-line"></i>
                      </span>
                      <span className="text-sm leading-6 text-gray-700 sm:text-base">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-teal-50 to-blue-50 px-5 py-5 sm:px-6">
                <h4 className="text-lg font-bold text-gray-900">Želite konsultaciju za ovu uslugu?</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  Kontaktirajte nas i pomoći ćemo vam da odaberete odgovarajući tretman i termin pregleda.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="whitespace-nowrap rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600 hover:shadow-lg sm:text-base"
                  >
                    Zakaži pregled
                  </button>
                  <a
                    href="tel:035412873"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-600 transition-all hover:border-teal-300 hover:bg-teal-50 sm:text-base"
                  >
                    Pozovi nas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
