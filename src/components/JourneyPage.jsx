import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../data/countries.js";
import "./Pages.css";

const FULL_TIMELINE = [
  {
    date: "June 19, 1861",
    slug: null,
    event: "Born in Calamba, Laguna, Philippines.",
  },
  {
    date: "May 3, 1882",
    slug: "singapore",
    event: "Departs Manila secretly aboard the Salvadora.",
  },
  {
    date: "May 8, 1882",
    slug: "singapore",
    event: "Arrives in Singapore — first foreign soil.",
  },
  {
    date: "May 1882",
    slug: "sri-lanka",
    event: "Stops in Colombo, Ceylon (Sri Lanka).",
  },
  {
    date: "May 1882",
    slug: "egypt",
    event: "Transits the Suez Canal; sees Port Said, Egypt.",
  },
  {
    date: "June 1882",
    slug: "italy",
    event: "Arrives in Naples — first step on European soil. Climbs Vesuvius.",
  },
  {
    date: "June 1882",
    slug: "france",
    event: "Passes through Marseilles en route to Spain.",
  },
  {
    date: "June 16, 1882",
    slug: "spain",
    event: "Arrives in Barcelona, Spain.",
  },
  {
    date: "Late 1882",
    slug: "spain",
    event: "Enrolls at the Universidad Central de Madrid.",
  },
  {
    date: "June 21, 1884",
    slug: "spain",
    event: "Delivers celebrated toast honoring Luna and Hidalgo.",
  },
  {
    date: "1885",
    slug: "spain",
    event: "Earns Licentiate in Medicine from Madrid.",
  },
  {
    date: "1885",
    slug: "france",
    event: "Studies ophthalmology in Paris under Dr. de Weckert.",
  },
  {
    date: "Feb 1886",
    slug: "germany",
    event: "Arrives in Heidelberg; works at the university eye clinic.",
  },
  {
    date: "Nov 1886",
    slug: "germany",
    event: "Moves to Berlin to complete Noli Me Tangere.",
  },
  {
    date: "March 21, 1887",
    slug: "germany",
    event: "Noli Me Tangere published in Berlin.",
  },
  {
    date: "1887",
    slug: "austria",
    event: "Visits Vienna during Central European travels.",
  },
  {
    date: "1887",
    slug: "czech-republic",
    event: "Visits Prague; admires the ancient Bohemian capital.",
  },
  {
    date: "1887",
    slug: "switzerland",
    event: "Travels through Geneva and Zurich.",
  },
  {
    date: "Feb 1888",
    slug: "hong-kong",
    event: "First visit to Hong Kong en route to Japan.",
  },
  {
    date: "Feb 1888",
    slug: "macao",
    event: "Short visit to Macao; sees St. Paul's ruins.",
  },
  { date: "Feb 28, 1888", slug: "japan", event: "Arrives in Yokohama, Japan." },
  {
    date: "March–April 1888",
    slug: "japan",
    event: "Spends 45 days in Tokyo; meets O-Sei-San.",
  },
  {
    date: "April 13, 1888",
    slug: "japan",
    event: "Departs Japan reluctantly for the United States.",
  },
  {
    date: "April 28, 1888",
    slug: "usa",
    event: "Arrives in San Francisco; quarantined for two weeks.",
  },
  {
    date: "May 1888",
    slug: "usa",
    event: "Crosses the United States by rail.",
  },
  { date: "May 16, 1888", slug: "usa", event: "Arrives in New York City." },
  {
    date: "May 1888",
    slug: "england",
    event: "Arrives in London via Liverpool.",
  },
  {
    date: "1888",
    slug: "england",
    event: "Works daily in the British Museum transcribing Morga.",
  },
  {
    date: "1890",
    slug: "belgium",
    event: "Moves to Brussels; begins El Filibusterismo.",
  },
  {
    date: "Sept 18, 1891",
    slug: "belgium",
    event: "El Filibusterismo published in Ghent.",
  },
  {
    date: "Nov 1891",
    slug: "hong-kong",
    event: "Returns to Hong Kong; opens ophthalmology practice.",
  },
  {
    date: "1892",
    slug: "hong-kong",
    event: "Performs cataract surgery on his mother; plans Borneo colony.",
  },
  {
    date: "June 26, 1892",
    slug: null,
    event: "Returns to Manila despite the danger.",
  },
  {
    date: "July 3, 1892",
    slug: null,
    event: "Founds La Liga Filipina — arrested within days.",
  },
  { date: "July 1892", slug: null, event: "Exiled to Dapitan, Mindanao." },
  {
    date: "1892–1896",
    slug: null,
    event:
      "Exile in Dapitan: teaches, farms, practices medicine, falls in love with Josephine Bracken.",
  },
  {
    date: "July 1896",
    slug: null,
    event: "Volunteers as military doctor for Cuba; departs Philippines.",
  },
  {
    date: "Oct 1896",
    slug: null,
    event: "Arrested in Barcelona; returned to Manila for trial.",
  },
  {
    date: "Dec 26, 1896",
    slug: null,
    event: "Found guilty of rebellion. Sentenced to death.",
  },
  {
    date: "Dec 29, 1896",
    slug: null,
    event: "Writes Mi Último Adiós; hides it in an oil lamp.",
  },
  {
    date: "Dec 30, 1896",
    slug: null,
    event: "Executed by firing squad at Bagumbayan, Manila. He is 35.",
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
      <header className="page-header">
        <span className="page-eyebrow">Chronology</span>
        <h1 className="page-title">Full Journey</h1>
        <p className="page-subtitle">
          Every significant date from Calamba to Bagumbayan.
        </p>
      </header>

      <div className="journey-timeline">
        {FULL_TIMELINE.map((entry, i) => {
          const country = getCountry(entry.slug);
          return (
            <div
              key={i}
              className={`jt-entry ${country ? "clickable" : ""}`}
              onClick={() => country && navigate(`/country/${country.slug}`)}
            >
              <span className="jt-date">{entry.date}</span>
              <div
                className={`jt-dot ${country ? "colored" : ""}`}
                style={
                  country
                    ? {
                        background: country.coverColor,
                        outlineColor: "transparent",
                      }
                    : {}
                }
              />
              <div className="jt-body">
                {country && (
                  <span
                    className="jt-country-badge"
                    style={{ background: country.coverColor }}
                  >
                    {country.name}
                  </span>
                )}
                <p className="jt-event">{entry.event}</p>
                {country && (
                  <span className="jt-link">View journal entry →</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
