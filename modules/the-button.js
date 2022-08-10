class TheButton {
  button;
  textSpan;
  colour;
  text;

  constructor() {
    this.draw();
    $('.colour-button').on('click', this.changeColour);
    $('.word-button').on('click', this.changeWord);
    this.button = document.querySelector('.circle');
    this.textSpan = document.getElementById('button-text');
  }

  // When colour button is pressed, changes colour of THE button
  changeColour = () => {
    const classes = $(event.target).attr('class').split(/\s+/);
    let colour = classes[1];
    console.log('Colour', colour);

    // Clear colour from button, then add new colour
    this.button.classList.remove('red', 'yellow', 'blue', 'white');
    this.button.classList.add(colour);
    this.button.setAttribute('value', colour);

    if (colour === 'blue') this.button.style.color = 'white';
    else this.button.style.color = 'black';

    this.colour = colour;

    this.assess();
  };

  // When word button is pressed, changes word inside THE button
  changeWord = () => {
    const text = $(event.target).text();
    console.log('Word', text);
    this.textSpan.innerHTML = text;
    this.textSpan.setAttribute('value', text.toLowerCase());
    this.text = text.toLowerCase();
    this.assess();
  };

  // Determines current state and gives instructions
  assess = () => {
    // If button is blue and says abort = Releasing held button
    if (this.colour === 'blue' && this.text === 'abort') {
      console.log(`theButton - assess(): 1`);
      this.heldButton();
    }
    // If > 1 battery and says detonate = press and release
    else if (
      $('#battery-display').attr('value') > 1 &&
      this.text === 'detonate'
    ) {
      console.log(`theButton - assess(): 2`);
      this.pressAndRelease();
    }
    // If white and lit CAR indicator = Releasing held button
    else if (this.colour === 'white' && $('#car').hasClass('selected')) {
      console.log(`theButton - assess(): 3`);
      this.heldButton();
    }
    // If >2 and lit FRK = press and release
    else if (
      $('#battery-display').attr('value') > 2 &&
      $('#frk').hasClass('selected')
    ) {
      console.log(`theButton - assess(): 4`);
      this.pressAndRelease();
    }
    // If yellow = Releasing held button
    else if (this.colour === 'yellow') {
      console.log(`theButton - assess(): 5`);
      this.heldButton();
    }
    // If red and says hold = press and release
    else if (this.colour === 'red' && this.text === 'hold') {
      console.log(`theButton - assess(): 6`);
      this.pressAndRelease();
    }
    // else = Releasing held button
    else {
      console.log(`theButton - assess(): 7`);
      this.heldButton();
    }
  };

  heldButton = () => {
    $('#commands').html(
      'Press and hold button. Release when number on matching coloured strip is visible.'
    );
  };

  pressAndRelease = () => {
    $('#commands').html('Press and immediately release the button.');
  };

  draw() {
    console.log('TheButton.draw(): drawing in canvas');
    $('#canvas')
      .html(`<div class="row console" id="instructions">Set batteries and lit indicators, then choose colour and word.</div>
        <div class="steel-plate container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="circle align-middle d-flex red">
                        <span id="button-text" class="mx-auto">Detonate</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col"><button class="colour-button red"></button></div>
                        <div class="col"><button class="colour-button white"></button></div>
                    </div>
                    <div class="row">
                        <div class="col"><button class="colour-button blue"></button></div>
                        <div class="col"><button class="colour-button yellow"></button></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <button class="steel-button word-button">Abort</button>
                    <button class="steel-button word-button">Hold</button>
                    <button class="steel-button word-button">Detonate</button>
                </div>
                <div class="col-md-3">
                    <div>
                        <p class="font-weight-bold">Coloured Strip Guide</p>
                        <div class="row">
                            <div class="col-4 blue">4</div>
                            <div class="col-4 white">1</div>
                            <div class="col-4 yellow">5</div>
                        </div>
                        <div class="row clear">Any other colour: 1</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row console" id="commands">Identify button attributes.</div>`);
  }
}
