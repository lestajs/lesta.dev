import base from './base'
import { throttle } from 'lesta'

export default {
  mixins: [base],
  params: {
    headers: null,
    handlerScroll: null,
    preface: 'decor',
    updated: null
  },
  methods: {
    active({ index, href, to }) {
      this.proxy.index = index
      if (to) this.param.headers[index].scrollIntoView({ block: 'start' })
      if (href) history.replaceState(null, null, href)
    },
    navigation() {
      const headers = this.node.content.target.querySelectorAll('h1,h2,h3')
      this.param.headers = headers
      const hash = window.location.hash
      const elements = []
      for (let index = 0;index < headers.length;index++) {
        const href = '#' + headers[index].innerText.replace(' ', '-').toLowerCase()
        const anchor = document.createElement('span')
        anchor.onclick = (event) => {
          this.method.active({ index, href, to: true })
        }
        headers[index].append(anchor)
        if (hash === href) this.method.active({ index, href: '', to: true })
        elements.push({
          text: headers[index].textContent,
          tag: headers[index].tagName,
          href
        })
      }
      return elements
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.param.handlerScroll)
  },
  async mounted() {
    await base.mounted.bind(this)()
    const change = () => {
      for (let index = 0; index < this.param.headers.length; index++) {
        const header = this.param.headers[index]
        const rect = header.getBoundingClientRect()
        if (rect.top > 0 || rect.bottom > 0) {
          this.method.active({ index, href: '#' + header.id, to: false })
          break
        }
      }
    }
    this.param.handlerScroll = throttle(change, 300)
    window.addEventListener('scroll', this.param.handlerScroll)
    history.scrollRestoration = 'manual'
  },
  async refreshed() {
    if (this.app.router.from.path === this.app.router.to.path) return
    base.refreshed.bind(this)()
  }
}