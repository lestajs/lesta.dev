import './index.pcss'
import logo from 'url:./logo.svg'
import menu from '../../../src/ladder/menu'
import social from '../../../src/social'

export default {
  template: `
  <div class="banner"></div>
  <header class="header container lstHdr l-fx">
      <div class="menuL"><a href="/" class="logo" link><img src="${ logo }"></a></div>
      <div class="menuR"></div>
  </header>
  <main class="container" router></main>
  <footer class="container">
    <div class="l-fx l-jc-sb l-fx-b">
      <div class="socialMenu"></div>
      <div class="toTop">Back to top</div>
    </div>
    <div class="license">Copyright © <span class="date"></span> Sasha Kosyak | Released under the <a href="https://opensource.org/license/MIT">MIT License.</a></div>
  </footer>`,
  params: {
    index: 0,
    actions: {}
  },
  nodes() {
    return {
      menuR: {
        component: {
          src: menu
        }
      },
      date: {
        textContent: () => new Date().getFullYear()
      },
      socialMenu: {
        component: {
          src: social
        }
      },
      toTop: {
        onclick: () => window.scrollTo({ top: 0 })
      },
      banner: {}
    }
  },
  methods: {
    menu(arr) {
      return arr.reduce((html, a) => html + `<a href=${this.method.href(a.toLowerCase())}>${a}</a>`, '')
    },
    href(key) {
      const links = {
        tools: 'https://github.com/lestajs/snippets',
        components: 'https://github.com/lestajs/components'
      }
      return links[key] ? `"${links[key]}" target="_blank"` : `"/${key}" link`
    }
  },
  mounted() {
    fetch('https://raw.githubusercontent.com/lestajs/core/refs/heads/main/package.json').then(async (response) => {
      const packageData = await response.json()
      const version = packageData.version
      if (!version) return
      this.node.banner.target.innerHTML = `The current version is <strong class="version">${version}</strong>. See <a href="https://github.com/lestajs/core/releases" target="_blank">releases</a> for updates.`
    })
  }
}