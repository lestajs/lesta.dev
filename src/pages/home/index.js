import './index.pcss'
import titles from '../sponsors/titles'
import demo from './demo'

export default {
  template: `
    <div class="wrapper">
        <svg version="1.1" class="mainImg" stroke="#101010" fill="#101010" stroke-width="2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 300 52" style="enable-background:new 0 0 300 52;" xml:space="preserve" >
  <polygon points="12,40 12,1 12,0 11,0 1,0 0,0 0,1 0,41 0,51 0,52 1,52 11,52 51,52 52,52 52,51 52,41 52,40 51,40"/>
<polygon points="299,0 289,0 259,0 249,0 248,0 248,1 248,11 248,51 248,52 249,52 259,52 260,52 260,51 260,12
288,12 288,30 269,30 268,30 268,31 268,41 268,42 269,42 288,42 288,51 288,52 289,52 299,52 300,52 300,51 300,42 300,41 300,31
300,30 300,11 300,1 300,0 \t"/>
<polygon points="218,0 208,0 188,0 187,0 187,1 187,11 187,12 188,12 207,12 207,51 207,52 208,52 218,52 219,52
219,51 219,12 238,12 239,12 239,11 239,1 239,0 238,0 \t"/>
<polygon points="83,20 82,20 82,21 82,31 82,32 83,32 113,32 114,32 114,31 114,21 114,20 113,20 \t"/>
  <polygon points="73,0 63,0 62,0 62,1 62,11 62,41 62,51 62,52 63,52 73,52 113,52 114,52 114,51 114,41 114,40 113,40
74,40 74,12 113,12 114,12 114,11 114,1 114,0 113,0 \t"/>
<polygon points="167,20 147,20 146,20 146,21 146,31 146,32 147,32 166,32 166,40 127,40 126,40 126,41 126,51 126,52
127,52 167,52 177,52 178,52 178,51 178,41 178,31 178,21 178,20 177,20 \t"/>
<polygon points="137,0 127,0 126,0 126,1 126,11 126,31 126,32 127,32 137,32 138,32 138,31 138,12 177,12 178,12
178,11 178,1 178,0 177,0 \t"/>
</svg>
        <div class="mainDesc">LestaJS - A native JavaScript framework for building UI on the web</div>
        <div class="actions l-fx">
              <a class="start more" href="/basic" link><span>Get Started</span></a>
              <a class="github" href="https://github.com/lestajs/core" target="_blank">
              <i><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
              <path className="st0" d="M10,0.2c-5.5,0-10,4.5-10,10c0,4.4,2.9,8.2,6.8,9.5c0.5,0.1,0.7-0.2,0.7-0.5c0-0.2,0-0.9,0-1.7
              c-2.8,0.6-3.4-1.3-3.4-1.3C3.7,15.1,3,14.8,3,14.8c-0.9-0.6,0.1-0.6,0.1-0.6c1,0.1,1.5,1,1.5,1C5.5,16.7,7,16.3,7.5,16
              c0.1-0.6,0.3-1.1,0.6-1.3C6,14.4,3.6,13.6,3.6,9.7c0-1.1,0.4-2,1-2.7C4.5,6.8,4.2,5.8,4.7,4.4c0,0,0.8-0.3,2.7,1
              C8.3,5.2,9.1,5.1,10,5.1c0.8,0,1.7,0.1,2.5,0.3c1.9-1.3,2.7-1,2.7-1c0.5,1.4,0.2,2.4,0.1,2.6c0.6,0.7,1,1.6,1,2.7
              c0,3.8-2.3,4.7-4.6,4.9c0.3,0.3,0.7,0.9,0.7,1.8c0,1.3,0,2.4,0,2.7c0,0.3,0.2,0.6,0.7,0.5c4-1.3,6.9-5.1,6.9-9.5
              C20,4.7,15.5,0.2,10,0.2"></path>
          </svg></i>
              GitHub
              </a>
              <a class="video" href="/"><i></i>Lesta Videos</a>
        </div>
    </div>
    <section class="advantages">
        <div class="columns">
            <div class="col">
                <h3>Light</h3>
                <p>
                Rigorous and clear concepts minimize the accumulation of project knowledge and allow you to focus on business logic.
                </p>
            </div>
            <div class="col">
                <h3>Strong</h3>
                <p>
                Independence from other libraries and technologies make the entry barrier low and serve the stability of your projects.
                </p>
            </div>
            <div class="col">
                <h3>Thin</h3>
                <p>
                Flexible architecture, no virtual DOM and proximity to native js makes it easy to integrate third-party solutions.
                </p>
            </div>
        </div>
    </section>
    <section class="component">
        <h3>Component Architecture</h3>
        <p>Lesta provides a component-based architecture, where HTML, CSS and JavaScript within each component are clearly separated.</p>
        <div class="columns">
          <div class="col">
<code class="hljs-html"><span class="hljs-comment">&lt;!--Lesta will find nodes by class--&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"description"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span></code>
            <strong>card.html</strong>
          </div>
          <div class="col">
<code class="hljs-css"><span class="hljs-selector-class">.card</span> {
  <span class="hljs-attribute">border</span>: <span class="hljs-number">2px</span> solid;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-selector-class">.title</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  }
}</code>
            <strong>card.module.css</strong>
            </div>
            <div class="col">
<code class="hljs-js"><span class="hljs-keyword">import</span> template <span class="hljs-keyword">from</span> <span class="hljs-string">'./card.html'</span>
<span class="hljs-keyword">import</span> styles <span class="hljs-keyword">from</span> <span class="hljs-string">'./card.module.css'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    template, <span class="hljs-comment">// html as string</span>
    styles, <span class="hljs-comment">// for css modules</span>
    <span class="hljs-title function_">nodes</span>(<span class="hljs-params"></span>) {...}
}</code>
            <strong>card.js</strong>
            </div>
        </div>
    </section>
    <section class="warn">
      <div class="mudra"></div>
      <h2>The right priorities</h2>
      <div class="desc">A fresh look at front-end dev.</div>
    </section>
    <section class="info l-fx">
      <div class="txt">
        <div class="icon">
        <svg version="1.1" fill="none" stroke="#101010" stroke-width="6" stroke-linecap="square" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space = "preserve">
          <polyline points="60,20 30,50 70,50 40,81.2 "/>
        </svg>
        </div>
        <h3>Reactive DOM</h3>
        <p>
        Lesta makes DOM properties reactive — data changes automatically update only the corresponding properties of nodes. This approach provides instant UI updates and full compatibility with browser API compatibility.
        </p>
      </div>
      <div class="line"></div>
      <div class="txt">
        <div class="icon">
          <svg version="1.1" fill="none"  stroke="#101010" stroke-width="6" stroke-linecap="square" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space = "preserve">
            <polyline class="st0" points="69.9,70.1 89.9,50.1 69.9,30.1 "/>
            <polyline class="st0" points="29.9,70.1 9.9,50.1 29.9,30.1 "/>
            <line class="st0" x1="59.9" y1="20.1" x2="39.9" y2="80.1"/>
          </svg>
        </div>
        <h3>HTML First</h3>
        <p>
        Lesta allows components to work with both existing HTML and internal templates. This makes it easy to integrate the framework into current projects and use SSR and client-side rendering with equal efficiency.
        </p>
      </div>
    </section>
    <section class="demo">
      <div class="top l-fx">
        <h3>Examples</h3>
        <div class="nav l-fx">
          <a data-index="0" class="active">Widget</a>
          <a data-index="1">Components</a>
          <a data-index="2">HTML First</a>
          <a data-index="3">Web Components</a>
          <a data-index="4">Large Lists</a>
          <a data-index="5">Composable</a>
        </div>
      </div>
      <iframe class="iframe" inert sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0"></iframe>
      <div class="bottom l-fx l-jc-sb">
        <p>Less framework syntax, more native JavaScript.</p>
        <a href="https://github.com/lestajs/exapmles/" target="_blank" class="more">More Examples</a>
      </div>
    </section>
    <section class="sponsors">
        <h3>Sponsors</h3>
        <p>If you use Lesta, your sponsorship will contribute to its active support.</p>
        <div class="sponsorLogos"></div>
        <div class="sponsorBtn"><a class="more" href="/about#become-sponsor" link>Become Sponsor</a></div>
    </section>`,
  proxies: {
    index: 0
  },
  setters: {
    index(v) {
      this.node.nav.target.children[this.proxy.index].classList.remove('active')
      return v
    }
  },
  handlers: {
    index(v) {
      this.node.nav.target.children[v].classList.add('active')
    }
  },
  nodes() {
    return {
      iframe: {
        src: () => demo[this.proxy.index],
        onload: () => {
          this.node.iframe.target.style.display = 'block'
          this.node.iframe.target.inert = false
        }
      },
      nav: {
        onclick: (event) => {
          const t = event.target.closest('a')
          if (!t) return
          this.proxy.index = +t.dataset.index
          this.node.iframe.target.inert = true
        }
      },
      sponsorLogos: {
        component: {
          src: titles
        }
      }
    }
  }
}