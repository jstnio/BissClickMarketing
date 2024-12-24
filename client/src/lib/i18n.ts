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
  },
  contact: {
    title: "Contact Us",
    description: "Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help your business grow.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      company: "Company (Optional)",
      companyPlaceholder: "Your company",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      sending: "Sending..."
    },
    success: {
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    },
    error: {
      title: "Error",
      description: "Failed to send message. Please try again."
    },
    info: {
      getInTouch: {
        title: "Get in Touch",
        description: "Whether you have a question about our services, pricing, or just want to say hello, we'd love to hear from you."
      },
      location: {
        title: "Office Location",
        address: "123 Marketing Street\nDigital City, DC 12345\nUnited States"
      },
      contact: {
        title: "Contact Information",
        email: "Email: hello@bissclick.com",
        phone: "Phone: (555) 123-4567"
      }
    }
  },
  chat: {
    title: "Chat with Our Marketing Expert",
    description: "Get instant answers to your marketing questions and learn how we can help your business grow.",
    welcome: "Hello! I'm your BissClick marketing assistant. How can I help you today?",
    inputPlaceholder: "Type your message here...",
    error: {
      title: "Error",
      description: "Failed to send message. Please try again."
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
  },
  contact: {
    title: "Contáctanos",
    description: "¿Listo para transformar tu presencia digital? Ponte en contacto con nosotros hoy y hablemos sobre cómo podemos ayudar a crecer tu negocio.",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      company: "Empresa (Opcional)",
      companyPlaceholder: "Tu empresa",
      message: "Mensaje",
      messagePlaceholder: "¿Cómo podemos ayudarte?",
      submit: "Enviar Mensaje",
      sending: "Enviando..."
    },
    success: {
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible."
    },
    error: {
      title: "Error",
      description: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
    },
    info: {
      getInTouch: {
        title: "Ponte en Contacto",
        description: "Si tienes alguna pregunta sobre nuestros servicios, precios o simplemente quieres saludar, nos encantaría saber de ti."
      },
      location: {
        title: "Ubicación de la Oficina",
        address: "123 Marketing Street\nDigital City, DC 12345\nEstados Unidos"
      },
      contact: {
        title: "Información de Contacto",
        email: "Correo: hello@bissclick.com",
        phone: "Teléfono: (555) 123-4567"
      }
    }
  },
  chat: {
    title: "Chatea con Nuestro Experto en Marketing",
    description: "Obtén respuestas instantáneas a tus preguntas de marketing y descubre cómo podemos ayudar a tu negocio a crecer.",
    welcome: "¡Hola! Soy tu asistente de marketing de BissClick. ¿Cómo puedo ayudarte hoy?",
    inputPlaceholder: "Escribe tu mensaje aquí...",
    error: {
      title: "Error",
      description: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
    }
  }
};

