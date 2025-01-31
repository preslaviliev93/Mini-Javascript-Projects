document.addEventListener("DOMContentLoaded", function(){
  
    const generatorButton = document.getElementById("generator-button");
    const firstSquare = document.getElementById("square1")
    const firstSquareHexText = document.getElementById("color-code-1")
    const secondSquare = document.getElementById("square2")
    const secondSquareHexText = document.getElementById("color-code-2")
    const thirdSquare = document.getElementById("square3")
    const thirdSquareHexText = document.getElementById("color-code-3")

    function generateRandomHexCode(){
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
    
    function generate_colors(){
        const color1 = generateRandomHexCode();
        const color2 = generateRandomHexCode();
        const color3 = generateRandomHexCode();
        
        firstSquare.style.backgroundColor = color1;
        firstSquareHexText.classList.remove("hidden");
        firstSquareHexText.innerText = color1;

        secondSquare.style.backgroundColor = color2;
        secondSquareHexText.classList.remove("hidden");
        secondSquareHexText.innerText = color2;

        thirdSquare.style.backgroundColor = color3;
        thirdSquareHexText.classList.remove("hidden");
        thirdSquareHexText.innerText = color3;
    }

    generate_colors();


    generatorButton.addEventListener("click", function(){
        generate_colors();
    })

});