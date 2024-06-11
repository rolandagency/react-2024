import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Gallery } from "./pages/Gallery/Gallery";
import { HowToHelp } from "./pages/HowToHelp/HowToHelp";
import { NewLetter } from "./pages/NewsLetter/NewLetter";
import { OurWork } from "./pages/OurWork/OurWork";
import { AppProvider } from "./providers/AppContext";

import "./App.css";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/howToHelp" element={<HowToHelp />} />
          <Route path="/newsletter" element={<NewLetter />} />
          <Route path="/ourWork" element={<OurWork />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
