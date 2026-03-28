import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../data/countries.js";
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
  return { x: ((lng + 180) / 360) * W, y: ((90 - lat) / 180) * H };
}

export default function LandingPage() {
  const navigate = useNavigate();
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null);
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
        path.style.transition = "stroke-dashoffset 4.5s ease-in-out";
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
    <div className={`lp ${loaded ? "loaded" : ""}`}>
      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <span className="lp-eyebrow">1882 – 1892</span>
          <h1 className="lp-title">
            The Travels of
            <br />
            <em>José Rizal</em>
          </h1>
          <p className="lp-lead">
            A decade-long journey across 18 countries that produced two novels,
            a revolution, and the soul of a nation.
          </p>
          <div className="lp-hero-btns">
            <button
              className="lp-btn-primary"
              onClick={() => navigate("/countries")}
            >
              Explore destinations
            </button>
            <button
              className="lp-btn-secondary"
              onClick={() => navigate("/journey")}
            >
              View full timeline
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="lp-stats">
          {[
            { n: "18", l: "Countries" },
            { n: "10", l: "Years abroad" },
            { n: "22+", l: "Languages" },
            { n: "2", l: "Novels written" },
          ].map((s) => (
            <div className="lp-stat" key={s.l}>
              <span className="lp-stat-n">{s.n}</span>
              <span className="lp-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="lp-map-section">
        <div className="lp-map-header">
          <h2 className="lp-map-title">Interactive Route Map</h2>
          <p className="lp-map-sub">Click any pin to open its journal entry</p>
        </div>
        <div className="lp-map-wrap">
          <svg
            ref={svgRef}
            className="lp-svg"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <image
              href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
              x="0"
              y="0"
              width={W}
              height={H}
              style={{ opacity: 0.35, filter: "grayscale(0.3)" }}
            />
            <path
              className="travel-path"
              d={pathD}
              fill="none"
              stroke="#b45309"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 4"
            />
            {dots.map((c) => (
              <g
                key={c.slug}
                onClick={() => navigate(`/country/${c.slug}`)}
                onMouseEnter={() => setHovered(c)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <circle cx={c.x} cy={c.y} r="12" fill="transparent" />
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="6"
                  fill={c.coverColor}
                  stroke="white"
                  strokeWidth="2"
                  className="map-dot"
                />
              </g>
            ))}
          </svg>

          {hovered && (
            <div
              className="lp-tooltip"
              style={{
                left: `${((hovered.coordinates.lng + 180) / 360) * 100}%`,
                top: `${((90 - hovered.coordinates.lat) / 180) * 100}%`,
              }}
            >
              <span className="tt-year">{hovered.year}</span>
              <span className="tt-name">{hovered.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* Countries grid */}
      <section className="lp-countries">
        <div className="lp-section-header">
          <h2 className="lp-section-title">18 Destinations</h2>
          <button className="lp-see-all" onClick={() => navigate("/countries")}>
            See all →
          </button>
        </div>
        <div className="lp-grid">
          {countries.map((c, i) => (
            <article
              key={c.slug}
              className="lp-card"
              onClick={() => navigate(`/country/${c.slug}`)}
            >
              <div
                className="lp-card-accent"
                style={{ background: c.coverColor }}
              />
              <div className="lp-card-body">
                <span className="lp-card-num">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <span className="lp-card-year">{c.year}</span>
                <h3 className="lp-card-name">{c.name}</h3>
                <p className="lp-card-tag">{c.tagline}</p>
              </div>
              <span className="lp-card-arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="lp-footer">
        <p>José Rizal · 1861–1896 · Calamba, Laguna, Philippines</p>
        <p>"The youth is the hope of our motherland."</p>
      </footer>
    </div>
  );
}
