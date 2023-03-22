function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var container = document.querySelector(".container");
var result = document.querySelector(".result")


function counter(arr,element) {
    return arr.filter((each)=> each == element).length
}


var choosedItems = []

class Peace {
    constructor(xCor, yCor, color) {
        this.xCor = xCor
        this.yCor = yCor
        this.color = color
        this.chosedItems = []
        this.eachPeace = document.createElement("div")
        this.markedColors = []
    }

    drawElement() {
        this.eachPeace.classList.add("item");
        this.eachPeace.classList.add(this.color)
        container.appendChild(this.eachPeace)

        this.giveStyles();

        this.listener()
    }
    giveStyles() {
        this.eachPeace.style.top = `${this.xCor}px`;
        this.eachPeace.style.left = `${this.yCor}px`;
        this.eachPeace.style.background = this.color
    }
    listener() {

        this.eachPeace.addEventListener("click", (e) => {
            var currentItem = e.currentTarget
            var colors = ["#caf0f8", "#ade8f4", "#90e0ef", "#48cae4", "#00b4d8", "#0077b6", "#023e8a","#03045e"]
            if (result.querySelectorAll(".item").length <= 5) {
                currentItem.style.position = "static"
                currentItem.classList.add("choosed")
                result.append(currentItem)

            }
            if (document.querySelectorAll(".choosed").length >= 6) {
                document.querySelector(".lose-banner").classList.add("cazdas")
            }             


            choosedItems.push(currentItem.classList[1])

            colors.map((each)=> {

                if (counter(choosedItems,each) >= 2) {

                    choosedItems = choosedItems.filter((foo)=>foo != each)
                    
                    var y = document.querySelectorAll(".choosed")
                    y = Array.from(y)

                    y.map((_color)=> {
                        if (each == _color.classList[1]) {
                            _color.remove()
                        } 
                    })

                }
                
                 
            })
        })
    }
}

document.getElementById("again").addEventListener("click",()=> {
    document.querySelector(".lose-banner").classList.remove("cazdas")

    gameLoop()


})

function gameLoop() {
    function drawDifferent(res, c) {
        for (var i = 0; i < res; i++) {
            var eachBox = new Peace(
                getRandomArbitrary(0, 500),
                getRandomArbitrary(0, 500),
                c
            )
            eachBox.drawElement();
        }
    }
    var colors = ["#caf0f8", "#ade8f4", "#90e0ef", "#48cae4", "#00b4d8", "#0077b6", "#023e8a","#03045e"]
    colors.map((each) => {
        drawDifferent(3, each)
    })

    document.querySelectorAll(".choosed").map((each)=>each.remove())



}

window.addEventListener("load", () => {
   gameLoop()

})
