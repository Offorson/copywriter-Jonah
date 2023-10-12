const hiddenElements = document.querySelectorAll(".hidden");
const services = document.querySelector(".services");
const header = document.getElementById("1%cuisine");
const conbolaHeader = document.getElementById("conbola");
const teslaHeader = document.getElementById("tesla");
const homeHeader = document.getElementById("Home");
const serviceHeader = document.getElementById("services");
const portfolioHeader = document.getElementById("portfolio");
const testimonialHeader = document.getElementById('testimonial')

//////////////
// const scrollUp = Document.querySelector('.button')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

function scrollup() {
  header.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
function conbolaScrollup() {
  conbolaHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
function teslaScrollup() {
  teslaHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function homeScrollup() {
  homeHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
function serviceScrollup() {
  serviceHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
function portfolioScrollup() {
  portfolioHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
function testimonialScrollup() {
  testimonialHeader.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
