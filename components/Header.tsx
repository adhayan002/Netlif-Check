export default function Header() {
  return (
    <header className="site-header">
      <div className="header-bar">
        {/* EMPTY LEFT (kept for grid balance) */}
        <div></div>

        {/* CENTER LOGO */}
        <div className="header-center">LOGO</div>

        {/* RIGHT ICONS + LANGUAGE */}
        <div className="header-right">
          <span>🔍</span>
          <span>♡</span>
          <span>🛒</span>
          <span>👤</span>

          <div className="lang-dropdown">
            <span className="lang-trigger">ENG ▾</span>
            <ul className="lang-menu">
              <li>ENG</li>
              <li>HINDI</li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <a>SHOP</a>
        <a>SKILLS</a>
        <a>STORIES</a>
        <a>ABOUT</a>
        <a>CONTACT US</a>
      </nav>
    </header>
  );
}
