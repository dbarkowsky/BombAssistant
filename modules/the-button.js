class TheButton {
  constructor() {
    this.draw();
  }

  // When colour button is pressed, changes colour of THE button
  changeColour = () => {
    let classes = $(event.target).attr('class');
  };

  // When word button is pressed, changes word inside THE button
  changeWord = () => {
    let text = $(event.target).attr('innerText');
  };

  // Determines current state and gives instructions
  assess = () => {};

  draw() {
    console.log('TheButton.draw(): drawing in canvas');
    $('#canvas')
      .html(`<div class="row console" id="instructions">This module is incomplete!</div>
        <div class="steel-plate container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="circle red align-middle d-flex">
                        <span class="mx-auto">Detonate</span>
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
                    <button class="steel-button">Abort</button>
                    <button class="steel-button">Hold</button>
                    <button class="steel-button">Detonate</button>
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
