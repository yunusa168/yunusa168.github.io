"use strict";

(function (global) {
  var STORAGE_KEY = "portfolio-lang";
  var SUPPORTED = ["fr", "en"];

  var FR = {
    "meta.title": "YUNUSA Rassouloul Haki Adegoke — Développeur Full Stack",
    "meta.description": "Portfolio de YUNUSA Rassouloul Haki Adegoke, étudiant en Master 2 MIAGE à l'Université Nangui Abrogoua. Développement Full Stack, applications, data et intelligence artificielle.",
    "meta.ogTitle": "YUNUSA Rassouloul Haki Adegoke — Développeur Full Stack",
    "meta.ogDescription": "Portfolio professionnel : parcours MIAGE, compétences, projets informatiques et opportunités.",

    "skip.link": "Aller au contenu principal",
    "brand": "YR",
    "brand.aria": "YR — YUNUSA Rassouloul Haki Adegoke, retour à l'accueil",
    "nav.aria": "Navigation principale",
    "nav.toggleOpen": "Ouvrir le menu de navigation",
    "nav.toggleClose": "Fermer le menu de navigation",
    "nav.accueil": "Accueil",
    "nav.apropos": "À propos",
    "nav.formation": "Formation",
    "nav.competences": "Compétences",
    "nav.projets": "Projets",
    "nav.experiences": "Expériences",
    "nav.commercial": "Commercial",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "lang.group": "Choisir la langue",

    "hero.eyebrow": "Étudiant en Master 2 MIAGE — Université Nangui Abrogoua, Abidjan, Côte d'Ivoire",
    "hero.name": "YUNUSA Rassouloul Haki Adegoke",
    "hero.role": "Développement Full Stack · Applications · Data · Intelligence artificielle",
    "hero.availability": "Disponibilité à discuter.",
    "hero.ctaProjects": "Voir mes projets",
    "hero.ctaCv": "Voir mes CV",
    "hero.portrait": "Portrait professionnel",
    "hero.portraitAlt": "Photographie professionnelle de YUNUSA Rassouloul Haki Adegoke",

    "about.title": "À propos",
    "about.text": "Étudiant en Master 2 MIAGE à l'Université Nangui Abrogoua, je développe des applications web et de bureau en accordant de l'importance à la clarté du code, à la fiabilité des données et à l'expérience utilisateur. Mon parcours couvre le développement Full Stack, la gestion de données et l'intelligence artificielle appliquée. Disponibilité à discuter.",

    "education.title": "Formation",
    "education.ongoing": "En cours",
    "education.obtained.f": "Obtenue",
    "education.obtained.m": "Obtenu",
    "education.master": "Master 2 MIAGE",
    "education.masterFull": "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    "education.m1": "Master 1 MIAGE",
    "education.m1Full": "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    "education.licence": "Licence en informatique",
    "education.bac": "Baccalauréat série D",
    "education.placeUNA": "Université Nangui Abrogoua",
    "education.placeLycee": "Lycée Moderne Belle-Ville de Bouaké",

    "training.title": "Formations complémentaires",
    "training.intro": "Deux formations courtes suivies au sein d'Orange Digital Center — FabLab Solidaire.",
    "training.badge": "Formation suivie",
    "training.t1": "Python & Raspberry Pi : Les Fondamentaux",
    "training.t1.date": "9 au 11 novembre 2026",
    "training.t1.text": "Introduction à Raspberry Pi, aux broches GPIO et à la programmation de LED ; renforcement des bases de Python.",
    "training.t2": "OpenLab – Fabrication numérique",
    "training.t2.date": "novembre 2026",
    "training.t2.text": "Initiation à Inkscape pour le design vectoriel et à RDWorks pour la préparation de la découpe et de la gravure laser.",

    "skills.title": "Compétences",
    "skills.legendAria": "Légende des niveaux",
    "skills.level.pratique": "Pratique en projet",
    "skills.legend.pratique": "— technologie utilisée dans un projet académique, avec une première capacité à en expliquer la mise en œuvre.",
    "skills.level.apprentissage": "En apprentissage",
    "skills.legend.apprentissage": "— montée en compétence en cours, sans prétendre à la maîtrise.",
    "skills.level.notions": "Notions",
    "skills.legend.notions": "— première découverte, en cours d'exploration.",
    "skills.level.initiation": "Initiation",
    "skills.legend.initiation": "— Première découverte d'un outil ou d'une technologie et de ses principales fonctionnalités.",
    "skills.level.pratiqueSimple": "Pratique",
    "skills.legend.pratiqueSimple": "— Capacité à utiliser concrètement un outil ou une technologie dans des tâches ou exercices.",
    "skills.group.web": "Développement web",
    "skills.group.backend": "Développement et backend",
    "skills.group.db": "Bases de données",
    "skills.group.desktop": "Applications de bureau",
    "skills.group.ai": "Intelligence artificielle",
    "skills.group.tools": "Outils et environnement",
    "skills.group.fabrication": "Fabrication numérique",

    "projects.title": "Projets informatiques",
    "projects.aioaBadge": "Dépôt public",
    "projects.aioaTitle": "AIOA",
    "projects.aioaText": "Application intelligente d'orientation académique. Projet académique développé avec Python, Django, MySQL, HTML/CSS, Bootstrap et JavaScript. Fonctionnalités vérifiées : profil BAC guidé en 6 étapes, saisie des notes et calcul pondéré, recommandations de filières et de concours avec scores détaillés, fiches PDF téléchargeables. L'intégration de l'API Mistral est présente dans le code mais son analyse d'images n'a pas pu être vérifiée faute de clé API. Dépôt source public ; démo en ligne non confirmée.",
    "projects.aioaLink": "Voir le dépôt GitHub",
    "projects.docsBadge": "Documentation en cours",
    "projects.p2Title": "Application de gestion des étudiants",
    "projects.p2Text": "Projet académique de gestion des étudiants. Fonctionnalités en cours de documentation.",
    "projects.p3Title": "Application de gestion des factures",
    "projects.p3Text": "Application de gestion des factures développée avec JavaFX. Détails en cours de documentation.",
    "projects.p4Title": "Application de gestion des locations d'appartements",
    "projects.p4Text": "Application de gestion des locations d'appartements développée avec JavaFX. Détails en cours de documentation.",

    "experience.title": "Expériences professionnelles",
    "experience.title1": "Stage en maintenance informatique",
    "experience.meta1": "Stage de qualification — Riviera 2, Abidjan | Février – juin 2025",
    "experience.t1": "Installation du système d'exploitation Windows.",
    "experience.t2": "Diagnostic informatique.",
    "experience.t3": "Installation de Microsoft Office : Word, Excel, PowerPoint et autres logiciels bureautiques.",
    "experience.t4": "Assistance informatique de base.",

    "business.title": "Activités commerciales",
    "business.title1": "Vente d'articles divers",
    "business.intro": "Commercialisation d'articles de puériculture, de trousseaux pour bébé, de matelas, de fournitures scolaires et d'articles pour la maison.",
    "business.t1": "Accueil, information et conseil des clients.",
    "business.t2": "Présentation des produits.",
    "business.t3": "Négociation.",
    "business.t4": "Suivi des ventes.",
    "business.skillsTitle": "Compétences développées",
    "business.s1": "Communication",
    "business.s2": "Relation client",
    "business.s3": "Négociation",
    "business.s4": "Sens des responsabilités",

    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Téléphone",
    "contact.locationLabel": "Localisation",
    "contact.locationValue": "Abidjan, Côte d'Ivoire",
    "contact.availability": "Disponibilité à discuter.",

    "cv.title": "Télécharger les CV",
    "cv.note": "Deux versions PDF : française et anglaise.",
    "cv.buttonFr": "Télécharger le CV en français",
    "cv.buttonEn": "Télécharger le CV en anglais",

    "footer.top": "Retour en haut ↑"
  };

  var EN = {
    "meta.title": "YUNUSA Rassouloul Haki Adegoke — Full Stack Developer",
    "meta.description": "Portfolio of YUNUSA Rassouloul Haki Adegoke, Master's Year 2 MIAGE student at Nangui Abrogoua University. Full Stack development, applications, data and artificial intelligence.",
    "meta.ogTitle": "YUNUSA Rassouloul Haki Adegoke — Full Stack Developer",
    "meta.ogDescription": "Professional portfolio: MIAGE background, skills, IT projects and opportunities.",

    "skip.link": "Skip to main content",
    "brand": "YR",
    "brand.aria": "YR — YUNUSA Rassouloul Haki Adegoke, back to home",
    "nav.aria": "Main navigation",
    "nav.toggleOpen": "Open navigation menu",
    "nav.toggleClose": "Close navigation menu",
    "nav.accueil": "Home",
    "nav.apropos": "About",
    "nav.formation": "Education",
    "nav.competences": "Skills",
    "nav.projets": "Projects",
    "nav.experiences": "Experience",
    "nav.commercial": "Business",
    "nav.contact": "Contact",
    "nav.cv": "Resumes",
    "lang.group": "Select language",

    "hero.eyebrow": "Master's Year 2 MIAGE student — Nangui Abrogoua University, Abidjan, Côte d'Ivoire",
    "hero.name": "YUNUSA Rassouloul Haki Adegoke",
    "hero.role": "Full Stack Development · Applications · Data · Artificial Intelligence",
    "hero.availability": "Availability open to discussion.",
    "hero.ctaProjects": "View my projects",
    "hero.ctaCv": "View my resumes",
    "hero.portrait": "Professional portrait",
    "hero.portraitAlt": "Professional photograph of YUNUSA Rassouloul Haki Adegoke",

    "about.title": "About",
    "about.text": "Master's Year 2 MIAGE student at Nangui Abrogoua University, I develop web and desktop applications with a focus on code clarity, data reliability and user experience. My background covers Full Stack development, data management and applied artificial intelligence. Availability open to discussion.",

    "education.title": "Education",
    "education.ongoing": "In progress",
    "education.obtained.f": "Obtained",
    "education.obtained.m": "Obtained",
    "education.master": "Master's Year 2 MIAGE",
    "education.masterFull": "Computer Methods Applied to Business Management",
    "education.m1": "Master's Year 1 MIAGE",
    "education.m1Full": "Computer Methods Applied to Business Management",
    "education.licence": "Bachelor's Degree in Computer Science",
    "education.bac": "Scientific Baccalaureate — Series D",
    "education.placeUNA": "Nangui Abrogoua University",
    "education.placeLycee": "Lycée Moderne Belle-Ville de Bouaké",

    "training.title": "Additional training",
    "training.intro": "Two short training sessions attended at Orange Digital Center — FabLab Solidaire.",
    "training.badge": "Training attended",
    "training.t1": "Python & Raspberry Pi: Fundamentals",
    "training.t1.date": "9–11 November 2026",
    "training.t1.text": "Introduction to Raspberry Pi, GPIO pins and LED programming; strengthening of Python fundamentals.",
    "training.t2": "OpenLab – Digital Fabrication",
    "training.t2.date": "November 2026",
    "training.t2.text": "Introduction to Inkscape for vector design and to RDWorks for preparing laser cutting and engraving.",

    "skills.title": "Skills",
    "skills.legendAria": "Levels legend",
    "skills.level.pratique": "Used in projects",
    "skills.legend.pratique": "— technology used in an academic project, with an initial ability to explain how it was implemented.",
    "skills.level.apprentissage": "Currently learning",
    "skills.legend.apprentissage": "— ongoing skill development, without claiming mastery.",
    "skills.level.notions": "Basic familiarity",
    "skills.legend.notions": "— first discovery, still being explored.",
    "skills.level.initiation": "Introductory",
    "skills.legend.initiation": "— First discovery of a tool or technology and its main features.",
    "skills.level.pratiqueSimple": "Practical use",
    "skills.legend.pratiqueSimple": "— Ability to use a tool or technology concretely in tasks or exercises.",
    "skills.group.web": "Web development",
    "skills.group.backend": "Development and backend",
    "skills.group.db": "Databases",
    "skills.group.desktop": "Desktop applications",
    "skills.group.ai": "Artificial intelligence",
    "skills.group.tools": "Tools and environment",
    "skills.group.fabrication": "Digital fabrication",

    "projects.title": "IT projects",
    "projects.aioaBadge": "Public repository",
    "projects.aioaTitle": "AIOA",
    "projects.aioaText": "Intelligent academic orientation application. Academic project developed with Python, Django, MySQL, HTML/CSS, Bootstrap and JavaScript. Verified features: guided BAC profile in 6 steps, grade entry and weighted calculation, recommendations for fields of study and competitive exams with detailed scores, downloadable PDF reports. Mistral API integration is present in the code, but its image analysis could not be verified without an API key. Public source repository; online demo not confirmed.",
    "projects.aioaLink": "View GitHub repository",
    "projects.docsBadge": "Documentation in progress",
    "projects.p2Title": "Student management application",
    "projects.p2Text": "Academic student management project. Features currently being documented.",
    "projects.p3Title": "Invoice management application",
    "projects.p3Text": "Invoice management application developed with JavaFX. Details currently being documented.",
    "projects.p4Title": "Apartment rental management application",
    "projects.p4Text": "Apartment rental management application developed with JavaFX. Details currently being documented.",

    "experience.title": "Professional experience",
    "experience.title1": "IT Maintenance Internship",
    "experience.meta1": "Qualification internship — Riviera 2, Abidjan | February – June 2025",
    "experience.t1": "Installed the Windows operating system.",
    "experience.t2": "Performed IT diagnostics.",
    "experience.t3": "Installed Microsoft Office: Word, Excel, PowerPoint and other office software.",
    "experience.t4": "Provided basic IT support.",

    "business.title": "Business activities",
    "business.title1": "Sale of various items",
    "business.intro": "Sale of baby care products, baby layettes, mattresses, school supplies and household items.",
    "business.t1": "Welcoming, informing and advising customers.",
    "business.t2": "Presenting products.",
    "business.t3": "Negotiation.",
    "business.t4": "Sales follow-up.",
    "business.skillsTitle": "Skills developed",
    "business.s1": "Communication",
    "business.s2": "Customer relations",
    "business.s3": "Negotiation",
    "business.s4": "Sense of responsibility",

    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.locationLabel": "Location",
    "contact.locationValue": "Abidjan, Côte d'Ivoire",
    "contact.availability": "Availability open to discussion.",

    "cv.title": "Download resumes",
    "cv.note": "Two PDF versions: French and English.",
    "cv.buttonFr": "Download French CV",
    "cv.buttonEn": "Download English resume",

    "footer.top": "Back to top ↑"
  };

  function detect() {
    var params = new URLSearchParams(global.location.search);
    var queryLang = (params.get("lang") || "").toLowerCase().slice(0, 2);
    if (SUPPORTED.indexOf(queryLang) !== -1) return queryLang;

    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (error) {
      /* stockage indisponible : on continue */
    }

    var browserLang = (global.navigator.language || "").toLowerCase().slice(0, 2);
    if (SUPPORTED.indexOf(browserLang) !== -1) return browserLang;

    return "fr";
  }

  function setAttributeFromKey(dataAttribute, targetAttribute, dictionary) {
    document.querySelectorAll("[" + dataAttribute + "]").forEach(function (element) {
      var key = element.getAttribute(dataAttribute);
      if (key && typeof dictionary[key] === "string") {
        element.setAttribute(targetAttribute, dictionary[key]);
      }
    });
  }

  function apply(lang) {
    var normalized = SUPPORTED.indexOf(lang) !== -1 ? lang : "fr";
    var dictionary = normalized === "en" ? EN : FR;

    document.documentElement.lang = normalized;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (key && typeof dictionary[key] === "string") {
        element.textContent = dictionary[key];
      }
    });

    setAttributeFromKey("data-i18n-aria-label", "aria-label", dictionary);
    setAttributeFromKey("data-i18n-alt", "alt", dictionary);
    setAttributeFromKey("data-i18n-content", "content", dictionary);

    document.title = dictionary["meta.title"];

    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      var openLabel = dictionary["nav.toggleOpen"];
      var closeLabel = dictionary["nav.toggleClose"];
      if (openLabel) toggle.setAttribute("data-label-open", openLabel);
      if (closeLabel) toggle.setAttribute("data-label-close", closeLabel);
      if (toggle.getAttribute("aria-expanded") !== "true" && openLabel) {
        toggle.setAttribute("aria-label", openLabel);
      } else if (closeLabel) {
        toggle.setAttribute("aria-label", closeLabel);
      }
    }

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === normalized));
    });

    try {
      global.localStorage.setItem(STORAGE_KEY, normalized);
    } catch (error) {
      /* stockage indisponible : la langue reste active pour cette session */
    }

    try {
      var url = new URL(global.location.href);
      if (normalized === "fr") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", "en");
      }
      global.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (error) {
      /* URL non modifiable : sans effet sur le contenu affiché */
    }

    return normalized;
  }

  global.PortfolioI18n = {
    apply: apply,
    detect: detect,
    languages: SUPPORTED
  };
})(window);
