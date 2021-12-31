/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61610c6cd4489c18909a6b26").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61610c6cd4489c7c269a6b2d'
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
    const proxies = AboutView.Controller !== AboutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-about">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navigation-items">
                <a href="index.html" className="af-class-logo-link w-nav-brand">
                  <div className="af-class-logo">arie.dev</div>
                </a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" className="af-class-navigation-item w-nav-link">Home</a>
                    <a href="about.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">Whois</a>
                    <a href="blog.html" className="af-class-navigation-item w-nav-link">Blog</a>
                    <a href="contact.html" className="af-class-navigation-item w-nav-link">Contact</a>
                    <a href="playlist.html" className="af-class-navigation-item w-nav-link">Playlist</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img width={22} src="images/menu-icon_1menu-icon.png" alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-about-content">
              <div className="af-class-section-about af-class-wf-section">
                <h1 className="af-class-label-about-heading">Arie (He/Him/His)</h1>
                <div className="af-class-label-about-pronouns">Pronounce: <strong>/ˈaː.ri/</strong></div><img src="images/mobile_tech.PNG" loading="lazy" width={128} sizes="(max-width: 991px) 80vw, 52vw" alt="Illustration 1" srcSet="images/mobile_tech-p-500.png 500w, images/mobile_tech-p-800.png 800w, images/mobile_tech-p-1080.png 1080w, images/mobile_tech.PNG 1378w" className="af-class-img-illustration-1" />
                <div className="af-class-text-about-desc">Arie is a tech enthusiast turned professional software practitioner based in Jakarta who spent pretty much his last 5 years building <strong className="af-class-bold-text-4">mobile apps</strong>. He has been working in a few different companies with different types and products. From working in an agency, building his own startup company, joining an early-stage startup, and ended up spending his time working with a decacorn company, serving billions of users across SEA while exploring ideas outside work.<br /><br />He spends his time with general domains like e-commerce, marketplace, mobility, communication, etc. Despite that, he has a strong interest in audio and music albeit he's completely aware that he doesn't have sufficient skills to become a musician, he keeps doing it anyway as a stress relief. He's now exploring <strong className="af-class-bold-text-3">Web3</strong> as he believes that it will be the future of the internet with limitless possibilities.<br /></div><img src="images/brush_arrow.PNG" loading="lazy" width={128} sizes="(max-width: 991px) 80vw, 52vw" alt="Illustration 2" srcSet="images/brush_arrow-p-500.png 500w, images/brush_arrow-p-800.png 800w, images/brush_arrow-p-1080.png 1080w, images/brush_arrow.PNG 1378w" className="af-class-img-illustration-2" />
                <div className="af-class-label-heading">You can find his exploration on these sites</div>
                <div className="af-class-label-subheding">Github</div>
                <div className="af-class-html-embed-2 w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://github.com/arierie" data-iframely-url="//cdn.iframe.ly/rsOFlR4" />
                    </div>
                  </div>
                </div>
                <div className="af-class-label-subheding">Dribbble</div>
                <div className="af-class-html-embed w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://dribbble.com/arieridwan" data-iframely-url="//cdn.iframe.ly/TL3HI4P?card=small" />
                    </div>
                  </div>
                </div>
                <div className="af-class-text-closing">That's it, he has nothing more to offer at this point (maybe there is more below)</div><img src="images/brush_question_1.png" loading="lazy" sizes="(max-width: 991px) 80vw, 52vw" srcSet="images/brush_question_1.png 500w, images/brush_question_1.png 800w, images/brush_question_1.png 818w" alt="img-illustration-3" className="af-class-img-illustration-3" />
                <div className="af-class-text-closing">Now what? interested to work with him? hit the contact tab above to get the handler!</div>
                <div className="af-class-label-heading">These might be not related to work though</div>
                <div className="af-class-label-subheding">Audius</div>
                <div className="af-class-html-embed-5 w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://audius.co/oordinarie" data-iframely-url="//cdn.iframe.ly/QqaGhm4" />
                    </div>
                  </div>
                </div>
                <div className="af-class-label-subheding">TikTok</div>
                <div className="af-class-html-embed-4 w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://www.tiktok.com/@oordinarie" data-iframely-url="//cdn.iframe.ly/9BOXPBZ" />
                    </div>
                  </div>
                </div>
                <div className="af-class-label-subheding">SoundCloud</div>
                <div className="af-class-html-embed-3 w-embed w-iframe">
                  <div style={{left: 0, width: '100%', height: 300, position: 'relative'}}><iframe src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F862010296&show_artwork=true&show_comments=false" style={{top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0}} allowFullScreen allow="encrypted-media;" /></div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AboutView

/* eslint-enable */