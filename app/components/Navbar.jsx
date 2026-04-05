export default function Navbar({ menuOpen, onToggleMenu }) {
  return (
    <nav id="navbar">
      <div className="nav-logo">
        <div className="nav-logo-icon">CI</div>
        <div className="nav-logo-text">الصناعة الإبداعية</div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">من نحن</a>
        </li>
        <li>
          <a href="#services">خدماتنا</a>
        </li>
        <li>
          <a href="#vision">رؤيتنا</a>
        </li>
        <li>
          <a href="#goals">أهدافنا</a>
        </li>
        <li>
          <a href="#clients">عملاؤنا</a>
        </li>
        <li>
          <a href="#contact">تواصل معنا</a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        تواصل معنا
      </a>
      <button
        className="hamburger"
        id="hamburger"
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="mobileMenu"
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