// French translations
const frTranslations = {
  nav: {
    home: "Accueil",
    services: "Services",
    portfolio: "Portfolio",
    about: "À Propos",
    contact: "Contact",
    getStarted: "Commencer"
  },
  hero: {
    title: "Transformez votre entreprise",
    subtitle: "avec le marketing digital",
    description: "Stimulez la croissance et atteignez vos objectifs commerciaux grâce à nos solutions de marketing digital complètes. De la stratégie à l'exécution, nous sommes là pour vous aider à réussir.",
    cta: {
      primary: "Commencer",
      secondary: "Voir le Portfolio"
    },
    imageAlt: "Réunion de l'équipe marketing"
  },
  services: {
    title: "Nos Services",
    subtitle: "Solutions de marketing digital complètes adaptées à vos besoins",
    viewAll: "Voir Tous les Services",
    digitalMarketing: {
      title: "Marketing Digital",
      description: "Campagnes de marketing digital stratégiques qui génèrent des résultats"
    },
    socialMedia: {
      title: "Médias Sociaux",
      description: "Gestion engageante des médias sociaux pour construire votre présence"
    },
    contentCreation: {
      title: "Création de Contenu",
      description: "Contenu captivant qui raconte l'histoire de votre marque"
    },
    analytics: {
      title: "Analytique",
      description: "Insights basés sur les données pour optimiser votre stratégie"
    },
    communityManagement: {
      title: "Gestion de Communauté",
      description: "Construction et entretien de votre communauté en ligne"
    },
    seo: {
      title: "SEO",
      description: "Amélioration de votre visibilité dans les résultats de recherche"
    }
  },
  portfolio: {
    title: "Travaux Récents",
    subtitle: "Projets récents qui démontrent notre expertise",
    viewAll: "Voir le Portfolio Complet",
    items: {
      techStartup: {
        title: "Refonte Startup Tech",
        description: "Transformation digitale complète pour une entreprise tech en croissance",
        category: "Marque & Stratégie"
      },
      ecommerce: {
        title: "Croissance E-commerce",
        description: "Augmentation des ventes en ligne de 200% grâce au marketing stratégique",
        category: "Marketing Digital"
      },
      socialMedia: {
        title: "Campagne Médias Sociaux",
        description: "Campagne virale touchant des millions d'utilisateurs engagés",
        category: "Médias Sociaux"
      }
    }
  },
  about: {
    title: "À Propos de Nous",
    description: "BissClick est une agence de marketing digital complète dédiée à aider les entreprises à prospérer à l'ère numérique. Notre équipe d'experts combine créativité et stratégies basées sur les données pour offrir des résultats exceptionnels.",
    mission: {
      title: "Notre Mission",
      description: "Permettre aux entreprises d'utiliser des solutions de marketing digital innovantes qui stimulent la croissance, améliorent la visibilité de la marque et créent des connexions significatives avec leur audience."
    },
    vision: {
      title: "Notre Vision",
      description: "Être le partenaire de marketing digital de référence pour les entreprises recherchant une croissance transformative grâce à des stratégies créatives et axées sur les résultats."
    },
    team: {
      title: "Notre Équipe",
      description: "Rencontrez les experts passionnés derrière le succès de BissClick. Notre équipe diversifiée rassemble des années d'expérience en marketing digital, design et stratégie.",
      members: {
        1: {
          name: "Sarah Johnson",
          role: "PDG et Fondatrice",
          bio: "Avec plus de 15 ans d'expérience en marketing, Sarah dirige notre équipe avec vision et expertise.",
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        },
        2: {
          name: "Michael Chen",
          role: "Directeur Marketing Digital",
          bio: "Michael est spécialisé dans la création de stratégies marketing basées sur les données qui génèrent des résultats.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        3: {
          name: "Emma Wilson",
          role: "Directrice Créative",
          bio: "Emma donne vie aux marques grâce à une narration visuelle et un design captivant.",
          image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
        },
        4: {
          name: "David Park",
          role: "Responsable Médias Sociaux",
          bio: "David est un expert dans la construction de communautés sur les réseaux sociaux.",
          image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
        }
      }
    },
    values: {
      title: "Nos Valeurs",
      items: {
        1: {
          title: "Innovation",
          description: "Nous restons à la pointe des tendances digitales pour offrir des solutions innovantes."
        },
        2: {
          title: "Excellence",
          description: "Nous maintenons les plus hauts standards dans tout ce que nous faisons."
        },
        3: {
          title: "Collaboration",
          description: "Nous travaillons étroitement avec nos clients pour atteindre le succès ensemble."
        }
      }
    }
  },
  contact: {
    title: "Contactez-nous",
    description: "Prêt à transformer votre présence numérique ? Contactez-nous aujourd'hui et discutons de la façon dont nous pouvons aider votre entreprise à se développer.",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      company: "Entreprise (Optionnel)",
      companyPlaceholder: "Votre entreprise",
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le Message",
      sending: "Envoi en cours..."
    },
    success: {
      title: "Message envoyé !",
      description: "Nous vous répondrons dès que possible."
    },
    error: {
      title: "Erreur",
      description: "Échec de l'envoi du message. Veuillez réessayer."
    },
    info: {
      getInTouch: {
        title: "Prenez Contact",
        description: "Que vous ayez une question sur nos services, nos tarifs ou que vous souhaitiez simplement dire bonjour, nous serions ravis de vous entendre."
      },
      location: {
        title: "Adresse du Bureau",
        address: "123 Marketing Street\nDigital City, DC 12345\nÉtats-Unis"
      },
      contact: {
        title: "Informations de Contact",
        email: "Email : hello@bissclick.com",
        phone: "Téléphone : (555) 123-4567"
      }
    }
  },
  chat: {
    title: "Discutez avec Notre Expert Marketing",
    description: "Obtenez des réponses instantanées à vos questions marketing et découvrez comment nous pouvons aider votre entreprise à se développer.",
    welcome: "Bonjour ! Je suis votre assistant marketing BissClick. Comment puis-je vous aider aujourd'hui ?",
    inputPlaceholder: "Tapez votre message ici...",
    error: {
      title: "Erreur",
      description: "Échec de l'envoi du message. Veuillez réessayer."
    }
  }
};

