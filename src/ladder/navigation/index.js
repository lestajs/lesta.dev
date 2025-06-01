export default {
  template: `<div class="elements"></div>`,
  params: {
    index: 0
  },
  props: {
    params: {
      elements: {}
    },
    proxies: {
      index: {},
    },
    methods: {
      active: {},
    }
  },
  handlers: {
    index(index){
      this.param.index !== undefined && this.node.elements.target.children[this.param.index].classList.remove('active')
      this.param.index = index
      this.node.elements.target.children[index].classList.add('active')
    }
  },
  nodes() {
    return {
      elements: {}
    }
  },
  mounted() {
    this.param.elements.forEach((el, index) => {
      const nav = document.createElement('a')
      nav.textContent = el.text
      nav.classList.add(el.tag)
      nav.href = el.href
      nav.setAttribute('link', '')
      this.node.elements.target.appendChild(nav)
      if (this.proxy.index === index) {
        this.param.index = index
        this.node.elements.target.children[index].classList.add('active')
      }
      nav.onclick = (event) => {
        // if (el.href.startsWith('#')) event.stopPropagation()
        this.method.active({ index, href: el.href, to: true })
      }
    })
  }
}