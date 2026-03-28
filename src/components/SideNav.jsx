import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideNav.css";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: "⊕", eyebrow: "Start Here" },
  { path: "/bio", label: "About Rizal", icon: "✦", eyebrow: "The Man" },
  { path: "/journey", label: "Full Journey", icon: "↝", eyebrow: "Chronology" },
  {
    path: "/countries",
    label: "Destinations",
    icon: "◎",
    eyebrow: "18 Countries",
  },
  {
    path: "/works",
    label: "Works & Writings",
    icon: "✒",
    eyebrow: "Literary Map",
  },
  {
    path: "/people",
    label: "People He Met",
    icon: "❋",
    eyebrow: "Connections",
  },
  { path: "/glossary", label: "Glossary", icon: "▤", eyebrow: "Reference" },
];

export default function SideNav() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div className="nav-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <nav
        className={`sidenav ${open ? "open" : "collapsed"} ${mobileOpen ? "mobile-open" : ""}`}
      >
        {/* Collapse toggle (desktop) */}
        <button
          className="collapse-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          {open ? "‹" : "›"}
        </button>

        {/* Logo / Brand */}
        <div className="sidenav-brand">
          <div className="brand-seal">JPR</div>
          {open && (
            <div className="brand-text">
              <span className="brand-title">José Rizal</span>
              <span className="brand-sub">Grand Tour · 1882–1892</span>
            </div>
          )}
        </div>

        <div className="gold-rule-nav" />

        {/* Nav links */}
        <ul className="sidenav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `sidenav-link ${isActive ? "active" : ""}`
                }
              >
                <span className="nav-icon">{item.icon}</span>
                {open && (
                  <span className="nav-label-group">
                    <span className="nav-eyebrow">{item.eyebrow}</span>
                    <span className="nav-label">{item.label}</span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer quote */}
        {open && (
          <div className="sidenav-footer">
            <div className="gold-rule-nav" />
            <p className="nav-quote">
              "The youth is the hope of our motherland."
            </p>
            <p className="nav-quote-attr">— José Rizal</p>
          </div>
        )}
      </nav>
    </>
  );
}
