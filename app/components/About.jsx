export default function About() {
  return (
    <section id="about">
      <div className="about-visual reveal">
        <div className="about-card-3d" id="aboutCard3d">
          <div className="about-card-inner">
            <div className="about-stat">
              <div className="about-stat-num">+10</div>
              <div className="about-stat-label">سنوات خبرة</div>
            </div>
            <div className="about-divider" />
            <div className="about-stat">
              <div className="about-stat-num">100%</div>
              <div className="about-stat-label">كوادر عمانية</div>
            </div>
            <div className="about-divider" />
            <div className="about-stat">
              <div className="about-stat-num">🏆</div>
              <div className="about-stat-label">معايير عالمية</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-text reveal">
        <div className="section-tag">من نحن</div>
        <h2 className="section-title">
          شركة <span>عمانية</span> بكوادر متميزة
        </h2>
        <p className="section-desc">
          الصناعة الإبداعية شركة بإدارة عمانية وكادر مميز من مهندسين عمانيين ذوي خبرة
          أكثر من عشر سنوات. جاءت لتلائم الخطط الاستراتيجية الصناعية في السلطنة،
          وتساهم في وصولها إلى مصاف الدول المتقدمة.
        </p>
        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">🏭</div>
            <div className="feature-text">
              <h4>معايير عالمية</h4>
              <p>وحدات صناعية وفق أحدث المواصفات</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚙️</div>
            <div className="feature-text">
              <h4>تقنيات متطورة</h4>
              <p>ابتكار صناعي وتقنية معلومات</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-text">
              <h4>صحة وسلامة</h4>
              <p>بيئة عمل آمنة ومعتمدة</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌍</div>
            <div className="feature-text">
              <h4>انتشار عالمي</h4>
              <p>أسواق محلية وإقليمية ودولية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
