import Image from 'next/image'

const galleryImages = [
  { src: '/image/1.jpg', alt: 'مشروع حديد وحديد' },
  { src: '/image/2.jpeg', alt: 'أعمال حديدية' },
  { src: '/image/1.jpg', alt: 'بوابة حديدية' },
  { src: '/image/2.jpeg', alt: 'درابزين حديدي' },
  { src: '/image/1.jpg', alt: 'هيكل معدني' },
  { src: '/image/2.jpeg', alt: 'مظلة حديدية' },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-steel-900 mb-4">
            معرض الأعمال
          </h2>
          <div className="w-24 h-1 bg-steel-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استعرض بعضاً من مشاريعنا المنجزة التي نفخر بها
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/70 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

