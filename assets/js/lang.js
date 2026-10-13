/* Internationalization (i18n) - English / Spanish Switcher */

const i18nData = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_experience: "Experiencia",
    nav_research: "Investigación",
    nav_education: "Educación",

    // Home Page
    home_greeting: "Hola",
    home_im: ", soy",
    home_knowledge: "Tengo conocimientos en",
    home_about_title: "Acerca de mí",
    home_about_p1: "Me describo como una persona responsable y apasionada por el aprendizaje constante.",
    home_about_p2: "Mi mayor fortaleza es mi voluntad para aprender sobre temas que desconozco y enfrentar los desafíos que se me presentan. Creo firmemente en la importancia de estar en constante evolución y adaptación a nuevas tecnologías, herramientas y lenguajes.",
    home_about_p3: "A lo largo de mi trayectoria, he demostrado mi capacidad para asumir responsabilidades y cumplir con los objetivos establecidos. Me considero una persona proactiva, con habilidades de resolución de problemas y una mentalidad orientada a resultados día a día.",
    home_skills_title: "Aptitudes y Tecnologías",
    home_animated_words: "Desarrollo de apps Android, Kotlin, Java, Microsoft Business Central, Microsoft Dynamics NAV",

    // Experience Page
    exp_header_main: "Mi",
    exp_header_sub: "Experiencia",
    exp_work_heading: "Experiencia de",
    exp_work_sub: "trabajo",

    // Education Page
    edu_header_main: "Formación",
    edu_header_sub: "Académica",
    edu_formal_main: "Educación",
    edu_formal_sub: "Formal",
    edu_degree: "Desarrollo de Aplicaciones Multiplataforma",
    edu_accreditations_main: "Acreditaciones",
    edu_accreditations_sub: "Online",

    // Research Page
    research_header_main: "Trabajos de",
    research_header_sub: "Investigación",

    // Projects Page
    projects_header_main: "Mis",
    projects_header_sub: "Proyectos",

    // TechStack Page
    tech_header_main: "Mi",
    tech_header_sub: "Stack Tecnológico",
    tech_skills_main: "MIS",
    tech_skills_sub: "HABILIDADES",

    // References Page
    ref_header_main: "Mis",
    ref_header_sub: "Referencias",

    // Footer & Contact
    footer_quote: "Desarrolla una pasión por aprender. Si lo haces, nunca dejarás de crecer.",
    contact_header: "Estemos en contacto",
    contact_name: "Tu nombre",
    contact_email: "Dirección de correo",
    contact_message: "Escribe tu mensaje",
    contact_send: "Enviar"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_experience: "Experience",
    nav_research: "Research",
    nav_education: "Education",

    // Home Page
    home_greeting: "Hello",
    home_im: ", I'm",
    home_knowledge: "I have knowledge in",
    home_about_title: "About Me",
    home_about_p1: "I describe myself as a responsible person with a passion for continuous learning.",
    home_about_p2: "My greatest strength is my willingness to learn about new subjects and face challenges head-on. I firmly believe in the importance of constant evolution and adaptation to new technologies, tools, and languages.",
    home_about_p3: "Throughout my career, I have proven my ability to take responsibility and meet established objectives. I consider myself a proactive person with problem-solving skills and a daily results-oriented mindset.",
    home_skills_title: "Skills and Technologies",
    home_animated_words: "Android App Development, Kotlin, Java, Microsoft Business Central, Microsoft Dynamics NAV",

    // Experience Page
    exp_header_main: "My",
    exp_header_sub: "Experience",
    exp_work_heading: "Work",
    exp_work_sub: "Experience",

    // Education Page
    edu_header_main: "Educational",
    edu_header_sub: "Background",
    edu_formal_main: "Formal",
    edu_formal_sub: "Education",
    edu_degree: "Cross-Platform Application Development",
    edu_accreditations_main: "Online",
    edu_accreditations_sub: "Accreditations",

    // Research Page
    research_header_main: "Research",
    research_header_sub: "Work",

    // Projects Page
    projects_header_main: "My",
    projects_header_sub: "Projects",

    // TechStack Page
    tech_header_main: "My",
    tech_header_sub: "Tech Stack",
    tech_skills_main: "MY",
    tech_skills_sub: "SKILLS",

    // References Page
    ref_header_main: "My",
    ref_header_sub: "References",

    // Footer & Contact
    footer_quote: "Develop a passion for learning. If you do, you will never cease to grow.",
    contact_header: "Let's keep in touch",
    contact_name: "Your name",
    contact_email: "Email address",
    contact_message: "Write your message",
    contact_send: "Send"
  }
};

function getLanguage() {
  return localStorage.getItem("lang") || "es";
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations();
  if (typeof window.onLanguageChange === "function") {
    window.onLanguageChange(lang);
  }
}

function applyTranslations() {
  const lang = getLanguage();
  const dict = i18nData[lang] || i18nData.es;

  // Translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate elements with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update animated-text words attribute if present
  const animText = document.querySelector(".animated-text");
  if (animText && dict.home_animated_words) {
    animText.setAttribute("data-words", dict.home_animated_words);
  }

  // Update language select element if present
  const select = document.getElementById("lang_select");
  if (select) {
    select.value = lang;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
});
