export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} id="mobileMenu">
      <a href="#about" onClick={onClose}>
        من نحن
      </a>
      <a href="#services" onClick={onClose}>
        خدماتنا
      </a>
      <a href="#vision" onClick={onClose}>
        رؤيتنا
      </a>
      <a href="#goals" onClick={onClose}>
        أهدافنا
      </a>
      <a href="#clients" onClick={onClose}>
        عملاؤنا
      </a>
      <a href="#contact" onClick={onClose}>
        تواصل معنا
      </a>
    </div>
  );
}
