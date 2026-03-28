import { useEffect, useState } from "react";
import { glossaryTerms } from "../data/glossary.js";
import "./Pages.css";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(glossaryTerms.map((t) => t.category))),
];

export default function GlossaryPage() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("All");
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  const filtered =
    active === "All"
      ? glossaryTerms
      : glossaryTerms.filter((t) => t.category === active);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">Reference</span>
        <h1 className="page-title">Glossary</h1>
        <p className="page-subtitle">
          Key terms, movements, and events in the world of José Rizal.
        </p>
      </header>

      <div className="glossary-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`glossary-filter-btn ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="glossary-list">
        {filtered.map((entry) => (
          <div key={entry.term} className="glossary-entry">
            <div>
              <h2 className="glossary-term">{entry.term}</h2>
              <span className="glossary-category">{entry.category}</span>
            </div>
            <p className="glossary-def">{entry.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
