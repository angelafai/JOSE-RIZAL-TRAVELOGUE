import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { works } from "../data/works";
import "./Pages.css";

export default function WorksPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />
      <header className="page-header">
        <span className="page-eyebrow">Literary Map</span>
        <h1 className="page-title">Works & Writings</h1>
        <p className="page-subtitle">
          Every major work Rizal produced, mapped to the country where it was
          written or published.
        </p>
      </header>

      <div className="works-list">
        {works.map((w) => (
          <article key={w.id} className="work-card">
            <div className="work-header">
              <div
                className="work-accent"
                style={{ background: w.coverColor }}
              />
              <div className="work-header-body">
                <span className="work-type">
                  {w.type} · {w.year}
                </span>
                <h2 className="work-title">{w.title}</h2>
                <p className="work-subtitle">{w.subtitle}</p>
              </div>
            </div>

            <div className="work-meta">
              <div className="work-meta-item">
                <span className="work-meta-label">Written / Published</span>
                <span className="work-meta-value">{w.country}</span>
              </div>
              <div className="work-meta-item">
                <span className="work-meta-label">Language</span>
                <span className="work-meta-value">{w.language}</span>
              </div>
              <div className="work-meta-item">
                <span className="work-meta-label">Dedicated To</span>
                <span className="work-meta-value">{w.dedicatedTo}</span>
              </div>
            </div>

            <div className="work-body">
              <p className="work-desc">{w.description}</p>
              <p className="work-significance">{w.significance}</p>
              <div className="work-themes">
                {w.keyThemes.map((t) => (
                  <span key={t} className="work-theme-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="work-quote">"{w.quote}"</div>

            {w.countrySlug && (
              <div
                style={{
                  padding: "0.75rem 1.5rem",
                  borderTop: "1px solid var(--parchment-deep)",
                }}
              >
                <button
                  onClick={() => navigate(`/country/${w.countrySlug}`)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                    fontSize: "var(--text-sm)",
                    color: "var(--gold-dark)",
                  }}
                >
                  See{" "}
                  {works.find((x) => x.id === w.id)?.country?.split(" (")[0]}{" "}
                  journal entry →
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
