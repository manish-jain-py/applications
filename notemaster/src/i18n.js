import VueI18n from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: '{0} world {2} {1}'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
