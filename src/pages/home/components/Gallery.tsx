import { useState } from 'react';

const galleryImages = [
  '/assets/IMG_4126.JPG',
  '/assets/IMG_4127.JPG',
  '/assets/IMG_4128.JPG',
  '/assets/IMG_4129.JPG',
  '/assets/IMG_4130.JPG',
  '/assets/IMG_4131.JPG',
  '/assets/IMG_4132.JPG',
  '/assets/IMG_4133.JPG'
].map((url, index) => ({
  url,
  title: `Fotografija ordinacije ${index + 1}`,
  category: 'K Dental Centar',
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <i className="ri-gallery-line text-teal-600"></i>
            <span className="text-teal-600 text-sm font-semibold">Galerija</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pogledajte našu<br />modernu ordinaciju
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upoznajte se sa našim prostorom, opremom i timom prije vaše prve posjete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <div className="w-full h-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="ri-zoom-in-line text-white text-xl"></i>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <div className="max-w-5xl w-full">
              <div className="w-full h-auto">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto object-contain object-top rounded-2xl"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/70">{galleryImages[selectedImage].category}</p>
              </div>
            </div>

            {selectedImage > 0 && (
              <button
                className="absolute left-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
              >
                <i className="ri-arrow-left-line text-2xl"></i>
              </button>
            )}

            {selectedImage < galleryImages.length - 1 && (
              <button
                className="absolute right-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
              >
                <i className="ri-arrow-right-line text-2xl"></i>
              </button>
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-4 rounded-2xl">
            <i className="ri-camera-line text-teal-600 text-xl"></i>
            <span className="text-gray-700">
              Želite vidjeti više? Posjetite nas i uvjerite se sami!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
