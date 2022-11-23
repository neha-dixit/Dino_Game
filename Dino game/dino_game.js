const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
//console.log(dino, cactus);
function jump() {
    if (dispatchEvent.classList != "jump") {
        //first it checks if the dino is mid-jump. If not, it makes it jump.
        console.log('jump');
       // dino.class
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
            //removes the jump class from the dino once it has jumped so that it can jump again
        }, 300);
    }
}
console.log(jump());
let checkAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
   console.log(cactusLeft, dinoTop);
    //check for collision
    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 133) {
    	//console.log(cactusLeft, dinoTop);
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(");
        window.location.reload();
    }
}, 10);
document.addEventListener("keydown", function (event) {
    jump();
    console.log('hey');
});

