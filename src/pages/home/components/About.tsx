export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/img1.jpg"
                alt="K Dental Centar Tim"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">8+</div>
              <div className="text-sm">Godina tradicije</div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
              <i className="ri-hospital-line text-teal-600"></i>
              <span className="text-teal-600 text-sm font-semibold">O nama</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dobrodošli u<br />K Dental Centar
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              K Dental Centar je moderna stomatološka ordinacija koja pruža profesionalne usluge u srcu Lukavca. Sa više od 8 godina iskustva, naš tim posvećenih stomatologa koristi najnoviju tehnologiju i tehnike kako bi vam pružio najbolju moguću njegu.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Naša misija je da svaki pacijent dobije vrhunsku stomatološku njegu u prijatnom i opuštajućem okruženju. Vjerujemo da zdrav osmijeh mijenja živote.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl flex-shrink-0">
                  <i className="ri-microscope-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Moderna oprema</h3>
                  <p className="text-sm text-gray-600">Najnovija stomatološka tehnologija</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl flex-shrink-0">
                  <i className="ri-user-star-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Iskusni tim</h3>
                  <p className="text-sm text-gray-600">Certificirani stomatolozi</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visoki standardi</h3>
                  <p className="text-sm text-gray-600">Sterilizacija i higijena</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-xl flex-shrink-0">
                  <i className="ri-heart-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prijatno okruženje</h3>
                  <p className="text-sm text-gray-600">Udobnost i sigurnost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
