/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61610c6cd4489c18909a6b26").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class PlaylistView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PlaylistController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PlaylistView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61cf03e0b2978c840a5f3592'
    htmlEl.dataset['wfSite'] = '61610c6cd4489c18909a6b26'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = PlaylistView.Controller !== PlaylistView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-playlist">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navigation-items">
                <a href="index.html" className="af-class-logo-link w-nav-brand">
                  <div className="af-class-logo">arie.dev</div>
                </a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" className="af-class-navigation-item w-nav-link">Home</a>
                    <a href="about.html" className="af-class-navigation-item w-nav-link">Whois</a>
                    <a href="blog.html" className="af-class-navigation-item w-nav-link">Blog</a>
                    <a href="contact.html" className="af-class-navigation-item w-nav-link">Contact</a>
                    <a href="playlist.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">Playlist</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img width={22} src="images/menu-icon_1menu-icon.png" alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section-playlist af-class-wf-section">
              <h1 className="af-class-heading-playlist">Youre the lucky one</h1>
              <div className="af-class-text-playlist-desc">If you happen to be here, he's gonna give you links to some mixtapes. There you can find curated music from multiple genres.</div>
              <div className="af-class-illustration-playlist-container"><img src="images/img_band_hover.png" loading="lazy" width={256} sizes="(max-width: 479px) 80vw, 256px" alt="illustration-playlist" srcSet="images/img_band_hover-p-500.png 500w, images/img_band_hover.png 645w" className="af-class-illustration-playlist" /></div>
              <div className="af-class-text-playlist-genre">Psychedelic</div>
              <div className="af-class-text-playlist-desc">The landscape of this genre inspired him the most. Arie use to listen to this playlist everyday to start work.</div>
              <div className="af-class-html-embed-9 w-embed w-iframe">
                <div style={{left: 0, width: '100%', height: 80, position: 'relative'}}><iframe src="https://open.spotify.com/embed/playlist/6okJSAobitfcikrz5akNEX?utm_source=oembed" style={{top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0}} allowFullScreen allow="encrypted-media;" /></div>
              </div>
              <div className="af-class-text-playlist-genre">Shoegaze</div>
              <div className="af-class-text-playlist-desc">Sometimes you just need to listen to the ambient with limited vocal just to enjoy the vibes.</div>
              <div className="af-class-html-embed-9 w-embed w-iframe">
                <div style={{left: 0, width: '100%', height: 80, position: 'relative'}}><iframe src="https://open.spotify.com/embed/playlist/5upqHrG0QoDmPsL5sFfHHf?utm_source=oembed" style={{top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0}} allowFullScreen allow="encrypted-media;" /></div>
              </div>
              <div className="af-class-text-playlist-genre">Mathrock</div>
              <div className="af-class-text-playlist-desc">Listening to something complicated really blows your mind and help your creativity sometimes, go ahead and try this out.</div>
              <div className="af-class-html-embed-9 w-embed w-iframe">
                <div style={{left: 0, width: '100%', height: 80, position: 'relative'}}><iframe src="https://open.spotify.com/embed/playlist/07zJAOXWImqODwaZywYLwX?utm_source=oembed" style={{top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0}} allowFullScreen allow="encrypted-media;" /></div>
              </div>
              <div className="af-class-text-what-is-next">What's next?</div>
              <div className="af-class-text-what-is-next-desc">Well, he still have many, but it's time for you to share yours. He made a dApp to share your curated music through blockchain named <strong className="af-class-bold-text-7">PlaylistMe</strong>, go check that.</div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default PlaylistView

/* eslint-enable */