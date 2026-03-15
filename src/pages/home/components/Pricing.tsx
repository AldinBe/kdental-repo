const pricingData = [
  {
    category: 'Osnovne usluge',
    icon: 'ri-stethoscope-line',
    color: 'from-teal-400 to-cyan-500',
    services: [
      { name: 'Stomatološki pregled', price: '20 KM' },
      { name: 'RTG snimak zuba', price: '30 KM' },
      { name: 'Čišćenje kamenca', price: '70 KM' },
      { name: 'Poliranje zuba', price: '40 KM' }
    ]
  },
  {
    category: 'Restaurativna stomatologija',
    icon: 'ri-first-aid-kit-line',
    color: 'from-blue-400 to-indigo-500',
    services: [
      { name: 'Bijela plomba (kompozit)', price: 'od 60 KM' },
      { name: 'Liječenje kanala korijena', price: 'od 120 KM' },
      { name: 'Krunica (keramička)', price: 'od 300 KM' },
      { name: 'Most (po zubu)', price: 'od 250 KM' }
    ]
  },
  {
    category: 'Estetska stomatologija',
    icon: 'ri-star-smile-line',
    color: 'from-purple-400 to-pink-500',
    services: [
      { name: 'Izbjeljivanje zuba (profesionalno)', price: 'od 250 KM' },
      { name: 'Keramičke ljuskice (veneer)', price: 'od 400 KM' },
      { name: 'Estetska korekcija', price: 'od 150 KM' },
      { name: 'Bonding', price: 'od 80 KM' }
    ]
  },
  {
    category: 'Implantologija',
    icon: 'ri-capsule-line',
    color: 'from-green-400 to-teal-500',
    services: [
      { name: 'Zubni implantat', price: 'od 800 KM' },
      { name: 'Krunica na implantatu', price: 'od 400 KM' },
      { name: 'Sinus lift', price: 'od 500 KM' },
      { name: 'Koštana augmentacija', price: 'od 350 KM' }
    ]
  },
  {
    category: 'Ortodoncija',
    icon: 'ri-align-center',
    color: 'from-orange-400 to-red-500',
    services: [
      { name: 'Ortodontski pregled', price: '30 KM' },
      { name: 'Fiksna proteza (po vilici)', price: 'od 1500 KM' },
      { name: 'Mobilna proteza', price: 'od 800 KM' },
      { name: 'Retainer', price: 'od 200 KM' }
    ]
  },
  {
    category: 'Dječija stomatologija',
    icon: 'ri-bear-smile-line',
    color: 'from-pink-400 to-rose-500',
    services: [
      { name: 'Pregled djeteta', price: '15 KM' },
      { name: 'Fluoridacija', price: '30 KM' },
      { name: 'Plomba mliječnog zuba', price: 'od 40 KM' },
      { name: 'Vađenje mliječnog zuba', price: 'od 30 KM' }
    ]
  }
];

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-price-tag-3-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">Cjenovnik</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparentne cijene<br />bez skrivenih troškova
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nudimo konkurentne cijene uz najviši kvalitet usluga. Sve cijene su informativnog karaktera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-300 group cursor-pointer"
            >
              <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${category.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`${category.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-teal-600 transition-colors">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 text-sm">{service.name}</span>
                    <span className="text-teal-600 font-bold text-sm whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="whitespace-nowrap w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Zakaži termin
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="ri-information-line text-4xl text-teal-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Napomena o cijenama</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sve navedene cijene su informativnog karaktera. Konačna cijena zavisi od složenosti slučaja i potrebnih materijala. Za tačnu procjenu troškova, molimo zakažite besplatan konsultativni pregled.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i className="ri-check-line text-teal-600"></i>
                <span className="text-sm text-gray-700">Besplatne konsultacije</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i className="ri-check-line text-teal-600"></i>
                <span className="text-sm text-gray-700">Garancija na rad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
