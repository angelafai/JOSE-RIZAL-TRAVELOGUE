import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "../data/countries.js";
import "./CountryPage.css";

const TABS = [
  { id: "timeline", label: "Timeline" },
  { id: "events", label: "Key Events" },
  { id: "quotes", label: "Quotes" },
  { id: "map", label: "Map" },
  { id: "photos", label: "Photos" },
];

export default function CountryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const country = countries.find((c) => c.slug === slug);
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("timeline");
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  const idx = countries.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? countries[idx - 1] : null;
  const next = idx < countries.length - 1 ? countries[idx + 1] : null;

  useEffect(() => {
    setLoaded(false);
    setTab("timeline");
    setTimeout(() => setLoaded(true), 80);
  }, [slug]);

  useEffect(() => {
    if (!country || !mapRef.current || tab !== "map") return;
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    const init = () => {
      const L = window.L;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      const map = L.map(mapRef.current, {
        center: [country.mapCenter.lat, country.mapCenter.lng],
        zoom: 6,
        scrollWheelZoom: false,
      });
      mapInstance.current = map;
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;background:${country.coverColor};border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });
      L.marker([country.mapCenter.lat, country.mapCenter.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${country.name}</strong><br/>${country.year}`);
    };
    if (window.L) {
      init();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload = init;
    document.head.appendChild(s);
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [country, tab]);

  if (!country)
    return (
      <div className="cp-not-found">
        <p>Country not found.</p>
        <button onClick={() => navigate("/countries")}>
          ← Back to destinations
        </button>
      </div>
    );

  return (
    <div className={`cp-page ${loaded ? "loaded" : ""}`}>
      {/* Hero */}
      <div
        className="cp-hero"
        style={{ borderTop: `4px solid ${country.coverColor}` }}
      >
        <div className="cp-hero-inner">
          <button className="cp-back" onClick={() => navigate("/countries")}>
            ← All destinations
          </button>
          <div className="cp-hero-content">
            <div className="cp-hero-left">
              <span className="cp-chapter">
                Chapter {String(idx + 1).padStart(2, "0")}
              </span>
              <h1 className="cp-title">{country.name}</h1>
              <p className="cp-tagline">{country.tagline}</p>
              <div className="cp-pills">
                <span
                  className="cp-pill"
                  style={{
                    background: `${country.coverColor}18`,
                    color: country.coverColor,
                  }}
                >
                  {country.year}
                </span>
                {country.cities.map((c) => (
                  <span key={c} className="cp-pill cp-pill-gray">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="cp-desc">{country.description}</p>

          {/* Did you know */}
          {country.didYouKnow && (
            <div className="cp-dyk">
              <span className="cp-dyk-label">💡 Did you know?</span>
              <span className="cp-dyk-text">{country.didYouKnow}</span>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="cp-tabs-bar">
        <div className="cp-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`cp-tab ${tab === t.id ? "active" : ""}`}
              style={
                tab === t.id
                  ? {
                      borderBottomColor: country.coverColor,
                      color: country.coverColor,
                    }
                  : {}
              }
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="cp-content" key={tab}>
        {tab === "timeline" && (
          <div className="cp-timeline">
            {country.timeline.map((e, i) => (
              <div className="tl-row" key={i}>
                <span className="tl-date">{e.date}</span>
                <div
                  className="tl-dot"
                  style={{ background: country.coverColor }}
                />
                <p className="tl-event">{e.event}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "events" && (
          <div className="cp-events">
            {country.keyEvents.map((ev, i) => (
              <div className="ev-card" key={i}>
                <div
                  className="ev-bar"
                  style={{ background: country.coverColor }}
                />
                <div>
                  <h3 className="ev-title">{ev.title}</h3>
                  <p className="ev-body">{ev.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "quotes" && (
          <div className="cp-quotes">
            {country.quotes?.length > 0 ? (
              country.quotes.map((q, i) => (
                <div
                  className="quote-card"
                  key={i}
                  style={{ borderLeftColor: country.coverColor }}
                >
                  <p className="quote-text">"{q.text}"</p>
                  <cite className="quote-cite">— {q.source}</cite>
                </div>
              ))
            ) : (
              <p className="cp-empty">
                No quotes recorded for this destination.
              </p>
            )}
          </div>
        )}

        {tab === "map" && (
          <div className="cp-map-section">
            <div className="cp-cities">
              {country.cities.map((c) => (
                <span
                  key={c}
                  className="cp-city-chip"
                  style={{
                    borderColor: country.coverColor,
                    color: country.coverColor,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="cp-map" ref={mapRef} />
            <p className="cp-map-hint">
              Scroll to explore · Click the marker for details
            </p>
          </div>
        )}

        {tab === "photos" && (
          <div className="cp-photos">
            {country.photos?.length > 0 ? (
              <div className="photo-grid">
                {country.photos.map((photo, i) => (
                  <div key={i} className="photo-frame">
                    <img
                      src={photo.src}
                      alt={photo.caption || `${country.name} ${i + 1}`}
                    />
                    <div className="photo-info">
                      {photo.caption && (
                        <p className="photo-caption">{photo.caption}</p>
                      )}
                      {photo.credit && (
                        <p className="photo-credit">✏️ {photo.credit}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cp-empty-photos">
                <p>📷</p>
                <p>
                  Add photos to{" "}
                  <code>
                    countries.js → photos: [&#123; src, caption, credit &#125;]
                  </code>
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="cp-pagination">
        {prev ? (
          <button
            className="cp-pag-btn"
            onClick={() => navigate(`/country/${prev.slug}`)}
          >
            <span className="cp-pag-arrow">←</span>
            <span className="cp-pag-info">
              <span className="cp-pag-label">Previous</span>
              <span className="cp-pag-name">{prev.name}</span>
            </span>
          </button>
        ) : (
          <div />
        )}
        <button className="cp-pag-all" onClick={() => navigate("/countries")}>
          All Countries
        </button>
        {next ? (
          <button
            className="cp-pag-btn cp-pag-right"
            onClick={() => navigate(`/country/${next.slug}`)}
          >
            <span className="cp-pag-info" style={{ textAlign: "right" }}>
              <span className="cp-pag-label">Next</span>
              <span className="cp-pag-name">{next.name}</span>
            </span>
            <span className="cp-pag-arrow">→</span>
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
