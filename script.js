
initializeColourPicker(50,100);
initializeLightnessPicker();
initializeOpacityPicker();


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cube").forEach((element) => {
        element.addEventListener("click", async function() {
            const diceRoll = await rollDice();
            if(diceRoll == 1){
                this.classList.remove('spin');
                this.classList.add('one');
            } else if(diceRoll == 2){
                this.classList.remove('spin');
                this.classList.add('two');
            } else if(diceRoll == 3){
                this.classList.remove('spin');
                this.classList.add('three');
            } else if(diceRoll == 4){
                this.classList.remove('spin');
                this.classList.add('four');
            } else if(diceRoll == 5){
                this.classList.remove('spin');
                this.classList.add('five');
            } else if(diceRoll == 6){
                this.classList.remove('spin');
                this.classList.add('six');
            }

        });
    });
});

function setDiceColor(color){
    document.querySelector('.cube').classList.remove('rainbow');
    const sides = document.querySelectorAll('.side');
    for(let side of sides){
        side.style.backgroundColor=color;
    }
}

async function rollDice(){
    const APIResponse = (await fetch('https://rolz.org/api/?1d6.json'));
    const diceRoll = await APIResponse.json();
    return diceRoll.result;
}

function initializeColourPicker(lightness, opacity){
    colourPicker = document.querySelector('.colourPicker');
    colourPicker.innerHTML = "";
    for(let j=0; j<100; j++){
        const rowSection = document.createElement('section');
        colourPicker.appendChild(rowSection);
        for(let i=0; i<360; i++){
          let colourSection = document.createElement('section');
          colourSection.style.backgroundColor = "hsla(" + i + ", " + j + "%, " + lightness + "%, " + opacity + "%)";
          colourSection.addEventListener("click", () => setDiceColor("hsla(" + i + ", " + j + "%, " + lightness + "%, " + opacity + "%"));
          rowSection.appendChild(colourSection);
        }
      }
}
function initializeLightnessPicker(){
    lightnessPicker = document.querySelector('.lightnessPicker');
    for(let i=0; i<100; i++){
        let lightnessSection = document.createElement('section');
        lightnessSection.style.backgroundColor = "hsl(0, 0%, " + i + "%";
        lightnessSection.addEventListener("click", () => initializeColourPicker(i, 100));
        lightnessPicker.appendChild(lightnessSection);
    }
}
function initializeOpacityPicker(){
    opacityPicker = document.querySelector('.opacityPicker');
    for(let i=0; i<100; i++){
        let opacitySection = document.createElement('section');
        opacitySection.style.backgroundColor = "hsla(0, 0%, 0%, " + i + "%";
        opacitySection.addEventListener("click", () => initializeColourPicker(50, i));
        opacityPicker.appendChild(opacitySection);
    }
}