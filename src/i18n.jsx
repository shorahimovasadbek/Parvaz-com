import i18 from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'


i18.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: (localStorage.getItem('language') ? localStorage.getItem('language'): 'En'),
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18