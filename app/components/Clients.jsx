export default function Clients() {
  return (
    <section id="clients">
      <div className="clients-header reveal">
        <div className="section-tag">عملاؤنا</div>
        <h2 className="section-title">
          شركاء <span>النجاح</span>
        </h2>
      </div>
      <div className="clients-track-wrapper">
        <div className="clients-track" id="clientsTrack">
          <div className="client-logo">OMALEEN أومالين</div>
          <div className="client-logo">SPIRIT HUB</div>
          <div className="client-logo">FVPB</div>
          <div className="client-logo">THAMAR ثمر</div>
          <div className="client-logo">Tea Corner</div>
          <div className="client-logo">Tea Time</div>
          {/* Duplicate for infinite */}
          <div className="client-logo">OMALEEN أومالين</div>
          <div className="client-logo">SPIRIT HUB</div>
          <div className="client-logo">FVPB</div>
          <div className="client-logo">THAMAR ثمر</div>
          <div className="client-logo">Tea Corner</div>
          <div className="client-logo">Tea Time</div>
        </div>
      </div>
    </section>
  );
}
