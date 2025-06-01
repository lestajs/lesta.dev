import bar from '../bar/index.js'
import top from '../top/index.js'
import navigation from '../navigation/index.js'
import sidebar from '../sidebar'
import '../index.pcss'
import content from '../content'
import social from '../../../src/social'

export default {
  template: `
<div class="screen">
      <div class="sidebar"></div>
      <div class="main">
        <div class="menu l-fx l-jc-sb"></div>
        <div class="container txt">
                <div class="tabs"></div>
                <div class="content"></div>
        </div>
        <div class="more l-fx l-jc-sb l-ai-b">
          <a class="edit l-fx l-ai-c" href="/" title="Edit On GitHub" target="_blank">
            <span>Edit On GitHub</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve" fill="#101010">
            <path d="M69.3,23.2L69.3,23.2l7.1,7.1L33.5,73.1l-7.9,1.1l0.9-8.2L69.3,23.2C69.3,23.2,69.3,23.2,69.3,23.2 M69.3,18.2c-1.3,0-2.6,0.5-3.5,1.5l-44,44L20,80l15.9-2.2l44-44c2-2,2-5.1,0-7.1l-7.1-7.1C71.9,18.7,70.6,18.2,69.3,18.2L69.3,18.2z"/>
            </svg>
          </a>
          <div class="socialMenu"></div>
        </div>
      </div>
</div>`,
  params: {
    preface: ''
  },
  proxies: {
    index: 0,
    show: true,
    mobile: false
  },
  nodes() {
    return {
      menu: {
        component: {
          src: bar,
          proxies: {
            closed: () => !this.proxy.show,
            mobile: () => this.proxy.mobile,
          },
          methods: {
            toggle: () => this.proxy.show = !this.proxy.show,
            close: () => this.proxy.show = false
          }
        }
      },
      sidebar: {
        component: {
          src: sidebar,
          proxies: {
            opened: () => this.proxy.show,
            mobile: () => this.proxy.mobile,
          },
          methods: {
            onclose: ({ _update }) => _update(this.proxy, 'show')
          },
          spots: {
            top: {
              component: {
                src: top
              }
            },
            content: {
              component: {}
            }
          }
        }
      },
      edit: {},
      socialMenu: {
        component: {
          src: social
        }
      },
      container: {},
      content: {}
    }
  },
  methods: {
    active({ index }) {
      this.proxy.index = index
    },
    navigation() {},
    async sidebar() {
      await this.node.sidebar.spot.content.mount({
        src: navigation,
        params: {
          elements: () => this.method.navigation()
        },
        proxies: {
          index: () => this.proxy.index
        },
        methods: {
          active: this.method.active
        }
      })
    },
    async update() {
      this.node.content.target.innerHTML = await content(this.app.router.to.extra.content(this.app.router.to.params.locale || 'en'), this.param.preface)
      this.node.edit.target.href = this.app.router.to.extra.edit?.(this.app.router.to.params.locale || 'en') || 'https://github.com/lestajs/translation'
      await this.method.sidebar()
    }
  },
  async mounted() {
    const resizeObserver = new ResizeObserver(() => this.proxy.mobile = document.documentElement.clientWidth < 768 + 240)
    resizeObserver.observe(this.node.container.target)
    await this.method.update()
  },
  async refreshed() {
    await this.method.update()
  }
}