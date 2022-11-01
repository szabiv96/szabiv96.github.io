const menuButton = document.querySelector("#menuButton");
const fourMenu = document.querySelector("#fourMenu");
const row1 = document.querySelector("#row1");
const row2 = document.querySelector("#row2");
const behind = document.querySelector("#behind");

menuButton.onclick = function(){
    fourMenu.classList.toggle("mainMenuDisplay");
    console.log("clicked");
    setTimeout(function (){
        row1.classList.toggle("opacity-100");
    }, 500);
    setTimeout(function (){
        row2.classList.toggle("opacity-100");
    }, 500)
    setTimeout(function (){
        behind.classList.toggle("opacity-0");
    }, 400)
}


window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
}
