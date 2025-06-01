import './index.css'

const links = {
  Gists: 'https://gists.lesta.dev',
  UIComponents: 'https://github.com/lestajs/components'
}

export default {
  template: `<div class="navLinks l-fx l-jc-end"></div>`,
  nodes() {
    return {
      navLinks: {
        innerHTML: () => this.method.menu(['Basic', 'Store', 'Router', 'Utils', 'Tutorial', 'UIComponents', 'Sponsors', 'Gists'])
      }
    }
  },
  methods: {
    menu(arr) {
      return arr.reduce((html, a) => html + `<a href="${ links[a] || '/' + a.toLowerCase()}" ${!links[a] ? 'link' : ''} target="${links[a] ? '_blank' : ''}">${a}</a>`, '')
    }
  }
}