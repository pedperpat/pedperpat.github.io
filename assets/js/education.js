AOS.init();

// MOOCs Cards / Accreditations

const moocs = document.querySelector(".moocs");
const moocsData = {
  es: [
    {
      title: "Conviértete en un experto desarrollador en Dynamics 365 para Business Central (60h)",
      subtitle: "ClipPlatform - Mayo 2021",
      cardImage: "assets/images/education-page/udemy.svg",
      moocLink: "https://www.linkedin.com/in/pedro-antonio-p%C3%A9rez-paterna-906203140/",
    },
  ],
  en: [
    {
      title: "Become an Expert Developer in Dynamics 365 Business Central (60h)",
      subtitle: "ClipPlatform - May 2021",
      cardImage: "assets/images/education-page/udemy.svg",
      moocLink: "https://www.linkedin.com/in/pedro-antonio-p%C3%A9rez-paterna-906203140/",
    },
  ]
};

const showCards = () => {
  let output = "";
  const lang = typeof getLanguage === "function" ? getLanguage() : "es";
  const moocscards = moocsData[lang] || moocsData.es;
  moocscards.forEach(
    ({ title, subtitle, cardImage, moocLink }) =>
      (output += `        
        <div class="col-12 col-md-6 column mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto" style="max-width: 400px;">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image" onerror="this.src='assets/images/education-page/education.png'">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:14px;">${title}</h6>
                    <p class="text-center text-muted mb-0" style="font-size:12px;">${subtitle}</p>
                </div>
            </div>
        </div>
      `)
  );
  if (moocs) moocs.innerHTML = output;
};

window.onLanguageChange = () => {
  showCards();
};

document.addEventListener("DOMContentLoaded", showCards);
