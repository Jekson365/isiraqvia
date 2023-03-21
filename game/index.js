function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var container = document.querySelector(".container");
var result = document.querySelector(".result")

const arr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

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
            // var colors = ["#7149C6", "#FC2947", "#FE6244", "#245953", "#408E91", "#EA5455", "#002B5B"]
            if (result.querySelectorAll(".item").length <= 5) {
                currentItem.style.position = "static"
                currentItem.classList.add("choosed")
                result.append(currentItem)
            }
            var choosedElements = Array.from(document.querySelectorAll(".choosed"))

            switch (currentItem.classList[1]) {
                case "#7149C6":
                    arr[0].push("#7149C6");
                    break
                case "#FC2947":
                    arr[1].push("#FC2947");
                    break
                case "#FE6244":
                    arr[2].push("#FE6244");
                    break
                case "#245953":
                    arr[3].push("#245953");
                    break
                case "#408E91":
                    arr[4].push("#408E91");
                    break
                case "#EA5455":
                    arr[5].push("#EA5455");
                    break
                case "#002B5B":
                    arr[6].push("#002B5B");
                    break;
            }

            arr.forEach((ee)=> {
                if (ee.length >= 2) {
                    ee = []
                }
            })

        })
    }
}

window.addEventListener("load", () => {
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
    var colors = ["#7149C6", "#FC2947", "#FE6244", "#245953", "#408E91", "#EA5455", "#002B5B"]
    colors.map((each) => {
        drawDifferent(2, each)
    })

})
