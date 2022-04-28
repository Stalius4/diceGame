const cube = document.querySelector(".cube")

let scoreDisplay =document.querySelector(".score")
let scoreDisplay2 =document.getElementById("score")
let diceFace1 =document.getElementById("dice-img")


const restartBtn = document.querySelector("#start-again-btn")
const rollBtn =document.querySelector("#roll-btn")



let score = 0

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

    diceFace1.src = images[random];
    cnt++;

    if (cnt == 20) {
      clearInterval(obj);
      console.log(images[random]);
      if (images[random] == "dice1.png") {
          
          scoreDisplay2.textContent= "You lost"
        
        diceFace1.style.display = "grid";
        scoreDisplay.style.display = "none";
        rollBtn.style.display = "none"
        
       
        setTimeout(function() {
            diceFace1.style.display = "none"
            cube.style.display = "grid";
            restartBtn.style.display="grid"}, 4000)



      } else if (images[random] == "dice2.png") {
          score = score +2 
          scoreDisplay.textContent= score
          win()
      } else if (images[random] == "dice3.png") {
        score = score +3 
        scoreDisplay.textContent= score
        win()
      } else if (images[random] == "dice4.png") {
        score = score +4 
        scoreDisplay.textContent= score
        win()
      }else if (images[random] == "dice5.png") {
        score = score +5 
        scoreDisplay.textContent= score
        win()
      }else if (images[random] == "dice6.png") {
        score = score +6 
        scoreDisplay.textContent= score
        win()
      }
    }
  }
});

restartBtn.addEventListener("click", () => {
    window.location.reload()
})


function win(){
    if(score>=20){
        scoreDisplay2.textContent= "Winner!"
        
            diceFace1.style.display = "none"
            cube.style.display = "grid";
            restartBtn.style.display="grid"
            rollBtn.style.display = "none"
    }
}