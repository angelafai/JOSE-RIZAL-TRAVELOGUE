import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import countries from "../data/Countries";
import "./CountryPage.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function CountryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = countries.findIndex((c) => c.slug === slug);
  const country = countries[currentIndex];
  const prevCountry = countries[currentIndex - 1] || null;
  const nextCountry = countries[currentIndex + 1] || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!country) {
    return (
      <div className="cp-not-found">
        <p>Country not found.</p>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="cp-root">
      <div className="cp-wrap">
        {/* The top navbar */}
        <nav className="cp-nav">
          <button className="cp-nav-btn" onClick={() => navigate("/")}>
            ⌂ Back to Map
          </button>
          <div className="cp-nav-center">
            <span className="cp-nav-stop">
              Stop {country.id} of {countries.length}
            </span>
          </div>
          <div className="cp-nav-progress">
            {countries.map((c) => (
              <div
                key={c.id}
                className={`cp-nav-dot ${c.id === country.id ? "active" : ""} ${c.id < country.id ? "visited" : ""}`}
                onClick={() => navigate(`/country/${c.slug}`)}
                title={c.name}
              />
            ))}
          </div>
        </nav>

        {/* ── COUNTRY HEADER ── */}
        <header className="cp-header">
          <div className="cp-header-inner">
            <div className="cp-corner tl" />
            <div className="cp-corner tr" />
            <div className="cp-corner bl" />
            <div className="cp-corner br" />
            <p className="cp-header-region">{country.region}</p>
            <div className="cp-header-flag">{country.flag}</div>
            <h1 className="cp-header-title">{country.name}</h1>
            <div className="cp-header-divider">
              <span className="cp-divider-line" />
              <span className="cp-divider-ornament">✦ {country.year} ✦</span>
              <span className="cp-divider-line" />
            </div>
          </div>
        </header>

        {/* ── MAP SECTION ── */}
        <section className="cp-section">
          <div className="cp-section-label">
            <span className="cp-section-icon">🗺</span>
            <h2 className="cp-section-title">Location</h2>
          </div>
          <div className="cp-map-wrapper">
            <MapContainer
              center={country.coordinates}
              zoom={6}
              className="cp-map"
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={country.coordinates}>
                <Popup>
                  <strong>{country.name}</strong>
                  <br />
                  Rizal visited in {country.year}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* ── JOURNAL SECTION ── */}
        <section className="cp-section">
          <div className="cp-section-label">
            <span className="cp-section-icon">📓</span>
            <h2 className="cp-section-title">Journal Entry</h2>
          </div>
          <div className="cp-journal-paper">
            <div className="cp-journal-lines">
              {country.journal.split("\n\n").map((para, i) => (
                <p key={i} className="cp-journal-para">
                  {para}
                </p>
              ))}
            </div>
            <p className="cp-journal-sig">— José Rizal, {country.year}</p>
          </div>
        </section>

        {/* ── PHOTO GALLERY ── */}
        <section className="cp-section">
          <div className="cp-section-label">
            <span className="cp-section-icon">🖼</span>
            <h2 className="cp-section-title">Photo Gallery</h2>
          </div>
          <div className="cp-gallery">
            {country.photos.map((photo, i) => (
              <div
                key={i}
                className="cp-polaroid"
                style={{
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)`,
                }}
              >
                <div className="cp-polaroid-img">
                  {/* Replace the div below with <img src={photo.src} alt={photo.label} /> when you have photos */}
                  {/* We will be having one soon */}
                  <div className="cp-polaroid-placeholder">
                    <span className="cp-placeholder-icon">{country.flag}</span>
                    <span className="cp-placeholder-text">Add Photo</span>
                  </div>
                </div>
                <p className="cp-polaroid-label">{photo.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FUN FACTS ── */}
        <section className="cp-section">
          <div className="cp-section-label">
            <span className="cp-section-icon">📌</span>
            <h2 className="cp-section-title">Did You Know?</h2>
          </div>
          <div className="cp-facts-grid">
            {country.funFacts.map((fact, i) => (
              <div
                key={i}
                className="cp-fact-card"
                style={{
                  transform: `rotate(${(i % 2 === 0 ? 1 : -1) * 0.8}deg)`,
                }}
              >
                <span className="cp-fact-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="cp-fact-text">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PREV / NEXT NAVIGATION ── */}
        <nav className="cp-page-nav">
          {prevCountry ? (
            <button
              className="cp-page-btn prev"
              onClick={() => navigate(`/country/${prevCountry.slug}`)}
            >
              <span className="cp-page-arrow">←</span>
              <span className="cp-page-btn-text">
                <span className="cp-page-btn-label">Previous</span>
                <span className="cp-page-btn-name">
                  {prevCountry.flag} {prevCountry.name}
                </span>
              </span>
            </button>
          ) : (
            <div />
          )}

          <button className="cp-home-btn" onClick={() => navigate("/")}>
            ⌂
          </button>

          {nextCountry ? (
            <button
              className="cp-page-btn next"
              onClick={() => navigate(`/country/${nextCountry.slug}`)}
            >
              <span className="cp-page-btn-text">
                <span className="cp-page-btn-label">Next</span>
                <span className="cp-page-btn-name">
                  {nextCountry.flag} {nextCountry.name}
                </span>
              </span>
              <span className="cp-page-arrow">→</span>
            </button>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}
