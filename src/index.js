import '../components/general.css'
import './index.css'
import { createApp, createRouter } from '../lesta.esm'
import '../components/spinner/index.css'

import routes from  '~/routes'
import layouts from  '~/routes/layouts'

const loader = document.querySelector('.loader')

const app = createApp({
  version: 'v0.0.1'
})

const router = createRouter(app, {
  routes,
  layouts,
  beforeEach() {
    loader.classList.add('lstSpinner')
  },
  afterEnter() {
    loader.classList.remove('lstSpinner')
  }
})

router.init(document.querySelector('#root'))

