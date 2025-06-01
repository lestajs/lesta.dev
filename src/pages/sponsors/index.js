import './index.pcss'
import { marked } from 'marked'
import titles from './titles'
import sponsorText from 'bundle-text:./content.md'
import men from 'url:./men.svg'

const renderer = new marked.Renderer()

renderer.heading  = function(text, level) {
  return `
    <h${ level } id="${ text.replace(' ', '-').toLowerCase() }">
      ${ text }
    </h${ level }>`;
}

export default {
  template: `
    <div class="content l-fx l-jc-sb">
      <div class="txt"></div>
      <div class="shop l-fx l-gap">
        <div class="card l-fx">
          <h3>How else can you support?</h3>
          <img src="${men}" alt="support">
          <p>Tell others <br> about LestaJS!</p>
        </div>
      </div>
    </div>
    <div class="sponsorLogos"></div>`,
  nodes() {
    return {
      txt: {
        innerHTML: marked.parse(sponsorText, { renderer })
      },
      sponsorLogos: {
        component: {
          src: titles
        }
      }
    }
  },
  mounted() {
    // history.scrollRestoration = 'manual'
  }
}