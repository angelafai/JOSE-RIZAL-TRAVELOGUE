import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { works } from "../data/works.js";
import "./Pages.css";

export default function WorksPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">Literary Map</span>
        <h1 className="page-title">Works & Writings</h1>
        <p className="page-subtitle">
          Every major work Rizal produced, mapped to where it was written.
        </p>
      </header>

      <div className="works-list">
        {works.map((w) => (
          <article key={w.id} className="work-card">
            <div
              className="work-card-top"
              style={{ background: w.coverColor }}
            />
            <div className="work-card-body">
              <div className="work-type">
                {w.type} · {w.year}
              </div>
              <h2 className="work-title">{w.title}</h2>
              <p className="work-subtitle">{w.subtitle}</p>

              <div className="work-meta">
                <div className="work-meta-item">
                  <span className="work-meta-label">Written in</span>
                  <span className="work-meta-value">{w.country}</span>
                </div>
                <div className="work-meta-item">
                  <span className="work-meta-label">Language</span>
                  <span className="work-meta-value">{w.language}</span>
                </div>
                <div className="work-meta-item">
                  <span className="work-meta-label">Dedicated to</span>
                  <span className="work-meta-value">{w.dedicatedTo}</span>
                </div>
              </div>

              <p className="work-desc">{w.description}</p>
              <p className="work-significance">{w.significance}</p>

              <div className="work-themes">
                {w.keyThemes.map((t) => (
                  <span key={t} className="work-theme">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="work-quote">"{w.quote}"</div>

            {w.countrySlug && (
              <button
                className="work-country-link"
                onClick={() => navigate(`/country/${w.countrySlug}`)}
              >
                View {w.country.split(" (")[0]} journal entry →
              </button>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
