import Link from 'next/link'

export default function Footer() {
  const services = [
    'بوابات الفلل والمصانع',
    'درابزين السلالم والشرفات',
    'أبواب حديد وجراجات',
    'فواصل المحلات التجارية',
    'مظلات معدنية',
    'هناجر وهياكل خفيفة',
    'سلالم الطوارئ',
    'أعمال حديد مخصصة',
  ]

  return (
    <footer className="bg-steel-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">STRUCTA</h3>
            <p className="text-gray-400 mb-4">
              شركة متخصصة في أعمال الحديد والصلب للفلل والمصانع والمشاريع التجارية
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} STRUCTA General Contracting. جميع الحقوق محفوظة.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">معلومات الاتصال</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2 space-x-reverse">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+20 102 351 4125</span>
              </p>
              <p className="text-gray-400">
                متاح للرد على استفساراتكم يومياً
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

