const buttons = document.querySelectorAll(".button");
let map = document.getElementById("map");
let img = map.src;

buttons.forEach(setupButton);

function setupButton(button) {
    if (button) {
        const pElement = button.querySelector('p');
        const name = pElement.textContent;
        let newImg = name + ".png";
         button.addEventListener("click", function() {
         map.src = newImg;
        // console.log(newImg)
        });
    };    
};

