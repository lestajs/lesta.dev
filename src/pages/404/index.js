import './index.pcss'
import nf from 'url:./404.svg'

export default {
  template: `
    <div class="err">
      <strong>404</strong>
      <p>Page Not Found</p>
      <img src="${nf}" alt="not found" class="nf">
    </div>`
}