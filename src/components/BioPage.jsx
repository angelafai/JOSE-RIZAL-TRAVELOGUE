import { useEffect, useState } from "react";
import "./BioPage.css";

const TIMELINE = [
  {
    year: "1861",
    event:
      "Born on June 19 in Calamba, Laguna — the seventh of eleven children.",
  },
  {
    year: "1872",
    event:
      "Execution of GOMBURZA. His mother tells him to seek justice through knowledge.",
  },
  {
    year: "1877",
    event:
      "Earns Bachelor of Arts from Ateneo Municipal de Manila with highest honors.",
  },
  {
    year: "1878",
    event: "Enrolls at the Universidad de Santo Tomas to study medicine.",
  },
  {
    year: "1882",
    event: "Departs secretly for Spain to continue his medical studies.",
  },
  {
    year: "1884",
    event:
      "Earns his Licentiate in Medicine from the Universidad Central de Madrid.",
  },
  {
    year: "1885",
    event: "Earns a second degree — Licentiate in Philosophy and Letters.",
  },
  {
    year: "1887",
    event:
      "Publishes Noli Me Tangere in Berlin. Immediately banned in the Philippines.",
  },
  {
    year: "1888",
    event:
      "Visits Japan for 45 days. Travels across the United States. Arrives in London.",
  },
  {
    year: "1891",
    event:
      "El Filibusterismo published in Ghent. Returns to Asia via Hong Kong.",
  },
  {
    year: "1892",
    event:
      "Returns to Manila. Founds La Liga Filipina. Arrested and exiled to Dapitan.",
  },
  {
    year: "1892–1896",
    event:
      "Exile in Dapitan: teaches, practices medicine, farms, and falls in love with Josephine Bracken.",
  },
  {
    year: "1896",
    event: "Arrested, tried, and convicted of rebellion. Sentenced to death.",
  },
  {
    year: "Dec 30, 1896",
    event:
      "Executed by firing squad at Bagumbayan, Manila. He is 35 years old.",
  },
];

const FACTS = [
  {
    label: "Full Name",
    value: "José Protasio Rizal Mercado y Alonso Realonda",
  },
  { label: "Born", value: "June 19, 1861 — Calamba, Laguna, Philippines" },
  { label: "Died", value: "December 30, 1896 — Bagumbayan, Manila (age 35)" },
  {
    label: "Education",
    value: "Ateneo de Manila, UST, Universidad Central de Madrid",
  },
  { label: "Specialization", value: "Ophthalmology (eye surgery)" },
  {
    label: "Languages",
    value:
      "22+ languages including Spanish, German, French, English, Japanese, Latin, Tagalog",
  },
  {
    label: "Major Works",
    value:
      "Noli Me Tangere (1887), El Filibusterismo (1891), Mi Último Adiós (1896)",
  },
];

export default function BioPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">The Man</span>
        <h1 className="page-title">José Rizal</h1>
        <p className="page-subtitle">
          Physician, novelist, poet, sculptor, painter, educator, and national
          hero of the Philippines.
        </p>
      </header>

      {/* Essay */}
      <section className="bio-essay">
        <p>
          José Protasio Rizal Mercado y Alonso Realonda was born on June 19,
          1861, in Calamba, a town on the shores of Laguna de Bay. He was the
          seventh of eleven children of Francisco Mercado and Teodora Alonso — a
          family of principalia standing, educated, devout, and prosperous by
          colonial standards.
        </p>
        <p>
          From the beginning, Rizal was extraordinary. He learned to read at age
          three, wrote his first poem at eight, and had mastered multiple
          languages before leaving the Philippines. He painted, sculpted, played
          the flute, composed music, and could hold his own in European academic
          circles — not merely as a curiosity, but as a peer.
        </p>
        <p>
          In 1882, at twenty years old, he sailed secretly for Spain. He would
          spend the next decade crossing Europe and Asia — studying medicine,
          writing his novels, building the reform movement, and forging the
          intellectual case for Philippine dignity. He returned in 1892, knowing
          the risk. He was arrested within days, exiled for four years, and
          eventually shot at sunrise on December 30, 1896.
        </p>

        <blockquote className="bio-quote">
          "I go where there are no slaves, hangmen, or oppressors; where faith
          does not kill; where God alone does reign."
          <cite>— Mi Último Adiós, December 29, 1896</cite>
        </blockquote>
      </section>

      <div className="divider" />

      {/* Facts */}
      <section>
        <h2 className="section-heading">At a Glance</h2>
        <div className="bio-facts">
          {FACTS.map((f) => (
            <div className="bio-fact" key={f.label}>
              <span className="bio-fact-label">{f.label}</span>
              <span className="bio-fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Timeline */}
      <section>
        <h2 className="section-heading">Life Timeline</h2>
        <div className="bio-timeline">
          {TIMELINE.map((entry, i) => (
            <div className="bio-tl-row" key={i}>
              <span className="bio-tl-year">{entry.year}</span>
              <div className="bio-tl-dot" />
              <p className="bio-tl-event">{entry.event}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Legacy */}
      <section>
        <h2 className="section-heading">Legacy</h2>
        <div className="bio-essay">
          <p>
            Rizal was declared the national hero of the Philippines in 1901. His
            face appears on the one-peso coin. December 30 is a national
            holiday. And Luneta Park in Manila — where he was shot — bears his
            name: Rizal Park.
          </p>
          <p>
            But his greatest legacy is the idea he embodied: that a colonized
            people could produce a mind of universal stature — and that stature,
            returned to the people, could become the seed of freedom.
          </p>
        </div>
      </section>
    </div>
  );
}
