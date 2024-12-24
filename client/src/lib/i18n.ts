import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
const enTranslations = {
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    getStarted: "Get Started"
  },
  hero: {
    title: "Transform your business",
    subtitle: "with digital marketing",
    description: "Drive growth and achieve your business goals with our comprehensive digital marketing solutions. From strategy to execution, we're here to help you succeed.",
    cta: {
      primary: "Get Started",
      secondary: "View Portfolio"
    }
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive digital marketing solutions tailored to your needs",
    digitalMarketing: {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive results and ROI"
    },
    socialMedia: {
      title: "Social Media",
      description: "Engaging social media management to build your brand presence"
    },
    contentCreation: {
      title: "Content Creation",
      description: "Compelling content that tells your brand story"
    }
  }
};

// Spanish translations
const esTranslations = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    about: "Nosotros",
    contact: "Contacto",
    getStarted: "Empezar"
  },
  hero: {
    title: "Transforma tu negocio",
    subtitle: "con marketing digital",
    description: "Impulsa el crecimiento y alcanza tus objetivos empresariales con nuestras soluciones integrales de marketing digital. Desde la estrategia hasta la ejecución, estamos aquí para ayudarte a triunfar.",
    cta: {
      primary: "Empezar",
      secondary: "Ver Portafolio"
    }
  },
  services: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones integrales de marketing digital adaptadas a tus necesidades",
    digitalMarketing: {
      title: "Marketing Digital",
      description: "Campañas estratégicas de marketing digital que generan resultados y ROI"
    },
    socialMedia: {
      title: "Redes Sociales",
      description: "Gestión efectiva de redes sociales para construir tu presencia de marca"
    },
    contentCreation: {
      title: "Creación de Contenido",
      description: "Contenido atractivo que cuenta la historia de tu marca"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      cookieMinutes: 43200, // 30 days
      lookupFromPathIndex: 0
    }
  });

export default i18n;