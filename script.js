const gamePlane = document.createElement("div");
// gamePlane.innerText = "GamePlane"

// gamePlane.style.border = "2px dashed red"
gamePlane.style.cssText = `
background-color:black;
height:100vh;
width:100vw;`


document.body.append(gamePlane);
console.log(gamePlane)



function makeWall([w, h, x, y, typ = "wall"]){
    const wall = document.createElement("div")
    wall.style.cssText =`
    position:absolute;
    width:${w}vw;
    height:${h}vh;
    background-color: #00F7F7;
    left:${x}vw;
    top:${y}vh;
    display:flex;
    justify-content:center;
    align-items:center;`
    
    
wall.className = typ;
if(typ != "wall"){
    wall.innerText = typ.toUpperCase();
    
}
gamePlane.append(wall);
}

const mapa = [
    [20, 50, 0 ,25, 'start'],
    [30, 10, 20, 45, 'wall'],
    [30, 3, 50, 49, 'wall'],
    [20, 30, 80, 30, 'meta']
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
        game.over(false)
        console.log(e)
    },
    over(result){
        if(result) {
            // console.log("You Win")
            guide.show("Wygrałeś!", "Możesz spróbować jeszcze raz!")
            
         }
         else{
            // console.log("You Lose")
            guide.show("Przegrałeś!", "Możesz spróbować jeszcze raz!")
         }


        console.log("Game over" + result+"")
        document.removeEventListener("mousemove", game.wallListening)
        startButton.addEventListener("click", game.start)
        metaButton.removeEventListener("mouseover", game.over)
    }
}



startButton.addEventListener("click", game.start);

const guide = {
    init(){
        this.dom = document.createElement("div");
        this.dom.className = "Guide";
        this.wrapper = document.createElement("div");
        this.wrapper.style.cssText = `
        background-color: red;
        padding:10vh 6vw;
        width:65vw;
        height:55vh;
        text-align:center;
        border-radius:10px;
        box-shadow:0px 0px 20px black;
        `
        this.tittle = document.createElement("h1");
        this.tittle.innerText = "HI";
        this.message = document.createElement("p");
        this.message.innerText = "This is a guide";

        this.button = document.createElement("button");
        this.button.innerText = "OK";

        // this.button.addEventListener("click", this.close)
        this.button.addEventListener("click", () => {
            this.close()
        })

        
        
        this.wrapper.append(this.tittle);        
        this.wrapper.append(this.message);
        this.wrapper.append(this.button);
        this.dom.append(this.wrapper);
        document.body.append(this.dom);
    },
    

    close(){
        
        this.dom.style.display = "none";

        
    },

    show(tittle, message){
        console.log("show")
        this.tittle.innerText = tittle;
        this.message.innerText = message;
        this.dom.style.display = "flex";

    }

}
guide.init();
guide.show(
    "Witaj w grze!",
    "Kliknij start i przedostań się kursorem do mety"
)









