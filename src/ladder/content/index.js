import { marked } from 'marked'
import hljs from 'highlight.js'

marked.setOptions({
  mangle: false,
  silent: true,
})
const renderer = new marked.Renderer()

// renderer.table = function(header, body) {
//   return `
// <table class="table table-striped table-dark">
// <caption>Front-end web developer course 2021</caption>
// <thead class="111">${header}</thead>
// <tbody>${body}</tbody>
// </table>`
// }

renderer.heading  = function(text, level) {
  return `
    <h${ level } id="${ text.replace(' ', '-').toLowerCase() }">
      ${ text }
    </h${ level }>`;
}

marked.use({
  renderer,
  extensions: [
    {
      name: 'blockquote',
      renderer(v) {
        if (v.raw.startsWith('>!')) {
          const text = v.text.slice(2)
          return `
            <blockquote class="important">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>Let op</title><path fill-rule="evenodd" d="M24.5 33.002a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-3.06-4.44L20.5 6h8l-.94 22.563A1.5 1.5 0 0 1 26.061 30h-3.122a1.5 1.5 0 0 1-1.499-1.437"/></svg>
            ${marked.parse(text)}
            </blockquote>`
        } else {
          return `<blockquote class="note">${marked.parse(v.text, { renderer })}</blockquote>`
        }
      }
    },
    {
      name: 'code',
      renderer(v) {
        const meta = v.lang.split('|')
        const lang = meta.at(0)
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        const code = v.text
        const link = () => `<a href="${meta.at(1)}" target="_blank"></a>`
        return `<pre><code class="hljs-js">${hljs.highlight(code, {language}).value}</code>${meta.length > 1 ? link() : ''}</pre>`
      }
    }
  ],
  pedantic: false,
  gfm: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

const prefaces = {
  decor(startIndex, md) {
    const arr = md.substring(0, startIndex).split('\n').filter(line => line.trim())
    return `
        <div class="decor l-fx l-gap">
          <div class="decorContent">
            <strong>${arr.at(0).replace('## ', '')}</strong>
            <p>${arr.at(1)}</p>
          </div>
          <div class="decorImage">
             ${arr.at(2)}
          </div>
        </div>`
  }
}

async function fetchData(url) {
  const res = await fetch(url)
  return await res.text()
}

export default async (url, preface) => {
  let md = await fetchData(url)
  let prefix = ''
  const startIndex = md.indexOf(`<!--${preface}-->`)
  if (startIndex !== -1) {
    md = md.replace(`<!--${preface}-->`, '')
    prefix = prefaces[preface]?.(startIndex, md)
    md = md.substring(startIndex)
  }
  return prefix + marked.parse(md)
}