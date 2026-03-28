import { useEffect, useState } from "react";
import "./BioPage.css";

const TIMELINE = [
  {
    year: "1861",
    event:
      "Born on June 19 in Calamba, Laguna, the seventh child of Francisco Mercado and Teodora Alonso.",
  },
  {
    year: "1872",
    event:
      "Execution of GOMBURZA — Fathers Gómez, Burgos, and Zamora — deeply affects the young Rizal. His mother tells him he must seek justice through knowledge.",
  },
  {
    year: "1877",
    event:
      "Enrolls at the Ateneo Municipal de Manila; earns his Bachelor of Arts with highest honors.",
  },
  {
    year: "1878",
    event:
      "Enrolls at the Universidad de Santo Tomas (UST) to study medicine and philosophy.",
  },
  {
    year: "1882",
    event:
      "Departs secretly for Spain to continue his medical studies, beginning his decade of travels abroad.",
  },
  {
    year: "1884",
    event:
      "Earns his Licentiate in Medicine from the Universidad Central de Madrid.",
  },
  {
    year: "1885",
    event:
      "Receives a second degree — Licentiate in Philosophy and Letters — from the same university.",
  },
  {
    year: "1887",
    event:
      "Publishes Noli Me Tangere in Berlin. The novel is immediately banned in the Philippines.",
  },
  {
    year: "1888",
    event:
      "Visits Japan for 45 days; travels across the United States; arrives in London.",
  },
  {
    year: "1890",
    event: "Moves to Brussels; begins writing El Filibusterismo.",
  },
  {
    year: "1891",
    event:
      "El Filibusterismo published in Ghent. Rizal returns to Asia via Hong Kong.",
  },
  {
    year: "1892",
    event:
      "Returns to Manila; founds La Liga Filipina. Arrested within days and exiled to Dapitan, Mindanao.",
  },
  {
    year: "1892–1896",
    event:
      "Years of exile in Dapitan: teaches school, practices medicine, conducts scientific research, tends to his farm, and falls in love with Josephine Bracken.",
  },
  {
    year: "1896",
    event:
      "Volunteers to serve as a doctor in Cuba. Arrested en route; brought back to Manila. Tried and convicted of rebellion, sedition, and conspiracy.",
  },
  {
    year: "Dec 30, 1896",
    event:
      "Executed by firing squad at Bagumbayan (now Luneta/Rizal Park), Manila. He is 35 years old.",
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
    value:
      "Ateneo de Manila, UST, Universidad Central de Madrid (MD, Philosophy)",
  },
  { label: "Specialization", value: "Ophthalmology (eye surgery)" },
  {
    label: "Languages",
    value:
      "Over 22 languages and dialects, including Spanish, German, French, English, Japanese, Latin, Greek, Arabic, Tagalog, Ilokano, and more",
  },
  {
    label: "Major Works",
    value:
      "Noli Me Tangere (1887), El Filibusterismo (1891), Annotated Morga (1890), Mi Último Adiós (1896)",
  },
  {
    label: "Known For",
    value:
      "Philippine nationalism, medical practice, literary genius, political reform advocacy",
  },
];

export default function BioPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="paper-texture" />

      <header className="page-header">
        <span className="page-eyebrow">The Man Behind the Journey</span>
        <h1 className="page-title">José Rizal</h1>
        <p className="page-subtitle">
          Physician, novelist, poet, sculptor, painter, educator, farmer, and
          the national hero of the Philippines. No single word contains him.
        </p>
      </header>

      {/* Opening essay */}
      <section className="bio-essay">
        <p>
          José Protasio Rizal Mercado y Alonso Realonda was born on June 19,
          1861, in Calamba, a town on the shores of Laguna de Bay in the
          Philippines. He was the seventh of eleven children of Francisco
          Mercado and Teodora Alonso, a family of principalia standing —
          educated, devout, and prosperous by the standards of colonial Manila.
        </p>
        <p>
          From the beginning, Rizal was extraordinary. He learned to read at age
          three, wrote his first poem at eight, and had mastered multiple
          languages before he left the Philippines. He painted, sculpted, played
          the flute, composed music, and could discuss European philosophy with
          the leading scholars of his age. He was not merely gifted — he was
          driven, by a burning awareness that his people were suffering under a
          colonial system that denied them dignity, opportunity, and justice.
        </p>
        <p>
          In 1882, at the age of twenty, Rizal sailed secretly for Spain — his
          family did not know, because the Spanish authorities might have
          stopped him. He would spend the next decade traveling across Europe
          and Asia, studying medicine, writing his novels, building the
          Propaganda Movement, and forging the intellectual case for Philippine
          reform. He learned German in months, discussed anthropology with
          Rudolf Virchow, trained as an eye surgeon in Heidelberg, and spent
          months in the British Museum reclaiming Filipino history.
        </p>
        <p>
          He returned to the Philippines in 1892, knowing the risk. He was
          arrested within days, exiled to Dapitan for four years, and eventually
          executed on December 30, 1896, at the age of 35. He faced the firing
          squad with calm, asking only to face his executioners rather than be
          shot in the back as a traitor.
        </p>
        <p>
          His last poem, Mi Último Adiós, was smuggled out of his prison cell
          inside a small oil lamp. The poem bade farewell to his country, his
          loved ones, and his cause — and became the most celebrated literary
          work in Philippine history.
        </p>
        <div className="bio-pull-quote">
          <p>
            "I go where there are no slaves, hangmen, or oppressors; where faith
            does not kill; where God alone does reign."
          </p>
          <cite>— Mi Último Adiós, December 29, 1896</cite>
        </div>
      </section>

      <div className="gold-rule" />

      {/* Quick facts */}
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

      <div className="gold-rule" />

      {/* Life timeline */}
      <section>
        <h2 className="section-heading">Life Timeline</h2>
        <div className="bio-timeline">
          {TIMELINE.map((entry, i) => (
            <div className="bio-tl-entry" key={i}>
              <div className="bio-tl-year">{entry.year}</div>
              <div className="bio-tl-dot" />
              <div className="bio-tl-text">{entry.event}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule" />

      {/* Legacy */}
      <section className="bio-legacy">
        <h2 className="section-heading">Legacy</h2>
        <p>
          Rizal was declared the national hero of the Philippines by American
          Governor-General Frank Murphy in 1901 — a choice that has been debated
          ever since, as some argue that the Americans preferred Rizal's
          peaceful advocacy over Bonifacio's armed revolution. Whatever the
          politics of the designation, Rizal's influence on Philippine culture,
          language, and national consciousness is beyond dispute.
        </p>
        <p>
          Every Filipino student reads Noli Me Tangere and El Filibusterismo in
          school. His face appears on the Philippine one-peso coin. The date of
          his execution, December 30, is a national holiday. And Luneta Park in
          Manila — where he was shot — bears his name: Rizal Park.
        </p>
        <p>
          But perhaps his greatest legacy is not the monument or the holiday. It
          is the idea he embodied: that a colonized people could produce a mind
          of universal stature — and that stature, given back to the people,
          could become the seed of freedom.
        </p>
      </section>
    </div>
  );
}
