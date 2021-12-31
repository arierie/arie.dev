/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import NavigationView from './NavigationView'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61610c6cd4489c18909a6b26").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61cec6d2cea032825d2eb694'
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
    const proxies = ContactView.Controller !== ContactView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-contact">
            <NavigationView.Controller />
            <div className="af-class-section-contract af-class-wf-section">
              <h1 className="af-class-heading-contact">Get in touch</h1>
              <div className="af-class-intro-contact">Do you want to review his profile first?<a href="https://www.linkedin.com/in/arieridwan/">https://www.linkedin.com/in/arieridwan/</a>Or<br />Do you want to make an appointment?<a href="https://calendly.com/arieridwan">https://calendly.com/arieridwan</a>
              </div>
              <div className="af-class-div-block-3"><img src="images/img_band.png" loading="lazy" sizes="25vw" srcSet="images/img_band-p-500.png 500w, images/img_band.png 637w" alt="illustration-contact" className="af-class-image-6" /></div>
              <div className="af-class-text-block-12">What about social media?</div>
              <div className="af-class-text-block-13">Well, call him old school, but apparently, he just deactivated his social media few months back. Reason? he said, he just wanted to take a break (could be very-very long). But, since our generation can't leave without it, so he made a new one just for exploring his interest (music, film, NFT, etc).</div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ContactView

/* eslint-enable */