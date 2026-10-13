AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const expData = {
  es: [
    {
      title: "Desarrollador Junior Business Central y Android",
      cardImage: "assets/images/experience-page/IMProjects.png",
      place: "IM Projects",
      time: "(Abril, 2021 - actualidad)",
      desp: "<li>Desarrollo e implemento extensiones para Microsoft Dynamics 365 Business Central.</li> <li>Creo aplicaciones Android e implemento mejoras de roadmap.</li> <li>He creado una aplicación para Android denominada IM-Kitchen y desde la cual se puede visualizar toda la información de Ingredientes, Recetas y Platos en Microsoft Dynamics 365 Business Central tanto para operaciones de Backoffice como de planta.</li> <li>He desarrollado una aplicación de reconocimiento y match de documentos mediante visión por IA.</li>",
    },
    {
      title: "Programador técnico",
      cardImage: "assets/images/experience-page/GrupoAzarbe.png",
      place: "Promociones Azarbe SA",
      time: "(Julio, 2018 - Abril, 2021)",
      desp: "<li>Desarrollo de soluciones para Microsoft Dynamics NAV.</li> <li>Trabajé en pequeños desarrollos para dotar de nuevas funciones al ERP Microsoft Dynamics NAV.</li> <li>Gestión documental y de contabilidad.</li> <li>Ofrecía ayuda y soporte ténico a usuarios.</li>",
    },
    {
      title: "Programador técnico",
      cardImage: "assets/images/experience-page/DatanetLogo.png",
      place: "Datanet Corentia SL",
      time: "(Julio, 2017 - Julio, 2018)",
      desp: "<li>Aprendí a desarrollar en Microsoft Dynamics NAV.</li> <li>Desarrollos pequeños para clientes.</li>",
    },
  ],
  en: [
    {
      title: "Junior Business Central & Android Developer",
      cardImage: "assets/images/experience-page/IMProjects.png",
      place: "IM Projects",
      time: "(April, 2021 - Present)",
      desp: "<li>Development and implementation of extensions for Microsoft Dynamics 365 Business Central.</li> <li>Creation of Android applications and roadmap improvements.</li> <li>Developed an Android application named IM-Kitchen to view all Ingredients, Recipes, and Dishes information in Microsoft Dynamics 365 Business Central for both Backoffice and factory floor operations.</li> <li>Developed a document recognition and matching application using AI vision.</li>",
    },
    {
      title: "Technical Developer",
      cardImage: "assets/images/experience-page/GrupoAzarbe.png",
      place: "Promociones Azarbe SA",
      time: "(July, 2018 - April, 2021)",
      desp: "<li>Development of solutions for Microsoft Dynamics NAV.</li> <li>Worked on custom developments to add new features to the Microsoft Dynamics NAV ERP.</li> <li>Document and accounting management.</li> <li>Provided technical assistance and user support.</li>",
    },
    {
      title: "Technical Developer",
      cardImage: "assets/images/experience-page/DatanetLogo.png",
      place: "Datanet Corentia SL",
      time: "(July, 2017 - July, 2018)",
      desp: "<li>Learned development in Microsoft Dynamics NAV.</li> <li>Small custom developments for clients.</li>",
    },
  ]
};

const showCards2 = () => {
  let output = "";
  const lang = typeof getLanguage === "function" ? getLanguage() : "es";
  const exp = expData[lang] || expData.es;
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" onerror="this.src='assets/images/experience-page/experience.svg'"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  if (experiencecards) experiencecards.innerHTML = output;
};

window.onLanguageChange = () => {
  showCards2();
};

document.addEventListener("DOMContentLoaded", showCards2);
