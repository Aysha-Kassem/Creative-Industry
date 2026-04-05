export default function Contact({ t }) {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-text reveal">
          <div className="section-tag" style={{ color: "var(--green-light)" }}>
            {t.tag}
          </div>
          <h2 className="section-title" style={{ color: "white" }}>
            {t.titleMain}
            <br />
            <span style={{ color: "var(--green-light)" }}>{t.titleHighlight}</span>
          </h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.82)" }}>
            {t.desc}
          </p>
          <div className="contact-details">
            {t.details.map((item) => (
              <div className="contact-item" key={item.text}>
                <div className="contact-item-icon">{item.icon}</div>
                <span dir={item.dir || undefined}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-form reveal">
          <div className="form-group">
            <label className="form-label">{t.form.name}</label>
            <input
              className="form-input"
              type="text"
              placeholder={t.form.namePlaceholder}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.form.email}</label>
            <input
              className="form-input"
              type="email"
              placeholder={t.form.emailPlaceholder}
              dir="ltr"
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.form.phone}</label>
            <input
              className="form-input"
              type="tel"
              placeholder={t.form.phonePlaceholder}
              dir="ltr"
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.form.message}</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder={t.form.messagePlaceholder}
            />
          </div>
          <button className="form-submit">{t.form.submit}</button>
        </div>
      </div>
    </section>
  );
}
