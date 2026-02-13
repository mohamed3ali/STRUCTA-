import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900 text-white pt-20"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/image/logo.jpeg"
              alt="STRUCTA Logo"
              fill
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          STRUCTA
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
          GENERAL CONTRACTING
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto">
          أعمال الحديد والصلب للفلل والمصانع والمشاريع التجارية
        </p>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          شركة متخصصة في تصميم وتنفيذ جميع أعمال الحديد والصلب بأعلى معايير الجودة والكفاءة
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="px-8 py-4 bg-white text-steel-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            استكشف خدماتنا
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-steel-900 transition-all duration-300 transform hover:scale-105"
          >
            اتصل بنا
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

