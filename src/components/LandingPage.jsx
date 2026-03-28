import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "./data/countries";
import "./LandingPage.css";

const TRAVEL_ORDER = [
  "singapore",
  "sri-lanka",
  "egypt",
  "italy",
  "france",
  "spain",
  "germany",
  "czech-republic",
  "austria",
  "switzerland",
  "belgium",
  "england",
  "usa",
  "japan",
  "hong-kong",
  "macao",
];

function toXY(lat, lng, W, H) {
  const x = ((lng + 180) / 360) * W;
  const y = ((90 - lat) / 180) * H;
  return { x, y };
}

export default function LandingPage() {
  const navigate = useNavigate();
  const svgRef = useRef(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const path = svgRef.current?.querySelector(".travel-path");
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        path.style.transition = "stroke-dashoffset 5s ease-in-out";
        path.style.strokeDashoffset = 0;
      }),
    );
  }, [loaded]);

  const W = 1000,
    H = 500;
  const ordered = TRAVEL_ORDER.map((s) =>
    countries.find((c) => c.slug === s),
  ).filter(Boolean);
  const pathD = ordered
    .map((c, i) => {
      const { x, y } = toXY(c.coordinates.lat, c.coordinates.lng, W, H);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const dots = countries.map((c) => ({
    ...c,
    ...toXY(c.coordinates.lat, c.coordinates.lng, W, H),
  }));

  return (
    <div className={`lp-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />

      <header className="lp-header">
        <div className="lp-header-rule" />
        <div className="lp-header-inner">
          <span className="lp-eyebrow">The Grand Tour · 1882–1892</span>
          <h1 className="lp-title">
            <em>José Rizal</em>
            <span>Across the World</span>
          </h1>
          <p className="lp-subtitle">
            Physician. Novelist. Polyglot. Revolutionary. <br />
            Trace the journey that forged the soul of a nation.
          </p>
        </div>
        <div className="lp-header-rule" />
      </header>

      {/* Interactive SVG Map */}
      <section className="lp-map-section">
        <svg
          ref={svgRef}
          className="lp-world-svg"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
            x="0"
            y="0"
            width={W}
            height={H}
            style={{
              filter: "sepia(0.5) contrast(0.75) brightness(0.9)",
              opacity: 0.5,
            }}
          />
          <path
            className="travel-path"
            d={pathD}
            fill="none"
            stroke="#c8a96e"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 5"
          />
          {dots.map((c) => (
            <g
              key={c.slug}
              onClick={() => navigate(`/country/${c.slug}`)}
              onMouseEnter={() => setHoveredCountry(c)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={c.x} cy={c.y} r="12" fill="transparent" />
              <circle
                className="map-dot-pulse"
                cx={c.x}
                cy={c.y}
                r="6"
                fill="none"
                stroke={c.coverColor}
                strokeWidth="1.5"
              />
              <circle
                cx={c.x}
                cy={c.y}
                r="6"
                fill={c.coverColor}
                stroke="#f5edda"
                strokeWidth="1.5"
                style={{ transition: "r 0.2s" }}
              />
            </g>
          ))}
        </svg>

        {hoveredCountry && (
          <div
            className="lp-tooltip"
            style={{
              left: `${((hoveredCountry.coordinates.lng + 180) / 360) * 100}%`,
              top: `${((90 - hoveredCountry.coordinates.lat) / 180) * 100}%`,
            }}
          >
            <span className="tooltip-year">{hoveredCountry.year}</span>
            <span className="tooltip-name">{hoveredCountry.name}</span>
            <span className="tooltip-tag">{hoveredCountry.tagline}</span>
          </div>
        )}
        <p className="lp-map-hint">Click any pin to open its journal entry</p>
      </section>

      {/* Intro */}
      <section className="lp-intro">
        <div className="ink-divider">✦ ✦ ✦</div>
        <p>
          Between 1882 and 1892, José Protasio Rizal Mercado y Alonso Realonda —
          physician, novelist, poet, and revolutionary — traversed the globe on
          a mission of enlightenment. He studied medicine in four countries,
          published two novels that shook an empire, and sacrificed his life for
          a people he loved more than his own safety. These are the pages of his
          unwritten travel journal.
        </p>
        <div className="ink-divider">✦ ✦ ✦</div>
      </section>

      {/* Quick stats */}
      <section className="lp-stats">
        {[
          { num: "18", label: "Countries Visited" },
          { num: "10", label: "Years Abroad" },
          { num: "22+", label: "Languages Spoken" },
          { num: "2", label: "Novels Published" },
        ].map((s) => (
          <div className="lp-stat" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Country cards */}
      <section className="lp-countries">
        <h2 className="lp-section-title">
          <span>18 Destinations</span>
        </h2>
        <div className="lp-grid">
          {countries.map((c, i) => (
            <article
              key={c.slug}
              className="lp-card"
              onClick={() => navigate(`/country/${c.slug}`)}
              style={{
                "--accent": c.coverColor,
                animationDelay: `${i * 0.04}s`,
              }}
            >
              <div
                className="lp-card-bar"
                style={{ background: c.coverColor }}
              />
              <div className="lp-card-num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="lp-card-body">
                <span className="lp-card-year">{c.year}</span>
                <h3 className="lp-card-name">{c.name}</h3>
                <p className="lp-card-tag">{c.tagline}</p>
              </div>
              <span className="lp-card-arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-header-rule" />
        <p>José Rizal · 1861–1896 · Calamba, Laguna, Philippines</p>
        <p className="lp-footer-quote">
          "He who does not love his own language is worse than a brute and
          smelly fish."
        </p>
      </footer>
    </div>
  );
}
