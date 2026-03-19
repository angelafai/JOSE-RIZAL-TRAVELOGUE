import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
// import CountryPage from "./components/CountryPage"; // ← uncomment when built

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/country/:slug" element={<CountryPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
