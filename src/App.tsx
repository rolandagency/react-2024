import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Gallery } from "./pages/Gallery/Gallery";
import { HowToHelp } from "./pages/HowToHelp/HowToHelp";
import { NewsLetter } from "./pages/NewsLetter/NewsLetter";
import { OurWork } from "./pages/OurWork/OurWork";
import { AppProvider } from "./providers/AppContext";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/howToHelp" element={<HowToHelp />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/ourWork" element={<OurWork />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
