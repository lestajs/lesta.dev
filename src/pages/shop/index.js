import './index.css'
import card from './card'

export default {
  template: `
  <div class="shop">
    <h1>Lesta Shop</h1>
    <p>hgfhgfhgf hgfh gfh</p>
  </div>
  <div class="cards"></div>`,
  nodes() {
    return {
      cards: {
        component: {
          src: card,
          iterate: () => [1,2,3,4]
        }
      }
    }
  }
}