// Italian translations
const itTranslations = {
  nav: {
    home: "Home",
    services: "Servizi",
    portfolio: "Portfolio",
    about: "Chi Siamo",
    contact: "Contatti",
    getStarted: "Inizia Ora"
  },
  hero: {
    title: "Trasforma la tua azienda",
    subtitle: "con il marketing digitale",
    description: "Guida la crescita e raggiungi i tuoi obiettivi aziendali con le nostre soluzioni complete di marketing digitale. Dalla strategia all'esecuzione, siamo qui per aiutarti a raggiungere il successo.",
    cta: {
      primary: "Inizia Ora",
      secondary: "Vedi Portfolio"
    },
    imageAlt: "Riunione del team marketing"
  },
  services: {
    title: "I Nostri Servizi",
    subtitle: "Soluzioni di marketing digitale complete su misura per le tue esigenze",
    viewAll: "Vedi Tutti i Servizi",
    digitalMarketing: {
      title: "Marketing Digitale",
      description: "Campagne strategiche di marketing digitale che generano risultati"
    },
    socialMedia: {
      title: "Social Media",
      description: "Gestione coinvolgente dei social media per costruire la tua presenza"
    },
    contentCreation: {
      title: "Creazione Contenuti",
      description: "Contenuti coinvolgenti che raccontano la storia del tuo brand"
    },
    analytics: {
      title: "Analisi",
      description: "Approfondimenti basati sui dati per ottimizzare la tua strategia"
    },
    communityManagement: {
      title: "Gestione Community",
      description: "Costruzione e cura della tua community online"
    },
    seo: {
      title: "SEO",
      description: "Miglioramento della visibilità nei risultati di ricerca"
    }
  },
  portfolio: {
    title: "Lavori in Evidenza",
    subtitle: "Progetti recenti che mostrano la nostra esperienza",
    viewAll: "Vedi Portfolio Completo",
    items: {
      techStartup: {
        title: "Rebranding Startup Tech",
        description: "Trasformazione digitale completa per un'azienda tech in crescita",
        category: "Brand & Strategia"
      },
      ecommerce: {
        title: "Crescita E-commerce",
        description: "Aumento del 200% delle vendite online attraverso il marketing strategico",
        category: "Marketing Digitale"
      },
      socialMedia: {
        title: "Campagna Social Media",
        description: "Campagna virale che raggiunge milioni di utenti coinvolti",
        category: "Social Media"
      }
    }
  },
  about: {
    title: "Chi Siamo",
    description: "BissClick è un'agenzia di marketing digitale completa dedicata ad aiutare le aziende a prosperare nell'era digitale. Il nostro team di esperti combina creatività e strategie basate sui dati per offrire risultati eccezionali.",
    mission: {
      title: "La Nostra Missione",
      description: "Potenziare le aziende con soluzioni innovative di marketing digitale che guidano la crescita, migliorano la visibilità del brand e creano connessioni significative con il loro pubblico."
    },
    vision: {
      title: "La Nostra Visione",
      description: "Essere il partner di marketing digitale leader per le aziende che cercano una crescita trasformativa attraverso strategie creative e orientate ai risultati."
    },
    team: {
      title: "Il Nostro Team",
      description: "Incontra gli esperti appassionati dietro il successo di BissClick. Il nostro team diversificato riunisce anni di esperienza in marketing digitale, design e strategia.",
      members: {
        1: {
          name: "Sarah Johnson",
          role: "CEO e Fondatrice",
          bio: "Con oltre 15 anni di esperienza nel marketing, Sarah guida il nostro team con visione ed esperienza.",
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        },
        2: {
          name: "Michael Chen",
          role: "Direttore Marketing Digitale",
          bio: "Michael è specializzato nella creazione di strategie di marketing basate sui dati che generano risultati.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        3: {
          name: "Emma Wilson",
          role: "Direttrice Creativa",
          bio: "Emma dà vita ai brand attraverso lo storytelling visivo e il design.",
          image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
        },
        4: {
          name: "David Park",
          role: "Manager Social Media",
          bio: "David è un esperto nella costruzione di community sui social media.",
          image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
        }
      }
    },
    values: {
      title: "I Nostri Valori",
      items: {
        1: {
          title: "Innovazione",
          description: "Restiamo al passo con le tendenze digitali per offrire soluzioni all'avanguardia."
        },
        2: {
          title: "Eccellenza",
          description: "Manteniamo i più alti standard in tutto ciò che facciamo."
        },
        3: {
          title: "Collaborazione",
          description: "Lavoriamo a stretto contatto con i nostri clienti per raggiungere il successo condiviso."
        }
      }
    }
  },
  contact: {
    title: "Contattaci",
    description: "Pronto a trasformare la tua presenza digitale? Contattaci oggi e discutiamo di come possiamo aiutare la tua azienda a crescere.",
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "tua@email.com",
      company: "Azienda (Opzionale)",
      companyPlaceholder: "La tua azienda",
      message: "Messaggio",
      messagePlaceholder: "Come possiamo aiutarti?",
      submit: "Invia Messaggio",
      sending: "Invio in corso..."
    },
    success: {
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile."
    },
    error: {
      title: "Errore",
      description: "Invio del messaggio fallito. Per favore riprova."
    },
    info: {
      getInTouch: {
        title: "Mettiti in Contatto",
        description: "Che tu abbia una domanda sui nostri servizi, sui prezzi o voglia semplicemente salutare, ci farebbe piacere sentirti."
      },
      location: {
        title: "Sede dell'Ufficio",
        address: "123 Marketing Street\nDigital City, DC 12345\nStati Uniti"
      },
      contact: {
        title: "Informazioni di Contatto",
        email: "Email: hello@bissclick.com",
        phone: "Telefono: (555) 123-4567"
      }
    }
  },
  chat: {
    title: "Chatta con il Nostro Esperto di Marketing",
    description: "Ottieni risposte immediate alle tue domande di marketing e scopri come possiamo aiutare la tua azienda a crescere.",
    welcome: "Ciao! Sono il tuo assistente marketing BissClick. Come posso aiutarti oggi?",
    inputPlaceholder: "Scrivi il tuo messaggio qui...",
    error: {
      title: "Errore",
      description: "Impossibile inviare il messaggio. Per favore riprova."
    }
  }
};

