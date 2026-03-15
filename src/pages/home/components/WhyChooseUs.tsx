import { useState } from 'react';

const features = [
  {
    icon: 'ri-microscope-line',
    title: 'Moderna oprema',
    description: 'Koristimo najnoviju stomatološku tehnologiju i opremu za precizne i efikasne tretmane.',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    icon: 'ri-user-star-line',
    title: 'Iskusni stomatolozi',
    description: 'Naš tim čine visoko kvalifikovani i certificirani stomatolozi sa dugogodišnjim iskustvom.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Bezbolne procedure',
    description: 'Primjenjujemo moderne tehnike anestezije za maksimalnu udobnost tokom tretmana.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: 'ri-home-smile-line',
    title: 'Prijatno okruženje',
    description: 'Opuštajuća atmosfera i prijateljsko osoblje čine vašu posjetu ugodnom.',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Brzi termini',
    description: 'Fleksibilno zakazivanje i kratko vrijeme čekanja za hitne slučajeve.',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Najviši standardi',
    description: 'Stroga sterilizacija i higijena prema međunarodnim medicinskim standardima.',
    color: 'from-cyan-400 to-blue-500'
  }
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-award-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">Zašto odabrati nas</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vaše zdravlje je<br />naš prioritet
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kombinujemo stručnost, tehnologiju i ljudski pristup kako bismo vam pružili najbolju moguću stomatološku njegu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-teal-200"
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="ri-check-line text-3xl text-teal-500"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6">
              <i className="ri-customer-service-2-line text-4xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Spremni smo odgovoriti na vaša pitanja
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Naš tim je dostupan da vam pomogne sa svim vašim stomatološkim potrebama. Kontaktirajte nas danas i zakažite vaš pregled.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:035412873"
                className="whitespace-nowrap bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                Pozovi: 035 412-873
              </a>
              <button
                onClick={scrollToForm}
                className="whitespace-nowrap bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30 cursor-pointer"
              >
                <i className="ri-calendar-line mr-2"></i>
                Zakaži online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
