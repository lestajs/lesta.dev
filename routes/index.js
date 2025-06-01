import i18n from '../plugins/i18n'

const ladder = () => import('../src/ladder')

export default [
  {
    path: '/*',
    name: '404',
    layout: 'base',
    component: () => import('../src/pages/404')
  }, {
    path: '/',
    name: 'home',
    layout: 'base',
    component: () => import('../src/pages/home')
  }, {
    path: '/:locale',
    params: {
      locale: {
        regex: /^[a-z]{2}$/,
        optional: true,
        enum: ['en', 'ru'],
      }
    },
    beforeEnter(to, from, plugins) {
      const locale = to.params.locale
      if (locale) {
        i18n.setUserLocal(locale)
      } else if (i18n.persisted() !== i18n.defaultLocal) {
        return { params: { locale: i18n.guess() }, replaced: true, query: true, hash: true }
      }
    },
    children: [
      {
        path: '/basic',
        name: 'basic',
        component: ladder,
        extra: {
          content: (lang) => `https://cdn.jsdelivr.net/gh/lestajs/translation@main/${lang}/basic.md`,
          edit: (lang) => `https://github.com/lestajs/translation/blob/main/${lang}/basic.md`
        }
      }, {
        path: '/store',
        name: 'store',
        component: ladder,
        extra: {
          content: (lang) => `https://cdn.jsdelivr.net/gh/lestajs/translation@main/${lang}/store.md`,
          edit: (lang) => `https://github.com/lestajs/translation/blob/main/${lang}/store.md`
        }
      }, {
        path: '/router',
        name: 'router',
        component: ladder,
        extra: {
          content: (lang) => `https://cdn.jsdelivr.net/gh/lestajs/translation@main/${lang}/router.md`,
          edit: (lang) => `https://github.com/lestajs/translation/blob/main/${lang}/router.md`
        }
      }, {
        path: '/utils',
        name: 'utils',
        component: ladder,
        extra: {
          content: (lang) => `https://cdn.jsdelivr.net/gh/lestajs/translation@main/${lang}/utils.md`,
          edit: (lang) => `https://github.com/lestajs/translation/blob/main/${lang}/utils.md`
        }
      }, {
        path: '/tutorial',
        name: 'tutorial',
        component: ladder,
        extra: {
          content: (lang) => `https://cdn.jsdelivr.net/gh/lestajs/translation@main/${lang}/tutorial.md`,
          edit: (lang) => `https://github.com/lestajs/translation/blob/main/${lang}/tutorial.md`
        }
    }
  ]}, {
    path: '/sponsors',
    name: 'sponsors',
    layout: 'base',
    component: () => import('../src/pages/sponsors'),
  }
]