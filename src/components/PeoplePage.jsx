import { useEffect, useState } from "react";
import { people } from "../data/people.js";
import "./Pages.css";

export default function PeoplePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">Connections</span>
        <h1 className="page-title">People He Met</h1>
        <p className="page-subtitle">
          The scientists, reformists, mentors, and romantic interests who shaped
          Rizal's decade abroad.
        </p>
      </header>

      <div className="people-grid">
        {people.map((p) => (
          <article key={p.id} className="person-card">
            <span className="person-country">{p.country}</span>
            <h2 className="person-name">{p.name}</h2>
            <p className="person-role">{p.role}</p>
            <p className="person-rel">Relationship: {p.relationship}</p>
            <div className="person-divider" />
            <p className="person-desc">{p.description}</p>
            <p className="person-notable">{p.notable}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
