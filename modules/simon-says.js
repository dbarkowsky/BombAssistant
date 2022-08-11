class SimonSays {
  inputList; // List of input colours
  outputList; // List of commands

  constructor() {
    this.draw();
    this.inputList = [];
    this.outputList = [];
    $('.simon-square').on('click', this.addColour);
  }

  // Adds colour clicked to list
  addColour = () => {
    const colour = $(event.target).attr('value');
    this.inputList.push(colour);
    this.translateList();
    this.printCommands();
  };

  // Translates list into instructions
  translateList = () => {
    console.log('translateList(): input', this.inputList);
    // Get bomb variables
    const serialHasVowel = ($('.vowel-button.selected').attr('value') === "1");
    const strikes = parseInt($('#strike-display').attr('value'));

    console.log('serialHasVowel', serialHasVowel);
    console.log('strikes', strikes);

    // Reset output list
    this.outputList = [];

    // For each input, push colour to output
    this.inputList.forEach(colour => {
      if (serialHasVowel){
        switch (colour) {
          case 'red':
            switch (strikes) {
              case 0:
                this.outputList.push('blue');
                break;
              case 1:
                this.outputList.push('yellow');
                break;
              case 2:
                this.outputList.push('green');
                break;
            }
            break;
          case 'blue':
            switch (strikes) {
              case 0:
                this.outputList.push('red');
                break;
              case 1:
                this.outputList.push('green');
                break;
              case 2:
                this.outputList.push('red');
                break;
            }
            break;
          case 'green':
            switch (strikes) {
              case 0:
                this.outputList.push('yellow');
                break;
              case 1:
                this.outputList.push('blue');
                break;
              case 2:
                this.outputList.push('yellow');
                break;
            }
            break;
          case 'yellow':
            switch (strikes) {
              case 0:
                this.outputList.push('green');
                break;
              case 1:
                this.outputList.push('red');
                break;
              case 2:
                this.outputList.push('blue');
                break;
            }
            break;
        }
      } else {
        switch (colour) {
          case 'red':
            switch (strikes) {
              case 0:
                this.outputList.push('blue');
                break;
              case 1:
                this.outputList.push('red');
                break;
              case 2:
                this.outputList.push('yellow');
                break;
            }
            break;
          case 'blue':
            switch (strikes) {
              case 0:
                this.outputList.push('yellow');
                break;
              case 1:
                this.outputList.push('blue');
                break;
              case 2:
                this.outputList.push('green');
                break;
            }
            break;
          case 'green':
            switch (strikes) {
              case 0:
                this.outputList.push('green');
                break;
              case 1:
                this.outputList.push('yellow');
                break;
              case 2:
                this.outputList.push('blue');
                break;
            }
            break;
          case 'yellow':
            switch (strikes) {
              case 0:
                this.outputList.push('red');
                break;
              case 1:
                this.outputList.push('green');
                break;
              case 2:
                this.outputList.push('red');
                break;
            }
            break;
        }
      }
    });
    console.log('translateList(): output', this.outputList);
  };

  // Prints commands and record of input
  printCommands = () => {
    $('#input-record').html(`Input: ${this.inputList.join(', ')}`);
    $('#commands').html(`Press: ${this.outputList.join(', ')}`);
  };

  draw() {
    console.log('SimonSays.draw(): drawing in canvas');
    $('#canvas').html(`<div class="row console" id="instructions">Set Serial Vowel and Strikes, then press buttons.</div>
    <div class="steel-plate container-fluid">
        <div class="red simon-square" value="red"></div>
        <div class="blue simon-square" value="blue"></div>
        <div class="green simon-square" value="green"></div>
        <div class="yellow simon-square" value="yellow"></div>
    </div>
    <div class="row console" id="input-record">-----</div>
    <div class="row console" id="commands">Waiting for input.</div>`);
  }
}
