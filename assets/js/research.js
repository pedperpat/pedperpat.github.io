/*Research Details Table*/

const researchTable = document.querySelector(".main");

const researchData = {
  es: [
    {
      title: "Investigación en optimización de lectura OCR offline en dispositivo mediante ML-Kit",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Computer Vision & Mobile Machine Learning",
      researchYr: 2023,
      citebox: "popup1",
      image: "assets/images/research-page/wordRepresentation.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Investigación en optimización de lectura OCR offline en dispositivo mediante ML-Kit. 2023.",
      },
      abstract:
        "Estudio y desarrollo de soluciones de reconocimiento óptico de caracteres (OCR) optimizadas para ejecución offline en dispositivos móviles utilizando ML-Kit.",
      absbox: "absPopup1",
    },
    {
      title: "Investigación en IA con capacidades de visión para ser usado como un OCR vitaminado",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Artificial Intelligence & Computer Vision",
      researchYr: 2023,
      citebox: "popup2",
      image: "assets/images/research-page/crossLingual.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Investigación en IA con capacidades de visión para ser usado como un OCR vitaminado. 2023.",
      },
      abstract:
        "Investigación en la integración de modelos de visión por inteligencia artificial para potenciar el análisis contextual y la extracción avanzada de datos en documentos.",
      absbox: "absPopup2",
    },
    {
      title:
        "Inclusión de chatbot asistencial embebido en un add-in de Microsoft Dynamics 365 Business Central",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Enterprise Solutions & Applied AI",
      researchYr: 2024,
      citebox: "popup3",
      image: "assets/images/research-page/dialogueState.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Inclusión de chatbot asistencial embebido en un add-in de Microsoft Dynamics 365 Business Central. 2024.",
      },
      abstract:
        "Diseño e integración de un asistente conversacional dentro de add-ins para Microsoft Dynamics 365 Business Central orientados a la optimización de procesos en ERP.",
      absbox: "absPopup3",
    },
  ],
  en: [
    {
      title: "Research on On-Device Offline OCR Optimization using ML-Kit",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Computer Vision & Mobile Machine Learning",
      researchYr: 2023,
      citebox: "popup1",
      image: "assets/images/research-page/wordRepresentation.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Research on On-Device Offline OCR Optimization using ML-Kit. 2023.",
      },
      abstract:
        "Study and development of optical character recognition (OCR) solutions optimized for offline execution on mobile devices using ML-Kit.",
      absbox: "absPopup1",
    },
    {
      title: "Research on AI Vision Capabilities as an Enhanced OCR",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Artificial Intelligence & Computer Vision",
      researchYr: 2023,
      citebox: "popup2",
      image: "assets/images/research-page/crossLingual.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Research on AI Vision Capabilities as an Enhanced OCR. 2023.",
      },
      abstract:
        "Research on integrating artificial intelligence vision models to enhance contextual analysis and advanced data extraction in documents.",
      absbox: "absPopup2",
    },
    {
      title:
        "Inclusion of an Embedded Assistant Chatbot in a Microsoft Dynamics 365 Business Central Add-in",
      authors: "Pedro Antonio Pérez Paterna",
      conferences: "Enterprise Solutions & Applied AI",
      researchYr: 2024,
      citebox: "popup3",
      image: "assets/images/research-page/dialogueState.png",
      citation: {
        vancouver:
          "Pedro Antonio Pérez Paterna. Inclusion of an Embedded Assistant Chatbot in a Microsoft Dynamics 365 Business Central Add-in. 2024.",
      },
      abstract:
        "Design and integration of a conversational assistant inside Microsoft Dynamics 365 Business Central add-ins aimed at ERP process optimization.",
      absbox: "absPopup3",
    },
  ]
};

AOS.init();
const fillData = () => {
  let output = "";
  const lang = typeof getLanguage === "function" ? getLanguage() : "es";
  const research = researchData[lang] || researchData.es;
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg" onerror="this.src='assets/images/research-page/research.svg'"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes" onerror="this.src='assets/images/research-page/research.svg'">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  if (researchTable) researchTable.innerHTML = output;
};

window.onLanguageChange = () => {
  fillData();
};

document.addEventListener("DOMContentLoaded", fillData);
