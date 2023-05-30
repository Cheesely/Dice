colourPicker = document.querySelector('.colourPicker');
for(let j=0; j<100; j++){
  const rowSection = document.createElement('section');
  rowSection.id="row" + j;
  colourPicker.appendChild(rowSection);
  for(let i=0; i<360; i++){
    let colourSection = document.createElement('section');
    colourSection.id="column" + i;
    colourSection.style.backgroundColor = "hsl(" + i + ", " + j + "%, 50%";
    colourSection.addEventListener("click", () => setDiceColor("hsl(" + i + ", " + j + "%, 50%"));
    rowSection.appendChild(colourSection);
  }
}


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