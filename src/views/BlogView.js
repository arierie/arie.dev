/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import NavView from './NavView'

const scripts = [
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://cdn.iframe.ly/embed.js").then(body => body.text()), isAsync: true },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61610c6cd4489c18909a6b26").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61610c6cd4489c5fc59a6b33'
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
    const proxies = BlogView.Controller !== BlogView ? transformProxies(this.props.children) : {
      'btn-medium': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/arie-dev.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-blog">
            <div data-w-id="37795ad9-141f-f794-afd6-cf379c5c99bf" data-animation-type="lottie" data-src="documents/line-drawing-tree-loading.json" data-loop={1} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration={4} data-duration="1.5" className="af-class-lottie-blog" />
            <NavView.Controller />
            <div className="af-class-section-blog">
              <div className="af-class-blog-header">
                <div className="af-class-heading-title">Writing is a fundamental human skills</div>
                <div className="af-class-heading-description">But why writing is so hard? because we don't<br />know how to do it properly. Hence, we need to train!</div>
              </div>
              <div className="af-class-blog-intro-container">
                <h1 className="af-class-heading"><em className="af-class-italic-text">Sharing</em> Writing is <em className="af-class-italic-text-2">s</em>caring</h1>
                <div className="af-class-text-block-11">Arie writes about tech or non-tech-related things on his {map(proxies['btn-medium'], props => <strong {...{...props, className: `af-class-bold-text-6 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>medium</React.Fragment>}</strong>)} in English and Bahasa Indonesia.<br />‍<br />Below are some of the highlighted articles.</div>
              </div>
              <div className="w-layout-grid af-class-blog-embeded-articles">
                <div className="af-class-html-embed-6 w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://medium.com/@arieridwan/curious-observation-about-digital-product-in-bangalore-and-jakarta-502ddf7d2753" data-iframely-url="//cdn.iframe.ly/kze5UEq?card=small" />
                    </div>
                  </div>
                </div>
                <div className="af-class-html-embed-7 w-embed w-iframe w-script">
                  <div className="af-class-iframely-embed">
                    <div className="af-class-iframely-responsive" style={{height: 140, paddingBottom: 0}}>
                      <a href="https://medium.com/@arieridwan/andy-rubin-the-unconscious-role-model-f808e7aa40d9" data-iframely-url="//cdn.iframe.ly/s1O7PO7?card=small" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-blog-closing-container w-clearfix">
                <div className="af-class-text-blog-closing-title">Congratulation sailor, you made it here</div>
                <div className="af-class-text-blog-closing-desc">Arie is not a good writer, but he's trying to become one. Hope you get motivated as well to start writing!</div><img src="images/human_ok.png" loading="lazy" sizes="(max-width: 479px) 75vw, (max-width: 767px) 77vw, (max-width: 991px) 80vw, 52vw" srcSet="images/human_ok-p-500.png 500w, images/human_ok-p-800.png 800w, images/human_ok.png 977w" alt="illustration-blog" className="af-class-image-5" />
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default BlogView

/* eslint-enable */