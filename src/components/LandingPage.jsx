import { useNavigate } from "react-router-dom";
import countries from "../data/countries";
import "./LandingPage.css";

const PIN_COLORS = ["#C9A84C", "#8B3A2A", "#4A7C59", "#5C6B9A"];

const ROTATIONS = [-2.1, 1.4, -0.8, 1.8, -1.5, 2.2, -1.1, 0.9, -2.4];
const MARGIN_TOPS = [0, 8, 0, -6, 4, -4, 0, 6, 0];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="lp-root">
      <div className="lp-wrap">
        {/* HEADER */}
        <header className="lp-header">
          <div className="lp-header-border">
            <div className="lp-corner tl" />
            <div className="lp-corner tr" />
            <div className="lp-corner bl" />
            <div className="lp-corner br" />

            <p className="lp-subtitle-tag">A Journey Across Continents</p>
            <h1 className="lp-main-title">Rizal's Travelogue</h1>
            <p className="lp-author-line">
              As chronicled by José Protasio Rizal Mercado y Alonso Realonda
            </p>

            <div className="lp-divider">
              <span className="lp-divider-line" />
              <span className="lp-divider-ornament">✦ ◆ ✦</span>
              <span className="lp-divider-line r" />
            </div>

            <p className="lp-year-line">1882 — 1892</p>
          </div>
        </header>

        <p className="lp-board-label">
          — Select a destination to begin reading —
        </p>

        <div className="lp-corkboard">
          <div className="lp-cards-grid">
            {countries.map((country, i) => {
              const usePin = i % 3 !== 1;
              const pinColor = PIN_COLORS[i % PIN_COLORS.length];

              return (
                <div
                  key={country.id}
                  className="lp-card-wrapper"
                  style={{
                    transform: `rotate(${ROTATIONS[i]}deg)`,
                    marginTop: `${MARGIN_TOPS[i]}px`,
                  }}
                  onClick={() => navigate(`/country/${country.slug}`)}
                >
                  {usePin ? (
                    <div className="lp-pin">
                      <div
                        className="lp-pin-head"
                        style={{ background: pinColor }}
                      />
                      <div className="lp-pin-stem" />
                    </div>
                  ) : (
                    <div className="lp-tape" />
                  )}

                  <div className="lp-card-paper">
                    <div className="lp-card-inner">
                      <span className="lp-card-number">
                        No. {String(country.id).padStart(2, "0")}
                      </span>
                      <span className="lp-card-flag">{country.flag}</span>
                      <p className="lp-card-country">{country.name}</p>
                      <p className="lp-card-region">{country.region}</p>
                      <span className="lp-card-year">{country.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="lp-footer-note">
          Click any card to open that chapter &nbsp;
          <span className="lp-footer-accent">✦</span>
          &nbsp; Use ← → arrows to travel between destinations
        </p>
      </div>
    </div>
  );
}
