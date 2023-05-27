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

async function rollDice(){
    const APIResponse = (await fetch('https://rolz.org/api/?1d6.json'));
    const diceRoll = await APIResponse.json();
    return diceRoll.result;
}