// Portuguese translations
const ptTranslations = {
  nav: {
    home: "Início",
    services: "Serviços",
    portfolio: "Portfólio",
    about: "Sobre",
    contact: "Contato",
    getStarted: "Começar"
  },
  hero: {
    title: "Transforme seu negócio",
    subtitle: "com marketing digital",
    description: "Impulsione o crescimento e alcance seus objetivos empresariais com nossas soluções abrangentes de marketing digital. Da estratégia à execução, estamos aqui para ajudar você a ter sucesso.",
    cta: {
      primary: "Começar",
      secondary: "Ver Portfólio"
    },
    imageAlt: "Reunião da equipe de marketing"
  },
  services: {
    title: "Nossos Serviços",
    subtitle: "Soluções abrangentes de marketing digital adaptadas às suas necessidades",
    viewAll: "Ver Todos os Serviços",
    digitalMarketing: {
      title: "Marketing Digital",
      description: "Campanhas estratégicas de marketing digital que geram resultados"
    },
    socialMedia: {
      title: "Mídias Sociais",
      description: "Gestão envolvente de mídias sociais para construir sua presença"
    },
    contentCreation: {
      title: "Criação de Conteúdo",
      description: "Conteúdo envolvente que conta a história da sua marca"
    },
    analytics: {
      title: "Análise",
      description: "Insights baseados em dados para otimizar sua estratégia"
    },
    communityManagement: {
      title: "Gestão de Comunidade",
      description: "Construção e nutrição da sua comunidade online"
    },
    seo: {
      title: "SEO",
      description: "Melhorando sua visibilidade nos resultados de busca"
    }
  },
  portfolio: {
    title: "Trabalhos em Destaque",
    subtitle: "Projetos recentes que demonstram nossa experiência",
    viewAll: "Ver Portfólio Completo",
    items: {
      techStartup: {
        title: "Rebranding de Startup",
        description: "Transformação digital completa para uma empresa de tecnologia em crescimento",
        category: "Marca & Estratégia"
      },
      ecommerce: {
        title: "Crescimento E-commerce",
        description: "Aumento de 200% nas vendas online através de marketing estratégico",
        category: "Marketing Digital"
      },
      socialMedia: {
        title: "Campanha de Mídias Sociais",
        description: "Campanha viral alcançando milhões de usuários engajados",
        category: "Mídias Sociais"
      }
    }
  },
  about: {
    title: "Sobre Nós",
    description: "BissClick é uma agência de marketing digital completa dedicada a ajudar empresas a prosperar na era digital. Nossa equipe de especialistas combina criatividade com estratégias baseadas em dados para entregar resultados excepcionais.",
    mission: {
      title: "Nossa Missão",
      description: "Capacitar empresas com soluções inovadoras de marketing digital que impulsionam o crescimento, melhoram a visibilidade da marca e criam conexões significativas com seu público."
    },
    vision: {
      title: "Nossa Visão",
      description: "Ser o principal parceiro de marketing digital para empresas que buscam crescimento transformador através de estratégias criativas e orientadas por resultados."
    },
    team: {
      title: "Nossa Equipe",
      description: "Conheça os especialistas apaixonados por trás do sucesso da BissClick. Nossa equipe diversificada reúne anos de experiência em marketing digital, design e estratégia.",
      members: {
        1: {
          name: "Sarah Johnson",
          role: "CEO e Fundadora",
          bio: "Com mais de 15 anos de experiência em marketing, Sarah lidera nossa equipe com visão e expertise.",
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        },
        2: {
          name: "Michael Chen",
          role: "Diretor de Marketing Digital",
          bio: "Michael é especializado em criar estratégias de marketing baseadas em dados que geram resultados.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        3: {
          name: "Emma Wilson",
          role: "Diretora Criativa",
          bio: "Emma dá vida às marcas através de narrativas visuais e design cativante.",
          image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
        },
        4: {
          name: "David Park",
          role: "Gerente de Mídias Sociais",
          bio: "David é especialista em construir comunidades em mídias sociais.",
          image: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
        }
      }
    },
    values: {
      title: "Nossos Valores",
      items: {
        1: {
          title: "Inovação",
          description: "Mantemos-nos à frente das tendências digitais para oferecer soluções inovadoras."
        },
        2: {
          title: "Excelência",
          description: "Mantemos os mais altos padrões em tudo o que fazemos."
        },
        3: {
          title: "Colaboração",
          description: "Trabalhamos em estreita colaboração com nossos clientes para alcançar o sucesso compartilhado."
        }
      }
    }
  },
  contact: {
    title: "Contate-nos",
    description: "Pronto para transformar sua presença digital? Entre em contato conosco hoje e vamos discutir como podemos ajudar seu negócio a crescer.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu@email.com",
      company: "Empresa (Opcional)",
      companyPlaceholder: "Sua empresa",
      message: "Mensagem",
      messagePlaceholder: "Como podemos ajudar você?",
      submit: "Enviar Mensagem",
      sending: "Enviando..."
    },
    success: {
      title: "Mensagem enviada!",
      description: "Retornaremos o mais breve possível."
    },
    error: {
      title: "Erro",
      description: "Falha ao enviar mensagem. Por favor, tente novamente."
    },
    info: {
      getInTouch: {
        title: "Entre em Contato",
        description: "Se você tem uma pergunta sobre nossos serviços, preços ou apenas quer dizer olá, adoraríamos ouvir você."
      },
      location: {
        title: "Localização do Escritório",
        address: "123 Marketing Street\nDigital City, DC 12345\nEstados Unidos"
      },
      contact: {
        title: "Informações de Contato",
        email: "Email: hello@bissclick.com",
        phone: "Telefone: (555) 123-4567"
      }
    }
  },
  chat: {
    title: "Converse com Nosso Especialista em Marketing",
    description: "Obtenha respostas instantâneas para suas perguntas de marketing e descubra como podemos ajudar seu negócio a crescer.",
    welcome: "Olá! Sou seu assistente de marketing BissClick. Como posso ajudar você hoje?",
    inputPlaceholder: "Digite sua mensagem aqui...",
    error: {
      title: "Erro",
      description: "Falha ao enviar mensagem. Por favor, tente novamente."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      it: { translation: itTranslations },
      pt: { translation: ptTranslations }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;