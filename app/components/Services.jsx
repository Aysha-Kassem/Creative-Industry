export default function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <div>
          <div className="section-tag reveal">خدماتنا</div>
          <h2 className="section-title reveal">
            ما نقدمه <span>لك</span>
          </h2>
        </div>
        <p className="section-desc reveal" style={{ maxWidth: "350px" }}>
          نقدم حلولاً صناعية احترافية تسهّل الأداء على المصانع والعلامات التجارية
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card reveal">
          <div className="service-num">01</div>
          <div className="service-icon">🏗️</div>
          <div className="service-title">الصناعة البلاستيكية</div>
          <p className="service-desc">
            تصنيع الأغطية والعلب ومواد التغليف المختلفة بأعلى مستويات الجودة والدقة
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-num">02</div>
          <div className="service-icon">🔧</div>
          <div className="service-title">خطوط الإنتاج</div>
          <p className="service-desc">
            توفير وتشغيل خطوط الإنتاج الصناعية المتكاملة بأحدث المعدات العالمية
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-num">03</div>
          <div className="service-icon">🎨</div>
          <div className="service-title">تصميم المنتجات</div>
          <p className="service-desc">
            تطوير وتصميم المنتجات البلاستيكية باستخدام أفضل التقنيات الصناعية الحديثة
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-num">04</div>
          <div className="service-icon">📦</div>
          <div className="service-title">الهوية التجارية</div>
          <p className="service-desc">
            إنتاج منتجات تحمل هويتك التجارية بمعدات عالية الدقة وبأساليب خاصة ومميزة
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-num">05</div>
          <div className="service-icon">💡</div>
          <div className="service-title">الاستشارات الصناعية</div>
          <p className="service-desc">
            خدمات استشارية متخصصة تساهم في تطوير القطاع الصناعي وتحفيز الإبداع
          </p>
        </div>
        <div className="service-card reveal">
          <div className="service-num">06</div>
          <div className="service-icon">🚀</div>
          <div className="service-title">إدارة المصانع</div>
          <p className="service-desc">
            إدارة وتشغيل المصانع على أرض الواقع بأفضل الأساليب التشغيلية والتقنيات
          </p>
        </div>
      </div>
    </section>
  );
}
