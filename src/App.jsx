import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import LandingPage from "./components/LandingPage";
import BioPage from "./components/BioPage";
import JourneyPage from "./components/JourneyPage";
import CountriesPage from "./components/CountriesPage";
import CountryPage from "./components/CountryPage";
import WorksPage from "./components/WorksPage";
import PeoplePage from "./components/PeoplePage";
import GlossaryPage from "./components/GlossaryPage";
import ReferencesPage from "./components/ReferencesPage";
import TeamPage from "./components/TeamPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <SideNav />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/bio" element={<BioPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/country/:slug" element={<CountryPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/references" element={<ReferencesPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
