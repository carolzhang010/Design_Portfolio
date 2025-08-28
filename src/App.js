import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Discin from "./pages/Discin";
import Humor from "./pages/Humor";
import Starcode from "./pages/Starcode";
import UserResearch from "./pages/UserResearch";

function App() {
  return (
    <Router basename="/Design_Portfolio">
      {/* 👇 Runs on every route change */}
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discin" element={<Discin />} />
          <Route path="/the-humor-project" element={<Humor />} />
          <Route path="/starcode" element={<Starcode />} />
          <Route path="/user-research" element={<UserResearch />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
