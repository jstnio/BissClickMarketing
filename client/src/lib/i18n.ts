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
    },
    imageAlt: "Marketing team meeting"
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive digital marketing solutions tailored to your needs",
    viewAll: "View All Services",
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
    },
    analytics: {
      title: "Analytics",
      description: "Data-driven insights to optimize your marketing strategy"
    },
    communityManagement: {
      title: "Community Management",
      description: "Building and nurturing your online community"
    },
    seo: {
      title: "SEO",
      description: "Improving your visibility in search results"
    }
  },
  portfolio: {
    title: "Featured Work",
    subtitle: "Recent projects that showcase our expertise",
    viewAll: "View Full Portfolio",
    items: {
      techStartup: {
        title: "Tech Startup Rebrand",
        description: "Complete digital transformation for a growing tech company",
        category: "Branding & Strategy"
      },
      ecommerce: {
        title: "E-commerce Growth",
        description: "Increased online sales by 200% through strategic marketing",
        category: "Digital Marketing"
      },
      socialMedia: {
        title: "Social Media Campaign",
        description: "Viral campaign reaching millions of engaged users",
        category: "Social Media"
      }
    }
  },
  about: {
    title: "About Us",
    description: "BissClick is a full-service digital marketing agency dedicated to helping businesses thrive in the digital age. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.",
    mission: {
      title: "Our Mission",
      description: "To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful connections with their audience."
    },
    vision: {
      title: "Our Vision",
      description: "To be the leading digital marketing partner for businesses seeking transformative growth through creative and results-driven marketing strategies."
    },
    team: {
      title: "Our Team",
      description: "Meet the passionate experts behind BissClick's success. Our diverse team brings together years of experience in digital marketing, design, and strategy.",
      members: {
        1: {
          name: "Sarah Johnson",
          role: "CEO & Founder",
          bio: "With over 15 years of marketing experience, Sarah leads our team with vision and expertise.",
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        },
        2: {
          name: "Michael Chen",
          role: "Digital Marketing Director",
          bio: "Michael specializes in creating data-driven marketing strategies that deliver results.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        3: {
          name: "Emma Wilson",
          role: "Creative Director",
          bio: "Emma brings brands to life through compelling visual storytelling and design.",
          image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
        },
        4: {
          name: "David Park",
          role: "Social Media Manager",
          bio: "David is an expert in building engaging social media communities and campaigns.",
          image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
        }
      }
    },
    values: {
      title: "Our Values",
      items: {
        1: {
          title: "Innovation",
          description: "We stay ahead of digital trends to deliver cutting-edge solutions."
        },
        2: {
          title: "Excellence",
          description: "We maintain the highest standards in everything we do."
        },
        3: {
          title: "Collaboration",
          description: "We work closely with our clients to achieve shared success."
        }
      }
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
    },
    imageAlt: "Reunión del equipo de marketing"
  },
  services: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones integrales de marketing digital adaptadas a tus necesidades",
    viewAll: "Ver Todos los Servicios",
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
    },
    analytics: {
      title: "Análisis",
      description: "Información basada en datos para optimizar tu estrategia de marketing"
    },
    communityManagement: {
      title: "Gestión de Comunidad",
      description: "Construyendo y nutriendo tu comunidad en línea"
    },
    seo: {
      title: "SEO",
      description: "Mejorando tu visibilidad en los resultados de búsqueda"
    }
  },
  portfolio: {
    title: "Trabajo Destacado",
    subtitle: "Proyectos recientes que muestran nuestra experiencia",
    viewAll: "Ver Portafolio Completo",
    items: {
      techStartup: {
        title: "Rediseño de Marca para Startup",
        description: "Transformación digital completa para una empresa tecnológica en crecimiento",
        category: "Marca y Estrategia"
      },
      ecommerce: {
        title: "Crecimiento de E-commerce",
        description: "Incremento del 200% en ventas online a través de marketing estratégico",
        category: "Marketing Digital"
      },
      socialMedia: {
        title: "Campaña en Redes Sociales",
        description: "Campaña viral alcanzando millones de usuarios comprometidos",
        category: "Redes Sociales"
      }
    }
  },
  about: {
    title: "Sobre Nosotros",
    description: "BissClick es una agencia de marketing digital integral dedicada a ayudar a las empresas a prosperar en la era digital. Nuestro equipo de expertos combina creatividad con estrategias basadas en datos para ofrecer resultados excepcionales.",
    mission: {
      title: "Nuestra Misión",
      description: "Empoderar a las empresas con soluciones innovadoras de marketing digital que impulsen el crecimiento, mejoren la visibilidad de la marca y creen conexiones significativas con su audiencia."
    },
    vision: {
      title: "Nuestra Visión",
      description: "Ser el socio líder en marketing digital para empresas que buscan un crecimiento transformador a través de estrategias creativas y orientadas a resultados."
    },
    team: {
      title: "Nuestro Equipo",
      description: "Conoce a los expertos apasionados detrás del éxito de BissClick. Nuestro diverso equipo reúne años de experiencia en marketing digital, diseño y estrategia.",
      members: {
        1: {
          name: "Sarah Johnson",
          role: "CEO y Fundadora",
          bio: "Con más de 15 años de experiencia en marketing, Sarah lidera nuestro equipo con visión y experiencia.",
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        },
        2: {
          name: "Michael Chen",
          role: "Director de Marketing Digital",
          bio: "Michael se especializa en crear estrategias de marketing basadas en datos que generan resultados.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        3: {
          name: "Emma Wilson",
          role: "Directora Creativa",
          bio: "Emma da vida a las marcas a través de una narración visual y diseño cautivador.",
          image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
        },
        4: {
          name: "David Park",
          role: "Gerente de Redes Sociales",
          bio: "David es un experto en construir y gestionar comunidades en redes sociales.",
          image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
        }
      }
    },
    values: {
      title: "Nuestros Valores",
      items: {
        1: {
          title: "Innovación",
          description: "Nos mantenemos a la vanguardia de las tendencias digitales para ofrecer soluciones innovadoras."
        },
        2: {
          title: "Excelencia",
          description: "Mantenemos los más altos estándares en todo lo que hacemos."
        },
        3: {
          title: "Colaboración",
          description: "Trabajamos estrechamente con nuestros clientes para lograr el éxito compartido."
        }
      }
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