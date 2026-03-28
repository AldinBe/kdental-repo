import priceList from '@/data/price-list.json';

const categoryUi: Record<
  string,
  { icon: string; color: string }
> = {
  'general-dentistry': { icon: 'ri-stethoscope-line', color: 'from-red-400 to-rose-500' },
  restorative: { icon: 'ri-first-aid-kit-line', color: 'from-orange-400 to-amber-500' },
  pedodontics: { icon: 'ri-bear-smile-line', color: 'from-rose-800 to-red-900' },
  endodontics: { icon: 'ri-microscope-line', color: 'from-emerald-400 to-teal-500' },
  periodontics: { icon: 'ri-heart-pulse-line', color: 'from-green-600 to-emerald-800' },
  prosthetics: { icon: 'ri-building-line', color: 'from-blue-500 to-indigo-600' },
  'oral-surgery': { icon: 'ri-scissors-line', color: 'from-slate-700 to-blue-900' },
  implantology: { icon: 'ri-capsule-line', color: 'from-violet-500 to-purple-700' },
};

function formatPrice(km: number) {
  return `${km} KM`;
}

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const { clinic, currency, paymentNote, categories } = priceList;

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-price-tag-3-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">{clinic.documentTitle}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transparentne cijene <br /> bez skrivenih troškova
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nudimo konkurentne cijene uz najviši kvalitet usluga. Sve cijene su informativnog karaktera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const ui = categoryUi[category.id] ?? {
              icon: 'ri-price-tag-3-line',
              color: 'from-teal-400 to-cyan-500',
            };
            return (
              <div
                key={category.id}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-300 group flex flex-col"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${ui.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <i className={`${ui.icon} text-2xl text-white`}></i>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-teal-600 transition-colors leading-snug">
                  {category.name}
                </h3>

                <div className="space-y-0 flex-1 max-h-[22rem] overflow-y-auto pr-1 -mr-1">
                  {category.items.map((item) => (
                    <div
                      key={`${category.id}-${item.row}`}
                      className="flex items-start justify-between gap-3 py-2.5 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700 text-sm leading-snug">{item.name}</span>
                      <span className="text-teal-600 font-bold text-sm whitespace-nowrap shrink-0">
                        {formatPrice(item.price)}
                      </span>
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
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <i className="ri-information-line text-4xl text-teal-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Napomena o cijenama</h3>
            <p className="text-gray-700 font-semibold mb-4 uppercase tracking-wide text-sm">{paymentNote}</p>
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
                <span className="text-sm text-gray-700">Profesionalan tim</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i className="ri-check-line text-teal-600"></i>
                <span className="text-sm text-gray-700">Garancija na rad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
