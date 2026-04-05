export default function Navbar({
  t,
  lang,
  theme,
  menuOpen,
  onToggleMenu,
  onToggleTheme,
  onToggleLang,
}) {
  const themeLabel = theme === "dark" ? t.actions.light : t.actions.dark;
  const langLabel = lang === "ar" ? "EN" : "ع";

  return (
    <nav id="navbar">
      <div className="nav-logo">
        <div className="nav-logo-icon">{t.brand?.short || "CI"}</div>
        <div className="nav-logo-text">{t.brand?.name}</div>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#about">{t.nav.about}</a>
          </li>
          <li>
            <a href="#services">{t.nav.services}</a>
          </li>
          <li>
            <a href="#vision">{t.nav.vision}</a>
          </li>
          <li>
            <a href="#goals">{t.nav.goals}</a>
          </li>
          <li>
            <a href="#clients">{t.nav.clients}</a>
          </li>
          <li>
            <a href="#contact">{t.nav.contact}</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            className="toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="toggle-btn lang-btn"
            type="button"
            onClick={onToggleLang}
            aria-label={t.actions.language}
            title={t.actions.language}
          >
            {langLabel}
          </button>
        </div>
        <a href="#contact" className="nav-cta">
          {t.nav.cta}
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
      </div>
    </nav>
  );
}
