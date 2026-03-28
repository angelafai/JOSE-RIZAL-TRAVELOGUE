import { useEffect, useState } from "react";
import { glossaryTerms } from "../data/glossary";
import "./Pages.css";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(glossaryTerms.map((t) => t.category))),
];

export default function GlossaryPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  const filtered =
    activeCategory === "All"
      ? glossaryTerms
      : glossaryTerms.filter((t) => t.category === activeCategory);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />
      <header className="page-header">
        <span className="page-eyebrow">Reference</span>
        <h1 className="page-title">Glossary</h1>
        <p className="page-subtitle">
          Key terms, people, movements, and events in the world of José Rizal.
          Essential reading for understanding his journey.
        </p>
      </header>

      {/* Category filter */}
      <div className="glossary-filter">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`glossary-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="glossary-list">
        {filtered.map((entry) => (
          <div key={entry.term} className="glossary-entry">
            <div className="glossary-term-col">
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
