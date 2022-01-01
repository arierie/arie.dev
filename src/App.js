import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./controllers/IndexController";
import About from "./controllers/AboutController";
import Blog from "./controllers/BlogController";
import Contact from "./controllers/ContactController";
import Playlist from "./controllers/PlaylistController";

const WEBFLOW_PAGE_ID = '61610c6cd4489cc64f9a6b2a'
const WEBFLOW_SITE_ID = '61610c6cd4489c18909a6b26'

class App extends React.Component {

  componentDidMount() {
    var doc = document.getElementsByTagName("html")[0]
    doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
    doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
  };

  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="playlist" element={<Playlist />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
  }
}

export default App;
