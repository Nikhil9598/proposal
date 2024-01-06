function nextpage() {
    window.location.href = "yes.html";
}

document.getElementById("yes_button").addEventListener("click", nextpage);
let no_button=document.getElementById("no_button")
no_button.addEventListener("mouseover",setRandomPosition)

function setRandomPosition() {
    no_button.style.position="absolute"
    r1=Math.random();
    r1=parseInt(r1*90);
    r2=Math.random();
    r2=parseInt(r2*90);
    no_button.style.top=`${r1}%`;
    no_button.style.left=`${r2}%`;

}
