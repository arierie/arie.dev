/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61610c6cd4489c18909a6b26").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61610c6cd4489cc64f9a6b2a'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {
      'navigation': [],
      'nav-home': [],
      'navi-about': [],
      'blog': [],
      'contact': [],
      'playlist': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-home">
            {map(proxies['navigation'], props => <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" {...{...props, className: `af-class-navigation w-nav ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              <div className="af-class-navigation-items">
                <a href="index.html" aria-current="page" className="af-class-logo-link w-nav-brand w--current">
                  <div className="af-class-logo">arie.dev</div>
                </a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    {map(proxies['nav-home'], props => <a href="index.html" aria-current="page" {...{...props, className: `af-class-navigation-item w-nav-link w--current ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Home</React.Fragment>}</a>)}
                    {map(proxies['navi-about'], props => <a href="about.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Whois</React.Fragment>}</a>)}
                    {map(proxies['blog'], props => <a href="blog.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Blog</React.Fragment>}</a>)}
                    {map(proxies['contact'], props => <a href="contact.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}
                    {map(proxies['playlist'], props => <a href="playlist.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Playlist</React.Fragment>}</a>)}
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img width={22} src="images/menu-icon_1menu-icon.png" alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </React.Fragment>)}</div>)}
            <div className="af-class-section-intro af-class-wf-section"><img src="images/41b4a1c44308441bb5c8da2ac9a59a9d.jpg" loading="lazy" width={184} sizes="(max-width: 479px) 100vw, 184px" alt="my-second-collected-NFT-yeay" srcSet="images/41b4a1c44308441bb5c8da2ac9a59a9d-p-500.jpeg 500w, images/41b4a1c44308441bb5c8da2ac9a59a9d-p-800.jpeg 800w, images/41b4a1c44308441bb5c8da2ac9a59a9d-p-1080.jpeg 1080w, images/41b4a1c44308441bb5c8da2ac9a59a9d-p-2000.jpeg 2000w, images/41b4a1c44308441bb5c8da2ac9a59a9d-p-2600.jpeg 2600w, images/41b4a1c44308441bb5c8da2ac9a59a9d.jpg 2640w" className="af-class-profile" />
              <div className="af-class-pronounce"><strong>/ˈaː.ri/</strong></div>
              <h1 className="af-class-description">A curiosity-driven individual who trapped<br />in a <span className="af-class-text-digital-world">digital world</span> with years of experience <br />in developing apps for<span className="af-class-text-android">Android</span> <br />Started from a <span className="af-class-text-hobby">hobby</span> then accidentally <br />became <span className="af-class-text-professional">professional</span>.</h1>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */