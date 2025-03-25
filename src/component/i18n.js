import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các file ngôn ngữ
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';
import translationZH from './locales/zh/translation.json';

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Khởi tạo i18n cho React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      vi: {
        translation: translationVI,
      },
      zh: {
        translation: translationZH,
      },
    },
    fallbackLng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;