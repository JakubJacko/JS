const gamePlane = document.createElement("div");
// gamePlane.innerText = "GamePlane"

// gamePlane.style.border = "2px dashed red"
gamePlane.style.cssText = `
background-color:black;
height:100vh;
width:100vw;`


document.body.append(gamePlane);
console.log(gamePlane)



function makeWall([w, h, x, y, typ]){
    const wall = document.createElement("div")
    wall.style.cssText =`
    position:absolute;
    width:${w}vw;
    height:${h}vh;
    background-color: #00F7F7;
    left:${x}vw;
    top:${y}vh;
    ` 
wall.className = typ
gamePlane.append(wall);
}

const mapa = [
    [20, 50, 0 ,25, 'start'],
    [30, 20, 20, 40, 'wall'],
    [30, 5, 50, 45, 'wall'],
    [20, 40, 80, 25, 'meta']
]

for(const wall of mapa){
    makeWall(wall)
}

const startButton = document.querySelector(".start");
const metaButton = document.querySelector(".meta");
const allWalls = document.querySelectorAll(".meta, .start, .wall");
for(const singleWall of allWalls){
    console.log(singleWall)
    singleWall.addEventListener("mousemove", e => {
        e.stopPropagation();
    })
    

}

const game = {
    start(){
        console.log("Game started")
        startButton.removeEventListener("click", game.start)
        metaButton.addEventListener("mouseover", game.over)
        document.addEventListener("mousemove", game.wallListening)

        
    },
    wallListening(e){
        console.log(e)
    },
    over(result){
        console.log("Game over" + result+"")
        document.removeEventListener("mousemove", game.wallListening)
        startButton.addEventListener("click", game.start)
        metaButton.removeEventListener("mouseover", game.over)
    }
}



startButton.addEventListener("click", game.start);










