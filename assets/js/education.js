AOS.init();

// MOOCs Cards / Accreditations

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Conviértete en un experto desarrollador en Dynamics 365 para Business Central (60h)",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.linkedin.com/in/pedro-antonio-p%C3%A9rez-paterna-906203140/",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-12 col-md-6 column mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto" style="max-width: 400px;">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:14px;">${title}</h6>
                    <p class="text-center text-muted mb-0" style="font-size:12px;">ClipPlatform - Mayo 2021</p>
                </div>
            </div>
        </div>        
      `)
  );
  if (moocs) {
    moocs.innerHTML = output;
  }
};
document.addEventListener("DOMContentLoaded", showCards);

/* Timeline Section*/

$(function () {
  if (typeof ScrollReveal !== "undefined") {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
      if ($(".timeline-content").hasClass("js--fadeInLeft")) {
        $(".timeline-content")
          .removeClass("js--fadeInLeft")
          .addClass("js--fadeInRight");
      }

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    }
  }
});
