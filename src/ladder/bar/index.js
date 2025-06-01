import menu from '../menu'

export default {
  template: `
    <button class="menuB"></button>
    <div class="menuR"></div>`,
  props: {
    proxies: {
      closed: {},
      mobile: {},
    },
    methods: {
      toggle: {},
      close: {}
    }
  },
  proxies: {
    opened: false
  },
  nodes() {
    return {
      menuB: {
        _class: {
          shake: () => this.proxy.closed,
          offset: () => !this.proxy.closed && this.proxy.mobile
        },
        onclick: this.method.toggle
      },
      menuR: {
        component: {
          src: menu
        }
      }
    }
  }
}