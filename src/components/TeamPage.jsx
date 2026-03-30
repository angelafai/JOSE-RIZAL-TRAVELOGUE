import { useEffect, useState } from "react";
import "./TeamPage.css";

// ── Team members ──────────────────────────────
const TEAM = [
  {
    name: "Sophia Jullia De Jesus",
    role: "Lead Coder / Made the whole website",
    photo: new URL("../assets/team/julls.jpg", import.meta.url).href, // e.g. new URL("../assets/team/yourname.jpg", import.meta.url).href
  },
  {
    name: "Jan Loyd Detomal",
    role: "Designers / Traditional drawings",
    photo: null,
  },
  {
    name: "Kirsten Denise Foja",
    role: "Reaseacher/ Storytelling of the website",
    photo: new URL("../assets/team/kirsten.jpeg", import.meta.url).href,
  },
  {
    name: "Dayanalyn Makasasa",
    role: "Designers / Digital drawings",
    photo: null,
  },
  {
    name: "James Maverick Malasarte",
    role: "Researcher / Timeline & Key Events",
    photo: null,
  },
  {
    name: "Angela Faith Suba",
    role: "Lead Coder/ Assist in making the website",
    photo: null,
  },
];
// ────────────────────────────────────────────────────────────

export default function TeamPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`page-wrapper ${loaded ? "loaded" : ""}`}>
      <header className="page-header">
        <span className="page-eyebrow">The People Behind the Project</span>
        <h1 className="page-title">Our Team</h1>
        <p className="page-subtitle">
          This travelogue was a collaborative effort — combining research,
          design, illustration, and storytelling from each member of the group.
        </p>
      </header>

      <div className="team-grid">
        {TEAM.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="team-avatar">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <div className="team-avatar-placeholder">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
