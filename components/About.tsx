export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-steel-900 mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-steel-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-steel-900 text-xl">STRUCTA GENERAL CONTRACTING</strong> هي شركة رائدة متخصصة في أعمال الحديد والصلب، تقدم حلولاً متكاملة وخدمات عالية الجودة للقطاعات السكنية والتجارية والصناعية.
            </p>
            <p>
              نحن نتميز بخبرة واسعة في تصميم وتنفيذ جميع أنواع أعمال الحديد والصلب، بدءاً من البوابات والأسوار وصولاً إلى الهياكل المعدنية المعقدة. نلتزم بأعلى معايير الجودة والسلامة في جميع مشاريعنا.
            </p>
            <p>
              فريقنا من المهندسين والفنيين المهرة يعملون بجد لضمان تنفيذ كل مشروع بدقة واحترافية، مع الالتزام بالمواعيد المحددة وتقديم أفضل قيمة مقابل المال.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-steel-50 p-6 rounded-lg text-center border border-steel-200">
              <div className="text-4xl font-bold text-steel-900 mb-2">+500</div>
              <div className="text-gray-600">مشروع منجز</div>
            </div>
            <div className="bg-steel-50 p-6 rounded-lg text-center border border-steel-200">
              <div className="text-4xl font-bold text-steel-900 mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </div>
            <div className="bg-steel-50 p-6 rounded-lg text-center border border-steel-200">
              <div className="text-4xl font-bold text-steel-900 mb-2">100%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
            <div className="bg-steel-50 p-6 rounded-lg text-center border border-steel-200">
              <div className="text-4xl font-bold text-steel-900 mb-2">24/7</div>
              <div className="text-gray-600">دعم فني</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

