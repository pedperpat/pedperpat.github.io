/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
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
];

AOS.init();
const fillData = () => {
  let output = "";
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
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
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
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
