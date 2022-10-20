const menuButton = document.querySelector("#menuButton");
const fourMenu = document.querySelector("#fourMenu");

menuButton.onclick = function(){
    fourMenu.classList.toggle("mainMenuDisplay")
    console.log("clicked");
}



