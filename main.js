const projects = document.querySelectorAll(".project");
const mobileLinkBoards = document.querySelectorAll(".mobile-link-board");

mobileNavShow();

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
