export default function Clients({ t }) {
  return (
    <section id="clients">
      <div className="clients-header reveal">
        <div className="section-tag">{t.tag}</div>
        <h2 className="section-title">
          {t.titleMain} <span>{t.titleHighlight}</span>
        </h2>
      </div>
      <div className="clients-track-wrapper">
        <div className="clients-track" id="clientsTrack">
          {[...t.logos, ...t.logos].map((logo, index) => (
            <div className="client-logo" key={`${logo}-${index}`}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
