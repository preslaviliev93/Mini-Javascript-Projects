document.addEventListener("DOMContentLoaded", () => {

    const clickCounter = document.getElementById("clicksCount");
    const decreaseButton = document.getElementById("decrease");
    const resetButton = document.getElementById("reset")
    const increaseButton = document.getElementById("increase")
    let totalClicks = 0
    displayClickCounter()

    function displayClickCounter(){
        clickCounter.textContent=totalClicks;
    
    }
    
    decreaseButton.addEventListener("click", () => {
        totalClicks -=1
        displayClickCounter()
    })

    resetButton.addEventListener("click", () => {
        totalClicks = 0
        displayClickCounter()
    })

    increaseButton.addEventListener("click", () => {
        totalClicks += 1
        displayClickCounter()
    })

    

});