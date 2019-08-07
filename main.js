const projects = document.querySelectorAll(".project");
const mobileLinkBoards = document.querySelectorAll(".mobile-link-board");
const emailIcon = document.querySelector(".email-icon");
const emailLink = document.querySelector(".email-link");
const projectTitleContainer = document.querySelectorAll(
  ".project-title-container"
);
const projectTitle = document.querySelector(".project-title");
const projectContainer = document.querySelector(".project-container");
const aboutContainer = document.querySelector(".about-container");
const arrow = document.querySelector(".fa-long-arrow-alt-right");
const workLink = document.querySelector(".intro-work-link");
let currentSection = "work";

mobileNavShow();
swapEmail();
emailClipboard();
// addSlide();
changeSection();
workLinkFunc();
// addArrowRotate();
// removeArrowRotate();

function mobileNavShow() {
  if (screen.width < 480) {
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener("click", e => {
        e.preventDefault();
        visibleCheck();
        mobileLinkBoards[i].classList.toggle("visible");
      });
    }
  }
}

function visibleCheck() {
  for (let i = 0; i < mobileLinkBoards.length; i++) {
    if (!mobileLinkBoards[i].hasAttribute("visible")) {
      mobileLinkBoards[i].classList.add("visible");
    }
  }
}

function swapEmail() {
  emailIcon.addEventListener("click", e => {
    e.preventDefault();
    emailIcon.style.display = "none";
    emailLink.style.display = "inline-block";
    emailLink.style.animation = "fade-in 2s";
  });
}

function emailClipboard() {
  emailLink.addEventListener("click", e => {
    e.preventDefault();
    copyStringToClipboard("ashanev@gmail.com");
    emailLink.setAttribute("data-tooltip", "Copied to clipboard");
  });
}

function copyStringToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// function addSlide() {
//   projectTitleContainer.addEventListener("click", e => {
//     e.preventDefault();
//     // projectContainer.classList.add("slide-far-left");
//     // projectTitleContainer.classList.toggle("visible");
//     projectContainer.classList.remove("visible");
//     arrow.classList.add("rotated");
//     arrow.classList.remove("unrotated");
//     removeInfo();
//   });
// }

// function removeInfo() {
//   projectTitleContainer.addEventListener("click", e => {
//     e.preventDefault();
//     arrow.classList.remove("rotated");
//     arrow.classList.add("unrotated");
//     projectContainer.classList.add("visible");
//     addSlide();
//   });
// }

function changeSection() {
  for (let i = 0; i < projectTitleContainer.length; i++) {
    projectTitleContainer[i].addEventListener("click", e => {
      e.preventDefault();
      for (let j = 0; j < arrow.length; j++) {
        if (!arrow[j].hasAttribute("show")) {
          arrow[j].classList.add("show");
        }
      }
      arrow[i].classList.remove("show");
      if (projectTitle[i].innerHTML === "My Work") {
        projectContainer.classList.remove("visible");
        aboutContainer.classList.add("visible");
      }
      if (projectTitle[i].innerHTML === "About") {
        aboutContainer.classList.remove("visible");
        projectContainer.classList.add("visible");
      }
    });
  }
}
function workLinkFunc() {
  workLink.addEventListener("click", e => {
    e.preventDefault();
    projectTitle.scrollIntoView();
  });
}

// function addArrowRotate() {
//   if (arrow.hasAttribute("rotated")) {
//   }
//   workLink.addEventListener("mouseenter", e => {
//     arrow.classList.add("rotated");
//   });
//   workLink.addEventListener("mouseleave", e => {
//     arrow.classList.add("unrotated");
//     arrow.classList.remove("rotated");
//   });
// }
// function removeArrowRotate() {}
