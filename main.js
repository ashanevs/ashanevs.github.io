const projects = document.querySelectorAll(".project");
const mobileLinkBoards = document.querySelectorAll(".mobile-link-board");

function mobileNavShow() {
  if (screen.width < 480) {
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener("click", e => {
        e.preventDefault();
        mobileLinkBoards[i].classList.toggle("visible");
      });
    }
  }
}

mobileNavShow();
