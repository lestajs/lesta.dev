```html
<!--Lesta will find nodes by class-->

<article class="card">
  <h3 class="title"></h3>
  <p class="description"></p>
</article>
```

```css
.card {
  border: 2px solid;
  padding: 10px;
  .title {
    font-size: 18px;
  }
}
```

```js
import template from './card.html'
import styles from './card.module.css'
export default {
	template, // html as string
	styles, // for css modules
	nodes() {...}
}
```

