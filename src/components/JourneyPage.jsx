import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../data/countries.js";
import "./Pages.css";

const FULL_TIMELINE = [
  {
    date: "June 19, 1861",
    country: null,
    event: "Born in Calamba, Laguna, Philippines.",
  },
  {
    date: "May 3, 1882",
    country: "singapore",
    event: "Departs Manila secretly aboard the Salvadora.",
  },
  {
    date: "May 8, 1882",
    country: "singapore",
    event: "Arrives in Singapore — first foreign soil.",
  },
  {
    date: "May 1882",
    country: "sri-lanka",
    event: "Stops in Colombo, Ceylon (Sri Lanka).",
  },
  {
    date: "May 1882",
    country: "egypt",
    event: "Transits the Suez Canal; sees Port Said, Egypt.",
  },
  {
    date: "June 1882",
    country: "italy",
    event: "Arrives in Naples — first step on European soil. Climbs Vesuvius.",
  },
  {
    date: "June 1882",
    country: "france",
    event: "Passes through Marseilles en route to Spain.",
  },
  {
    date: "June 16, 1882",
    country: "spain",
    event: "Arrives in Barcelona, Spain.",
  },
  {
    date: "Late 1882",
    country: "spain",
    event: "Enrolls at the Universidad Central de Madrid.",
  },
  {
    date: "June 21, 1884",
    country: "spain",
    event: "Delivers celebrated toast at banquet honoring Luna and Hidalgo.",
  },
  {
    date: "1885",
    country: "spain",
    event: "Earns Licentiate in Medicine from Madrid university.",
  },
  {
    date: "1885",
    country: "france",
    event: "Studies ophthalmology in Paris under Dr. Louis de Weckert.",
  },
  {
    date: "Feb 1886",
    country: "germany",
    event:
      "Arrives in Heidelberg; works at the university eye clinic under Dr. Otto Becker.",
  },
  {
    date: "Nov 1886",
    country: "germany",
    event: "Moves to Berlin to complete Noli Me Tangere.",
  },
  {
    date: "March 21, 1887",
    country: "germany",
    event: "Noli Me Tangere published in Berlin — funded by Máximo Viola.",
  },
  {
    date: "1887",
    country: "austria",
    event: "Visits Vienna during Central European travels.",
  },
  {
    date: "1887",
    country: "czech-republic",
    event: "Visits Prague; admires the ancient Bohemian capital.",
  },
  {
    date: "1887",
    country: "switzerland",
    event: "Travels through Geneva and Zurich, Switzerland.",
  },
  {
    date: "Feb 1888",
    country: "hong-kong",
    event: "First visit to Hong Kong en route to Japan.",
  },
  {
    date: "Feb 1888",
    country: "macao",
    event: "Short visit to Macao; sees the ruins of St. Paul's Cathedral.",
  },
  {
    date: "Feb 28, 1888",
    country: "japan",
    event: "Arrives in Yokohama, Japan.",
  },
  {
    date: "March–April 1888",
    country: "japan",
    event: "Spends 45 days in Tokyo; meets O-Sei-San (Seiko Usui).",
  },
  {
    date: "April 13, 1888",
    country: "japan",
    event: "Departs Japan reluctantly, bound for the United States.",
  },
  {
    date: "April 28, 1888",
    country: "usa",
    event: "Arrives in San Francisco; quarantined for two weeks.",
  },
  {
    date: "May 1888",
    country: "usa",
    event: "Crosses the United States by rail: Sacramento, Denver, Chicago.",
  },
  { date: "May 16, 1888", country: "usa", event: "Arrives in New York City." },
  {
    date: "May 1888",
    country: "england",
    event: "Arrives in London via Liverpool.",
  },
  {
    date: "1888",
    country: "england",
    event: "Works daily in the British Museum, transcribing Morga's Sucesos.",
  },
  {
    date: "1890",
    country: "belgium",
    event: "Moves to Brussels; begins writing El Filibusterismo.",
  },
  {
    date: "1890–1891",
    country: "france",
    event: "Visits Paris again; engaged with Filipino reformists.",
  },
  {
    date: "Sept 18, 1891",
    country: "belgium",
    event: "El Filibusterismo published in Ghent — funded by Valentin Ventura.",
  },
  {
    date: "Nov 1891",
    country: "hong-kong",
    event: "Returns to Hong Kong; establishes ophthalmology practice.",
  },
  {
    date: "1892",
    country: "hong-kong",
    event:
      "Negotiates with British Borneo for a Filipino colony; performs cataract surgery on his mother.",
  },
  {
    date: "June 26, 1892",
    country: null,
    event: "Returns to Manila despite danger.",
  },
  {
    date: "July 3, 1892",
    country: null,
    event: "Founds La Liga Filipina in Manila — arrested within days.",
  },
  {
    date: "July 1892",
    country: null,
    event: "Exiled to Dapitan, Mindanao — begins 4 years of exile.",
  },
  {
    date: "1892–1896",
    country: null,
    event:
      "Years in Dapitan: builds a school, runs a farm, practices medicine, conducts scientific research. Falls in love with Josephine Bracken.",
  },
  {
    date: "July 1896",
    country: null,
    event: "Volunteers as a military doctor for Cuba; departs the Philippines.",
  },
  {
    date: "Oct 1896",
    country: null,
    event: "Arrested in Barcelona; returned to Manila for trial.",
  },
  {
    date: "Dec 26, 1896",
    country: null,
    event:
      "Found guilty of rebellion, sedition, and conspiracy. Sentenced to death.",
  },
  {
    date: "Dec 29, 1896",
    country: null,
    event:
      "Writes Mi Último Adiós; hides it in a small oil lamp for his sister Trinidad.",
  },
  {
    date: "Dec 30, 1896",
    country: null,
    event:
      "Executed by firing squad at Bagumbayan, Manila. He is 35 years old. He faces his executioners.",
  },
];

export default function JourneyPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  const getCountry = (slug) =>
    slug ? countries.find((c) => c.slug === slug) : null;

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />

      <header className="page-header">
        <span className="page-eyebrow">1861 – 1896</span>
        <h1 className="page-title">The Full Journey</h1>
        <p className="page-subtitle">
          Every significant date, every crossing, every milestone — from Calamba
          to Bagumbayan.
        </p>
      </header>

      <div className="journey-timeline">
        {FULL_TIMELINE.map((entry, i) => {
          const country = getCountry(entry.country);
          return (
            <div
              key={i}
              className={`jt-entry ${country ? "has-country" : ""}`}
              onClick={() => country && navigate(`/country/${country.slug}`)}
              style={{ cursor: country ? "pointer" : "default" }}
            >
              <div className="jt-date">{entry.date}</div>
              <div
                className="jt-dot"
                style={{
                  background: country
                    ? country.coverColor
                    : "var(--parchment-dark)",
                }}
              />
              <div className="jt-body">
                {country && (
                  <span
                    className="jt-country-tag"
                    style={{
                      background: `${country.coverColor}18`,
                      borderColor: `${country.coverColor}55`,
                      color: country.coverColor,
                    }}
                  >
                    {country.name}
                  </span>
                )}
                <p className="jt-event">{entry.event}</p>
                {country && (
                  <span className="jt-link">Read journal entry →</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
