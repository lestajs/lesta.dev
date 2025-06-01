export default {
  template: `
  <a class="logo" href="/" title="Home Page" link>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 330 150" style="enable-background:new 0 0 330 150;" xml:space="preserve">
    <rect transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 330 150)" fill="#101010" width="330" height="150"/>
    <g fill="#FFFFFF">
      <polygon points="30,20 20,20 20,60 20,70 30,70 70,70 70,60 30,60 "/>
      <polygon points="220,20 200,20 200,30 220,30 220,70 230,70 230,30 250,30 250,20 230,20 "/>
      <rect x="100" y="40" width="30" height="10"/>
      <polygon points="80,20 80,30 80,60 80,70 90,70 130,70 130,60 90,60 90,30 130,30 130,20 90,20 	"/>
      <polygon points="300,20 270,20 260,20 260,30 260,70 270,70 270,30 300,30 300,50 280,50 280,60 300,60 300,70 310,70
        310,60 310,50 310,30 310,20 "/>
      <polygon points="160,40 160,50 180,50 180,60 140,60 140,70 180,70 190,70 190,60 190,50 190,40 180,40 	"/>
      <polygon points="140,20 140,30 140,50 150,50 150,30 190,30 190,20 150,20 	"/>
      <polygon points="140,80 140,90 140,120 140,130 150,130 190,130 190,120 150,120 150,90 190,90 190,80 150,80 "/>
      <polygon points="70,130 70,120 70,90 70,80 60,80 20,80 20,90 60,90 60,120 20,120 20,130 60,130 "/>
      <path d="M90,80H80v10v30v10h10h30h10v-10V90V80h-10H90z M120,120H90V90h30V120z"/>
      <polygon points="220,100 220,110 240,110 240,120 200,120 200,130 240,130 250,130 250,120 250,110 250,100 240,100 "/>
      <polygon points="200,80 200,90 200,110 210,110 210,90 250,90 250,80 210,80 "/>
    </g>
  </svg>
</a>
  <div class="control l-fx l-jc-sb">
    <a href="/sponsors" link>
      <svg version="1.1" fill="none" stroke="#101010" stroke-width="5" stroke-miterlimit="10" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<path d="M80.6,41.9c0-8.4-6.8-15.2-15.2-15.2c-7.1,0-13.1,4.9-14.8,11.5C49,31.5,43,26.6,35.9,26.6c-8.4,0-15.2,6.8-15.2,15.2c0,4.3,1.8,8.2,4.7,11l0,0L50.2,80l26-27.3h0C78.9,49.9,80.6,46.1,80.6,41.9z"/>
</svg><span>Become Sponsor</span>
    </a>
    <div class="translations" title="Translations">
      <svg version="1.1" fill="none" stroke="#101010" stroke-width="5" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
      <circle cx="49.8" cy="50.1" r="30"/>
      <line x1="19.8" y1="50.1" x2="79.8" y2="50.1"/>
      <ellipse cx="49.8" cy="50.1" rx="10" ry="30"/>
      </svg>
      <div class="langs">
        <div data-lang="en">English</div>
        <div data-lang="ru">Russian</div>
      </div>
    </div>
  </div>`,
  params: {
    logo: null
  },
  nodes() {
    return {
      langs: {
        onclick: (event) => this.app.router.push({ params: { locale: event.target.dataset.lang } })
      }
    }
  }
}
