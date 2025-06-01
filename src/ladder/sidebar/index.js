import './index.css'

export default {
  template: `
    <div class="lstSidebar">
      <div class="lstBackdrop"></div>
      <div class="lstSidebarWr">
        <div spot="top"></div>
        <div spot="content"></div>
        <div spot="bottom"></div>
      </div>
    </div>`,
  spots: ['top', 'content', 'bottom'],
  props: {
    proxies: {
      opened: {
        default: false
      },
      minimize: {
        default: false
      },
      mobile: {
        default: false
      }
    }
  },
  nodes() {
    return {
      lstBackdrop: {
        onclick: () => {
          if (this.container.proxy.opened.isIndependent()) this.update.onclose(this.proxy, 'opened')
          this.method.onclose?.({ opened: false, mobile: this.proxy.mobile, minimize: this.proxy.minimize })
        },
      },
      lstSidebar: {
        _class: {
          'l-mini': () => this.proxy.minimize,
          'l-opened': () => this.proxy.opened,
          'l-mobile': () => this.proxy.mobile
        }
      }
    }
  }
}