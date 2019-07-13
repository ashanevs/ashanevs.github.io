const projects = document.querySelectorAll(".project");
const mobileLinkBoards = document.querySelectorAll(".mobile-link-board");
const emailIcon = document.querySelector(".email-icon");
const emailLink = document.querySelector(".email-link");

mobileNavShow();
swapEmail();
emailClipboard();

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
    emailLink.setAttribute("data-tooltip", "Copied!");
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
