import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./controllers/IndexController";
import About from "./controllers/AboutController";
import Blog from "./controllers/BlogController";
import Contact from "./controllers/ContactController";
import Playlist from "./controllers/PlaylistController";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
