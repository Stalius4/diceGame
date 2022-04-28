const cube = document.querySelector(".cube")
const rollBtn =document.querySelector("#roll-btn")

const diceFace1 =document.getElementById("dice-img")
const diceImgs = document.querySelectorAll(".dice-roll-img")
let index = 0;

const content2 = document.querySelector(".wrap")









rollBtn.addEventListener("click", () => {
    cube.style.display = "none";
    diceFace1.style.display ="grid"
    let images = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png',]

    let cnt=0
    let obj =setInterval(randomImg, 100)
    
    
    function randomImg() {
        let random = Math.floor(Math.random()*6);
        diceFace1.src = images[random]
        cnt++
        if(cnt==40){
            clearInterval(obj)
    
        }
    }
})