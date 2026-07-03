const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const btn = document.getElementById("btn");
const extra = document.getElementById("extra");
const bg = document.getElementById("bg");

function openLetter(){
    envelope.classList.add("open");

    setTimeout(()=>{
        letter.classList.add("show");
    },800);
}

envelope.addEventListener("click", openLetter);
envelope.addEventListener("touchstart", openLetter);

btn.onclick = ()=>{
    extra.style.display="block";
}

// lluvia de corazones
function createHeart(){
    const h = document.createElement("div");
    h.className = "heartRain";
    h.innerHTML = "❤";

    h.style.left = Math.random()*100 + "vw";
    h.style.fontSize = (10 + Math.random()*20) + "px";
    h.style.animationDuration = (4 + Math.random()*5) + "s";

    bg.appendChild(h);

    setTimeout(()=>{
        h.remove();
    },9000);
}

setInterval(createHeart,300);