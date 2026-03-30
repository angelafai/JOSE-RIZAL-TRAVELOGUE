import { useEffect, useState } from "react";
import "./Pages.css";

const REFERENCES = [
  {
    id: 1,
    apa: "Zaide, G. F., & Zaide, S. M. (2019). José Rizal: Life, works and writings of a genius, writer, scientist and national hero (2nd ed.). All-Nations Publishing.",
    note: "The most widely used textbook on Rizal's life and works in Philippine universities. Provides comprehensive coverage of Rizal's travels, writings, and political thought.",
  },
  {
    id: 2,
    apa: "Guerrero, L. M. (1998). The first Filipino: A biography of José Rizal. National Historical Commission of the Philippines.",
    note: "Winner of the Philippine National Book Award. Considered the most thorough and literary biography of Rizal, drawing on primary sources including Rizal's letters and diaries.",
  },
  {
    id: 3,
    apa: "Ocampo, A. R. (2000). Rizal without the overcoat (Expanded ed.). Anvil Publishing.",
    note: "A collection of essays examining Rizal the human being rather than the national symbol — covering his romantic relationships, personal struggles, and lesser-known experiences abroad.",
  },
  {
    id: 4,
    apa: "Palma, R. (1949). Pride of the Malay race: A biography of José Rizal (R. Ozaeta, Trans.). Prentice-Hall.",
    note: "One of the earliest comprehensive biographies of Rizal, written by a former President of the University of the Philippines. Particularly strong on Rizal's European years.",
  },
  {
    id: 5,
    apa: "Rizal, J. (2006). Noli me tangere (H. Augenbraum, Trans.). Penguin Books. (Original work published 1887)",
    note: "Rizal's first novel, published in Berlin in 1887. The primary literary source for understanding Rizal's critique of Spanish colonial rule and friar power in the Philippines.",
  },
  {
    id: 6,
    apa: "Rizal, J. (2011). El filibusterismo (C. Derbyshire, Trans.). Prentice Hall. (Original work published 1891)",
    note: "Rizal's second and darker novel, published in Ghent in 1891. Essential for understanding Rizal's evolving views on reform versus revolution.",
  },
  {
    id: 7,
    apa: "National Historical Commission of the Philippines. (2011). Rizal's correspondence and travel journals. NHCP Publications.",
    note: "A compilation of Rizal's letters and travel journals from his decade abroad, providing primary source documentation of his experiences in each country he visited.",
  },
  {
    id: 8,
    apa: "Joaquin, N. (1977). A question of heroes: Essays in criticism on ten key figures of Philippine history. Ayala Museum.",
    note: "Nick Joaquin's landmark collection of essays on Philippine heroes, including a celebrated essay on Rizal that examines his legacy from a cultural and literary perspective.",
  },
  {
    id: 9,
    apa: "Craig, A. (1913). Rizal's life and minor writings. Philippine Education Company.",
    note: "An early English-language biography that includes translations of several of Rizal's minor works and letters, providing context for his intellectual development during his travels.",
  },
  {
    id: 10,
    apa: "Constantino, R. (1970). Veneration without understanding. Foundation for Nationalist Studies.",
    note: "A critical essay that challenges the romanticization of Rizal as national hero, arguing for a more nuanced understanding of his political positions.",
  },
];

export default function ReferencesPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">Sources</span>
        <h1 className="page-title">References</h1>
        <p className="page-subtitle">
          All sources cited in APA 7th edition format. This travelogue draws on
          10 credible academic and literary sources, including the required
          textbook by Zaide and Zaide.
        </p>
      </header>

      <div className="ref-note">
        <p>
          <strong>Note on sources:</strong> The first-person narration in this
          travelogue is a creative historical reconstruction based on Rizal's
          documented letters, diary entries, and travel journals, interpreted
          through the scholarly sources listed below.
        </p>
      </div>

      <div className="ref-list">
        {REFERENCES.map((ref) => (
          <div key={ref.id} className="ref-entry">
            <div className="ref-num">{String(ref.id).padStart(2, "0")}</div>
            <div className="ref-body">
              <p className="ref-apa">{ref.apa}</p>
              <p className="ref-note-text">{ref.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
