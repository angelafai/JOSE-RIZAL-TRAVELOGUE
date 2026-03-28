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
      <header className="page-header">
        <span className="page-eyebrow">1882 – 1892</span>
        <h1 className="page-title">18 Destinations</h1>
        <p className="page-subtitle">
          Every country Rizal visited, with a journal entry for each.
        </p>
      </header>

      <div className="countries-grid">
        {countries.map((c, i) => (
          <article
            key={c.slug}
            className="country-card"
            onClick={() => navigate(`/country/${c.slug}`)}
          >
            <div
              className="country-card-top"
              style={{ background: c.coverColor }}
            />
            <div className="country-card-body">
              <div className="country-card-num">
                #{String(i + 1).padStart(2, "0")}
              </div>
              <span className="country-card-year">{c.year}</span>
              <h3 className="country-card-name">{c.name}</h3>
              <p className="country-card-tag">{c.tagline}</p>
              <p className="country-card-desc">
                {c.description.slice(0, 110)}…
              </p>
            </div>
            <div className="country-card-footer">
              <span className="country-card-link">Open journal entry →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
