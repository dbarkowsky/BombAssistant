function reset(){
    $("#canvas").html(` <div class="row">
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
    $("#img-simple-wires").on("click", startSimpleWires);
    $("#img-the-button").on("click", startTheButton);
    $("#img-keypad").on("click", startSymbols);
    $("#img-simon-says").on("click", startSimonSays);
    $("#img-whos-on-first").on("click", startWhosOnFirst);
    $("#img-memory").on("click", startMemory);
    $("#img-morse-code").on("click", startMorseCode);
    $("#img-complicated-wires").on("click", startComplicatedWires);
    $("#img-abc123").on("click", startABC123);
    $("#img-mazes").on("click", startMazes);
    $("#img-passwords").on("click", startPasswords);
    $("#img-needy-knob").on("click", startNeedyKnob);

    console.log("Controller.reset(): Bomb modules in canvas.");
}

function startSimpleWires(){
    let newModule = new SimpleWires();
}

function startTheButton(){
    let newModule = new TheButton();
    newModule.draw();
}

function startSymbols(){
    let newModule = new Symbols();
    newModule.draw();
}

function startMemory(){
    let newModule = new Memory();
    newModule.draw();
}

function startABC123(){
    let newModule = new ABC123();
    newModule.draw();
}

function startPasswords(){
    let newModule = new Passwords();
    newModule.draw();
}

function startMorseCode(){
    let newModule = new MorseCode();
    newModule.draw();
}

function startComplicatedWires(){
    let newModule = new ComplicatedWires();
    newModule.draw();
}

function startMazes(){
    let newModule = new Mazes();
    newModule.draw();
}

function startSimonSays(){
    let newModule = new SimonSays();
    newModule.draw();
}

function startWhosOnFirst(){
    let newModule = new WhosOnFirst();
    newModule.draw();
}

function startNeedyKnob(){
    let newModule = new NeedyKnob();
    newModule.draw();
}


$(document).ready(function () {
    //Insert modules into canvas
    //reset();    

    //Assign main button to reset this area to default.
    $("#home").on("click", reset);

    
});