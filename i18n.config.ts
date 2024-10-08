import enMessages from './locales/en.json'
import frMessages from './locales/fr.json'

export default defineI18nConfig(() => ({
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        fr: frMessages,
    }
}))
