const cube = document.querySelector(".cube")
const rollBtn =document.querySelector("#roll-btn")

let diceFace1 =document.getElementById("dice-img")
const diceImgs = document.querySelectorAll(".dice-roll-img")
let index = 0;

let content2 = document.querySelector(".wrap")
let displayDice= document.getElementById("display-dice")

let score = 0
// const face1 = document.getElementById("dice-img")
// const face2 = document.getElementById("dice-img2")
// const face3 = document.getElementById("dice-img3")
// const face4 = document.getElementById("dice-img4")
// const face5 = document.getElementById("dice-img5")
// const face6 = document.getElementById("dice-img6")

// const array = [face1, face2,face3,face4,face5,face6,]
rollBtn.addEventListener("click", () => {
  cube.style.display = "none";
  diceFace1.style.display = "grid";
  let images = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  let cnt = 0;
  let obj = setInterval(randomImg, 100);

  function randomImg() {
    let random = Math.floor(Math.random() * 6);
    // displayDice = array[random]
    diceFace1.src = images[random];
    cnt++;

    if (cnt == 20) {
      clearInterval(obj);
      console.log(images[random]);
      if (images[random] == "dice1.png") {
        console.log(score);
      } else if (images[random] == "dice2.png") {
          score = score +2 
        console.log(score);
      } else if (images[random] == "dice3.png") {
        score = score +3 
        console.log(score);
      } else if (images[random] == "dice4.png") {
        score = score +4 
        console.log(score);
      }else if (images[random] == "dice5.png") {
        score = score +5 
        console.log(score);
      }else if (images[random] == "dice6.png") {
        score = score +6 
        console.log(score);
      }
    }
  }
});