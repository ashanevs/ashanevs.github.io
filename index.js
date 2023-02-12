const copyToClipboardIcon = document.querySelector(".fa-copy");

copyToClipboardIcon.addEventListener("click", e => {
	navigator.clipboard.writeText("ashanev@gmail.com");
})
