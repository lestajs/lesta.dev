export default {
  defaultLocal: 'en',
  locales: ['ru', 'en'],
  userLocal() {
    const locale = (window.navigator.language).substr(0, 2).toLowerCase()
    return this.supported(locale) ? locale : null
  },
  supported(locale) {
    return this.locales.includes(locale)
  },
  persisted() {
    const locale = localStorage.getItem('locale')
    return this.supported(locale) ? locale : null
  },
  guess() {
    return this.persisted() || this.userLocal() || this.defaultLocal
  },
  setUserLocal(locale) {
    this.supported(locale) && localStorage.setItem('locale', locale)
  }
}
