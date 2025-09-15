import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discin from "./pages/Discin";
import Humor from "./pages/Humor";
import Starcode from "./pages/Starcode";
import TitleIX from "./pages/TitleIX";
import CR from "./pages/CR";
import AlRuwais from "./pages/AlRuwais"

function App() {
  return (
    <Router basename="/Design_Portfolio">
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discin" element={<Discin />} />
          <Route path="/the-humor-project" element={<Humor />} />
          <Route path="/starcode" element={<Starcode />} />
          <Route path="/consumer-reports" element={<CR />} />
          <Route path="/nyu-titleix" element={<TitleIX />} />
          <Route path="/alruwais" element={<AlRuwais />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
