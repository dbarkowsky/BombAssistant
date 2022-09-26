let currentModule;
let currentInterval;

function reset() {
  $('#canvas').html(` <div class="row">
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-simple-wires" class="module-image" src="./images/realModules/simple-wires.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-the-button" class="module-image" src="./images/realModules/button.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-keypad" class="module-image" src="./images/realModules/keypad.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-simon-says" class="module-image" src="./images/realModules/simon-says.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-whos-on-first" class="module-image" src="./images/realModules/whos-on-first.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-memory" class="module-image" src="./images/realModules/memory.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-morse-code" class="module-image" src="./images/realModules/morse-code.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-complicated-wires" class="module-image" src="./images/realModules/complicated-wires.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-abc123" class="module-image" src="./images/realModules/wire-sequence.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-mazes" class="module-image" src="./images/realModules/module-maze.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-passwords" class="module-image" src="./images/realModules/password.webp"></div>
                            <div class="col-lg-3 col-md-4 col-6 module-panel"><img id="img-needy-knob" class="module-image" src="./images/realModules/needy-knob.webp"></div>
                        </div>`);
  //Assign each image with proper action.
  $('#img-simple-wires').on('click', startSimpleWires);
  $('#img-the-button').on('click', startTheButton);
  $('#img-keypad').on('click', startSymbols);
  $('#img-simon-says').on('click', startSimonSays);
  $('#img-whos-on-first').on('click', startWhosOnFirst);
  $('#img-memory').on('click', startMemory);
  $('#img-morse-code').on('click', startMorseCode);
  $('#img-complicated-wires').on('click', startComplicatedWires);
  $('#img-abc123').on('click', startABC123);
  $('#img-mazes').on('click', startMazes);
  $('#img-passwords').on('click', startPasswords);
  $('#img-needy-knob').on('click', startNeedyKnob);

  // Clear intervals from other modules
  clearInterval(currentInterval);

  console.log('Controller.reset(): Bomb modules in canvas.');
}

function startSimpleWires() {
  currentModule = new SimpleWires();
  //currentInterval = currentModule.runInterval();
}

function startTheButton() {
  currentModule = new TheButton();
  //currentInterval = currentModule.runInterval();
}

function startSymbols() {
  currentModule = new Symbols();
}

function startMemory() {
  currentModule = new Memory();
}

function startABC123() {
  currentModule = new ABC123();
}

function startPasswords() {
  currentModule = new Passwords();
}

function startMorseCode() {
  currentModule = new MorseCode();
}

function startComplicatedWires() {
  currentModule = new ComplicatedWires();
  currentInterval = currentModule.runInterval();
}

function startMazes() {
  currentModule = new Mazes();
}

function startSimonSays() {
  currentModule = new SimonSays();
}

function startWhosOnFirst() {
  currentModule = new WhosOnFirst();
}

function startNeedyKnob() {
  currentModule = new NeedyKnob();
}

$(document).ready(function () {
  //Insert modules into canvas
  reset();

  //Assign main button to reset this area to default.
  $('#home').on('click', reset);

  //Create Bomb instance to hold global variables
  let theBomb = new Bomb();
});
