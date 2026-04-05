export default function Hero() {
  return (
    <section id="hero">
      <canvas id="hero-canvas" />
      <div className="hero-content">
        <div className="hero-tag">🏭 صناعة عمانية إبداعية لامثيل لها</div>
        <h1 className="hero-title">
          الصناعة<br />
          <span>الإبداعية</span>
        </h1>
        <p className="hero-subtitle">
          مصنع عماني متخصص في توفير خطوط الإنتاج الصناعية والمنتجات البلاستيكية بأعلى
          معايير الجودة العالمية
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">
            اكتشف خدماتنا
          </a>
          <a href="#contact" className="btn-outline">
            تواصل معنا
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
