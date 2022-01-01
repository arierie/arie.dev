/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class NavView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NavController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NavView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

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
    const proxies = NavView.Controller !== NavView ? transformProxies(this.props.children) : {
      'nav-logo': [],
      'nav-home': [],
      'nav-about': [],
      'nav-blog': [],
      'nav-contact': [],
      'nav-playlist': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation w-nav">
            <div className="af-class-navigation-items">
              {map(proxies['nav-logo'], props => <a href="index.html" {...{...props, className: `af-class-logo-link w-nav-brand ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-logo">arie.dev</div>
              </React.Fragment>}</a>)}
              <div className="af-class-navigation-wrap">
                <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                  {map(proxies['nav-home'], props => <a href="index.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Home</React.Fragment>}</a>)}
                  {map(proxies['nav-about'], props => <a href="about.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Whois</React.Fragment>}</a>)}
                  {map(proxies['nav-blog'], props => <a href="blog.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Blog</React.Fragment>}</a>)}
                  {map(proxies['nav-contact'], props => <a href="contact.html" aria-current="page" {...{...props, className: `af-class-navigation-item w-nav-link w--current ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}
                  {map(proxies['nav-playlist'], props => <a href="playlist.html" {...{...props, className: `af-class-navigation-item w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Playlist</React.Fragment>}</a>)}
                </nav>
                <div className="af-class-menu-button w-nav-button"><img width={22} src="images/menu-icon_1menu-icon.png" alt className="af-class-menu-icon" /></div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default NavView

/* eslint-enable */
