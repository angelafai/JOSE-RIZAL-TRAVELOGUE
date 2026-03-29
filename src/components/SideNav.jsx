import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideNav.css";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: "🏠", sub: "Start here" },
  { path: "/bio", label: "About Rizal", icon: "👤", sub: "The man" },
  { path: "/journey", label: "Full Journey", icon: "🗓", sub: "Chronology" },
  {
    path: "/references",
    label: "References",
    icon: "📌",
    sub: "APA citations",
  },
  {
    path: "/countries",
    label: "Destinations",
    icon: "🌍",
    sub: "18 countries",
  },
  {
    path: "/works",
    label: "Works & Writings",
    icon: "📖",
    sub: "Literary map",
  },
  { path: "/people", label: "People He Met", icon: "🤝", sub: "Connections" },
  { path: "/glossary", label: "Glossary", icon: "📚", sub: "Reference" },
];

export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="nav-mobile-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      {mobileOpen && (
        <div className="nav-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <nav className={`sidenav ${mobileOpen ? "open" : ""}`}>
        {/* Brand */}
        <div className="nav-brand">
          <div className="nav-logo">JPR</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">José Rizal</span>
            <span className="nav-brand-sub">Travels · 1882–1892</span>
          </div>
        </div>

        <div className="nav-divider" />

        {/* Links */}
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <span className="nav-link-icon">{item.icon}</span>
                <span className="nav-link-text">
                  <span className="nav-link-label">{item.label}</span>
                  <span className="nav-link-sub">{item.sub}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="nav-footer">
          <div className="nav-divider" />
          <p className="nav-footer-text">
            "The youth is the hope of our motherland."
          </p>
        </div>
      </nav>
    </>
  );
}
