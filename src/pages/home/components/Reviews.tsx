const reviews = [
  {
    name: 'Amira Hadžić',
    rating: 5,
    text: 'Odličan tim stomatologa! Profesionalni, ljubazni i pažljivi. Konačno sam pronašla ordinaciju gdje se osjećam opušteno. Preporučujem svima!',
    date: 'Prije 2 sedmice',
    avatar: 'AH'
  },
  {
    name: 'Emir Softić',
    rating: 5,
    text: 'Najbolja stomatološka ordinacija u Lukavcu. Moderna oprema, bezbolni tretmani i prijatno osoblje. Cijene su pristupačne i transparentne.',
    date: 'Prije 1 mjesec',
    avatar: 'ES'
  },
  {
    name: 'Selma Begić',
    rating: 5,
    text: 'Moja djeca vole dolaziti ovdje! Stomatolozi su izuzetno strpljivi sa djecom. Ordinacija je čista i moderna. Hvala vam na brizi!',
    date: 'Prije 3 sedmice',
    avatar: 'SB'
  },
  {
    name: 'Nedim Kovačević',
    rating: 5,
    text: 'Imao sam kompleksnu proceduru implantata i sve je prošlo savršeno. Dr. je objasnio svaki korak i rezultat je fantastičan. Preporučujem!',
    date: 'Prije 2 mjeseca',
    avatar: 'NK'
  },
  {
    name: 'Lejla Mujić',
    rating: 5,
    text: 'Profesionalnost na najvišem nivou! Brzo zakazivanje, bez čekanja, i uvijek ljubazno osoblje. Konačno imam osmijeh o kojem sam sanjala.',
    date: 'Prije 1 sedmicu',
    avatar: 'LM'
  },
  {
    name: 'Adnan Husić',
    rating: 5,
    text: 'Odlično iskustvo od prvog kontakta. Stomatolozi su stručni, a cijene fer. Posebno cijenim što su mi detaljno objasnili plan tretmana.',
    date: 'Prije 4 sedmice',
    avatar: 'AH'
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-star-smile-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">Recenzije pacijenata</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Šta kažu naši<br />zadovoljni pacijenti
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="ri-star-fill text-2xl text-yellow-400"></i>
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">4.8</span>
          </div>

          <p className="text-lg text-gray-600">
            Bazirano na 150+ Google recenzija
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <i className="ri-google-fill text-2xl text-blue-500"></i>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-teal-600 font-semibold">Verifikovana recenzija</span>
                <i className="ri-check-line text-teal-600"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-r from-teal-50 to-blue-50 px-8 py-6 rounded-2xl">
            <div className="flex items-center space-x-2 mb-3">
              <i className="ri-trophy-line text-3xl text-teal-600"></i>
              <span className="text-2xl font-bold text-gray-900">1000+</span>
            </div>
            <p className="text-gray-600">Zadovoljnih pacijenata od 2018. godine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
