
initializeColourPicker(50);
initializeLightnessPicker();


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cube").forEach((element) => {
        element.addEventListener("click", async function() {
            if (this.classList.contains('spin')){
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
            }
            else{
                this.classList.remove('one');
                this.classList.remove('two');
                this.classList.remove('three');
                this.classList.remove('four');
                this.classList.remove('five');
                this.classList.remove('six');
                this.classList.add('spin');
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
    const APIResponse = (await fetch('https://www.dejete.com/api?nbde=1&tpde=6'));
    const diceRoll = await APIResponse.json();
    return diceRoll[0].value;
}

function initializeColourPicker(lightness){
    colourPicker = document.querySelector('.colourPicker');
    colourPicker.innerHTML = "";
    for(let j=0; j<100; j++){
        const rowSection = document.createElement('section');
        colourPicker.appendChild(rowSection);
        for(let i=0; i<360; i++){
          let colourSection = document.createElement('section');
          colourSection.style.backgroundColor = "hsl(" + i + ", " + j + "%, " + lightness + "%";
          colourSection.addEventListener("click", () => setDiceColor("hsl(" + i + ", " + j + "%, " + lightness + "%"));
          rowSection.appendChild(colourSection);
        }
      }
}
function initializeLightnessPicker(){
    lightnessPicker = document.querySelector('.lightnessPicker');
    for(let i=0; i<100; i++){
        let lightnessSection = document.createElement('section');
        lightnessSection.style.backgroundColor = "hsl(0, 0%, " + i + "%";
        lightnessSection.addEventListener("click", () => initializeColourPicker(i));
        lightnessPicker.appendChild(lightnessSection);
    }
}