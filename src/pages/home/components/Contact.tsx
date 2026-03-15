import { useState } from 'react';

const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/aldin.becic96@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getFieldErrorMessage = (field: HTMLInputElement | HTMLTextAreaElement) => {
    if (field.validity.valueMissing) {
      switch (field.name) {
        case 'name':
          return 'Unesite ime i prezime.';
        case 'phone':
          return 'Unesite broj telefona.';
        case 'email':
          return 'Unesite email adresu.';
        default:
          return 'Popunite ovo polje.';
      }
    }

    if (field.validity.typeMismatch && field.name === 'email') {
      return 'Unesite ispravnu email adresu.';
    }

    if (field.validity.tooLong && field.name === 'message') {
      return 'Poruka može imati najviše 500 karaktera.';
    }

    return '';
  };

  const handleFieldInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.setCustomValidity(getFieldErrorMessage(e.currentTarget));
  };

  const clearFieldError = (field: HTMLInputElement | HTMLTextAreaElement) => {
    field.setCustomValidity('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new FormData(e.currentTarget);

      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formBody,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', date: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-map-pin-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">Kontakt</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zakažite svoj pregled<br />danas
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kontaktirajte nas telefonom, emailom ili popunite formu za zakazivanje. Tu smo da odgovorimo na sva vaša pitanja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-8">
              <h3 className="text-3xl font-bold mb-8">Informacije o kontaktu</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresa</h4>
                    <p className="text-white/90">
                      Luciana 5, Ulaz F2<br />
                      Armije Republike Bosne i Hercegovine<br />
                      Lukavac 75300
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <i className="ri-phone-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <a href="tel:035412873" className="text-white/90 hover:text-white transition-colors">
                      035 412-873
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <i className="ri-time-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Radno vrijeme</h4>
                    <div className="space-y-1 text-white/90 text-sm">
                      <p>Ponedjeljak - Petak: 08:00 - 20:00</p>
                      <p>Subota: 09:00 - 14:00</p>
                      <p>Nedjelja: Zatvoreno</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <a
                  href="tel:035412873"
                  className="whitespace-nowrap w-full bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center justify-center"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Pozovi odmah
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.7408730748175!2d18.534303476173932!3d44.528721595366946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eb1c655a8e4b5%3A0x42b7aa6ae5f4983a!2sK%20Dental%20Centar!5e1!3m2!1sen!2sus!4v1773531496938!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K Dental Centar Lokacija"
              ></iframe>
            </div>
          </div>

          <div>
            <form
              id="appointment-form"
              data-readdy-form
              action="https://formsubmit.co/aldin.becic96@gmail.com"
              method="POST"
              lang="bs"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Zakažite pregled</h3>

              <div className="space-y-6">
                <input type="hidden" name="_subject" value="Nova poruka sa web stranice - K Dental Centar" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onInvalid={handleFieldInvalid}
                    onChange={(e) => {
                      clearFieldError(e.currentTarget);
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm"
                    placeholder="Unesite vaše ime i prezime"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onInvalid={handleFieldInvalid}
                    onChange={(e) => {
                      clearFieldError(e.currentTarget);
                      setFormData({ ...formData, phone: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm"
                    placeholder="Unesite vaš broj telefona"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onInvalid={handleFieldInvalid}
                    onChange={(e) => {
                      clearFieldError(e.currentTarget);
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm"
                    placeholder="vas.email@primjer.com"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    Željeni datum pregleda
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onInvalid={handleFieldInvalid}
                    onChange={(e) => {
                      clearFieldError(e.currentTarget);
                      setFormData({ ...formData, date: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onInvalid={handleFieldInvalid}
                    onChange={(e) => {
                      clearFieldError(e.currentTarget);
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none text-sm"
                    placeholder="Opišite razlog posjete ili postavite pitanje (max 500 karaktera)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 karaktera</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="whitespace-nowrap w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Šaljem...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Pošalji zahtjev
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                    <i className="ri-check-line mr-2"></i>
                    Hvala! Vaš zahtjev je uspješno poslan. Kontaktirat ćemo vas uskoro.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    <i className="ri-error-warning-line mr-2"></i>
                    Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
