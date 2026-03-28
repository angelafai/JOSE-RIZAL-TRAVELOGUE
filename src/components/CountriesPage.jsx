import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../data/countries.js";
import "./Pages.css";

export default function CountriesPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />
      <header className="page-header">
        <span className="page-eyebrow">1882 – 1892</span>
        <h1 className="page-title">18 Destinations</h1>
        <p className="page-subtitle">
          Every country Rizal visited, with journal entries for each.
        </p>
      </header>

      <div className="cp-countries-grid">
        {countries.map((c, i) => (
          <article
            key={c.slug}
            className="cpc-card"
            onClick={() => navigate(`/country/${c.slug}`)}
          >
            <div className="cpc-top" style={{ background: c.coverColor }} />
            <div className="cpc-body">
              <div className="cpc-num">{String(i + 1).padStart(2, "0")}</div>
              <span className="cpc-year">{c.year}</span>
              <h3 className="cpc-name">{c.name}</h3>
              <p className="cpc-tag">{c.tagline}</p>
              <p className="cpc-desc">{c.description.slice(0, 120)}…</p>
            </div>
            <div className="cpc-footer">
              <span className="cpc-link">Open journal entry →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
