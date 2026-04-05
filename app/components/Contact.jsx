export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-text reveal">
          <div className="section-tag" style={{ color: "var(--green-light)" }}>
            تواصل معنا
          </div>
          <h2 className="section-title" style={{ color: "white" }}>
            هل لديك مشروع
            <br />
            <span style={{ color: "var(--green-light)" }}>في ذهنك؟</span>
          </h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.6)" }}>
            نحن هنا لتحويل أفكارك الصناعية إلى واقع ملموس بأعلى معايير الجودة
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <span>سلطنة عُمان / مسقط</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <span dir="ltr">+968 9983 6368 &nbsp;|&nbsp; +968 9513 6368</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <span>creativeindustry33@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact-form reveal">
          <div className="form-group">
            <label className="form-label">الاسم الكامل</label>
            <input className="form-input" type="text" placeholder="أدخل اسمك" />
          </div>
          <div className="form-group">
            <label className="form-label">البريد الإلكتروني</label>
            <input
              className="form-input"
              type="email"
              placeholder="example@email.com"
              dir="ltr"
            />
          </div>
          <div className="form-group">
            <label className="form-label">رقم الهاتف</label>
            <input
              className="form-input"
              type="tel"
              placeholder="+968 XXXX XXXX"
              dir="ltr"
            />
          </div>
          <div className="form-group">
            <label className="form-label">رسالتك</label>
            <textarea className="form-input" rows={3} placeholder="اكتب رسالتك هنا..." />
          </div>
          <button className="form-submit">إرسال الرسالة ✦</button>
        </div>
      </div>
    </section>
  );
}
