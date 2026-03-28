import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "./data/countries";
import "./CountryPage.css";

export default function CountryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const country = countries.find((c) => c.slug === slug);
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("timeline");
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const idx = countries.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? countries[idx - 1] : null;
  const next = idx < countries.length - 1 ? countries[idx + 1] : null;

  useEffect(() => {
    setLoaded(false);
    setActiveTab("timeline");
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, [slug]);

  useEffect(() => {
    if (!country || !mapRef.current || activeTab !== "map") return;
    const existingLink = document.getElementById("leaflet-css");
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    const initMap = () => {
      const L = window.L;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      const map = L.map(mapRef.current, {
        center: [country.mapCenter.lat, country.mapCenter.lng],
        zoom: 6,
        scrollWheelZoom: false,
      });
      mapInstanceRef.current = map;
      L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg",
        {
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
          maxZoom: 18,
        },
      ).addTo(map);
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;background:${country.coverColor};border:2px solid #f5edda;border-radius:50%;box-shadow:0 0 0 4px ${country.coverColor}44;"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });
      L.marker([country.mapCenter.lat, country.mapCenter.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<b style="font-family:Georgia,serif">${country.name}</b><br><small>${country.year}</small>`,
        );
    };
    if (window.L) {
      initMap();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = initMap;
    document.head.appendChild(script);
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [country, activeTab]);

  if (!country)
    return (
      <div
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          fontFamily: "Georgia, serif",
          color: "var(--ink-light)",
        }}
      >
        <p style={{ fontSize: "var(--text-lg)" }}>Country not found.</p>
        <button
          onClick={() => navigate("/countries")}
          style={{
            marginTop: "1rem",
            background: "none",
            border: "1px solid var(--parchment-deep)",
            padding: "0.5rem 1.5rem",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          ← Back to Destinations
        </button>
      </div>
    );

  const TABS = [
    { id: "timeline", label: "✦ Timeline" },
    { id: "events", label: "✒ Key Events" },
    { id: "quotes", label: "❝ Quotes" },
    { id: "map", label: "⊕ Map" },
    { id: "photos", label: "▨ Photos" },
  ];

  return (
    <div className={`cp-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />

      {/* Nav */}
      <nav className="cp-nav">
        <button className="cp-back" onClick={() => navigate("/countries")}>
          ← All Destinations
        </button>
        <span className="cp-nav-divider">|</span>
        <span className="cp-nav-loc">
          {country.name} · {country.year}
        </span>
      </nav>

      {/* Hero */}
      <header className="cp-hero" style={{ "--accent": country.coverColor }}>
        <div
          className="cp-chapter-bar"
          style={{ background: country.coverColor }}
        />
        <div className="cp-hero-inner">
          <span className="cp-chapter-num">
            Chapter {String(idx + 1).padStart(2, "0")}
          </span>
          <h1 className="cp-title">{country.name}</h1>
          <p className="cp-tagline">{country.tagline}</p>
          <div className="cp-meta">
            <span className="cp-year">{country.year}</span>
            <span className="cp-sep">·</span>
            <span className="cp-cities">{country.cities.join(", ")}</span>
          </div>
        </div>
        <div
          className="cp-hero-rule"
          style={{
            background: `linear-gradient(to right, ${country.coverColor}, transparent)`,
          }}
        />
      </header>

      {/* Description */}
      <section className="cp-desc">
        <p>{country.description}</p>
      </section>

      {/* Did you know */}
      {country.didYouKnow && (
        <div className="cp-dyk">
          <span className="cp-dyk-label">Did You Know?</span>
          <p>{country.didYouKnow}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="cp-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`cp-tab ${activeTab === tab.id ? "active" : ""}`}
            style={{ "--accent": country.coverColor }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="cp-content" key={activeTab}>
        {activeTab === "timeline" && (
          <div className="cp-timeline">
            {country.timeline.map((e, i) => (
              <div className="tl-entry" key={i}>
                <div
                  className="tl-dot"
                  style={{ background: country.coverColor }}
                />
                <div className="tl-body">
                  <span className="tl-date">{e.date}</span>
                  <p className="tl-event">{e.event}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "events" && (
          <div className="cp-events">
            {country.keyEvents.map((ev, i) => (
              <div className="ev-card" key={i}>
                <div
                  className="ev-bar"
                  style={{ background: country.coverColor }}
                />
                <div className="ev-body">
                  <h3 className="ev-title">{ev.title}</h3>
                  <p className="ev-text">{ev.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "quotes" && (
          <div className="cp-quotes">
            {country.quotes && country.quotes.length > 0 ? (
              country.quotes.map((q, i) => (
                <div
                  className="quote-block"
                  key={i}
                  style={{ "--accent": country.coverColor }}
                >
                  <div
                    className="quote-mark"
                    style={{ color: country.coverColor }}
                  >
                    "
                  </div>
                  <blockquote className="quote-text">{q.text}</blockquote>
                  <cite className="quote-source">— {q.source}</cite>
                </div>
              ))
            ) : (
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  color: "var(--ink-faint)",
                  padding: "2rem 0",
                }}
              >
                No quotes recorded for this destination.
              </p>
            )}
          </div>
        )}

        {activeTab === "map" && (
          <div className="cp-map-wrap">
            <div className="cp-city-tags">
              {country.cities.map((city) => (
                <span
                  key={city}
                  className="city-tag"
                  style={{
                    borderColor: country.coverColor,
                    color: country.coverColor,
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="cp-map" ref={mapRef} />
            <p className="cp-map-note">
              Scroll to explore · Click marker for details
            </p>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="cp-photos">
            {country.photos && country.photos.length > 0 ? (
              <div className="photo-grid">
                {country.photos.map((src, i) => (
                  <div className="photo-frame" key={i}>
                    <img src={src} alt={`${country.name} ${i + 1}`} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="photos-placeholder">
                <span className="ph-icon">▨</span>
                <p>
                  Add your photos to{" "}
                  <code>countries.js → photos: ["./your-image.jpg"]</code>
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      <nav className="cp-pagination">
        {prev ? (
          <button
            className="cp-pag-btn cp-pag-prev"
            onClick={() => navigate(`/country/${prev.slug}`)}
          >
            <span className="pag-arrow">←</span>
            <span className="pag-info">
              <span className="pag-label">Previous</span>
              <span className="pag-name">{prev.name}</span>
            </span>
          </button>
        ) : (
          <div />
        )}
        <button className="cp-pag-home" onClick={() => navigate("/countries")}>
          ⊕ All Countries
        </button>
        {next ? (
          <button
            className="cp-pag-btn cp-pag-next"
            onClick={() => navigate(`/country/${next.slug}`)}
          >
            <span className="pag-info">
              <span className="pag-label">Next</span>
              <span className="pag-name">{next.name}</span>
            </span>
            <span className="pag-arrow">→</span>
          </button>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
