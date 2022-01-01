/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import NavigationView from './NavigationView'

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
            <div data-w-id="3380a35f-f848-bdcd-707f-1ef3a9ae5eae" data-animation-type="lottie" data-src="documents/line-drawing-tree-loading.json" data-loop={1} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration={4} data-duration="1.5" className="af-class-lottie-home" />
            <NavigationView.Controller />
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