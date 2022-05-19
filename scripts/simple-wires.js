class SimpleWires{
    serial;
    wireCount;

    constructor (){
        this.draw();
        this.serial = null;
    }

    draw(){
        console.log("SimpleWires.draw(): drawing in canvas")
        $("#canvas").html(` <div class="row console" id="instructions">Instructions appear here.</div>
                            <div class="steel-plate container-fluid" id="simple-wire-container"></div>
                            <div class="row console" id="commands">Add more wires.</div>`);
        for(let i = 0; i < 6; i++){
            $("#simple-wire-container").append(`<div class="row simple-wire-row p-1">
                                <div class="col-4">
                                    <div class="wire my-auto"></div>
                                </div>
                                <div class="col-8 row">
                                    <div class="col-2"><button class="simple-wire-button yellow"></button></div>
                                    <div class="col-2"><button class="simple-wire-button blue"></button></div>
                                    <div class="col-2"><button class="simple-wire-button red"></button></div>
                                    <div class="col-2"><button class="simple-wire-button white"></button></div>
                                    <div class="col-2"><button class="simple-wire-button black"></button></div>
                                    <div class="col-2"><button class="simple-wire-button clear">X</button></div>
                                </div>
                            </div>`);
        }
        $(".simple-wire-button").on("click", this.clickedButton);
        $(".simple-wire-button").on("click", this.setCommands);
    }

    setCommands(){
        const YELLOW_INDEX = 0;
        const BLUE_INDEX = 1;
        const RED_INDEX = 2;
        const WHITE_INDEX = 3;
        const BLACK_INDEX = 4;

        let coloursCount = [0, 0, 0, 0, 0];
        const rawWires = document.getElementsByClassName("wire");
        let refinedWires = [];

        for (let wire of rawWires) {
            if (wire.style.visibility == "visible"){
                refinedWires.push(wire);
            }

            switch (wire.style.backgroundColor){
                case 'rgb(255, 0, 0)':
                    coloursCount[RED_INDEX]++;
                    break;
                case 'rgb(245, 245, 245)':
                    coloursCount[WHITE_INDEX]++;
                    break;
                case 'rgb(0, 0, 0)':
                    coloursCount[BLACK_INDEX]++;
                    break;
                case 'rgb(255, 255, 0)':
                    coloursCount[YELLOW_INDEX]++;
                    break;
                case 'rgb(0, 0, 255)':
                    coloursCount[BLUE_INDEX]++;
                    break;
            }
        }

        console.log("SimpleWires: setCommands() - " + refinedWires.length);
        console.log("SimpleWires: setCommands() - " + coloursCount);
        switch (refinedWires.length){
            case 3:
                $("#commands").html(`3 wires.`);
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                $("#commands").html(`Add more wires.`);
        }
    }

    clickedButton(){
        let colour = $(this).css("background-color");
        let line = $(this).closest(".simple-wire-row").find(".wire");
    
        console.log("SimpleWires: clickedButton() - " + colour);

        if (!$(this).hasClass("clear")) {
            line.css("background-color", colour);
            line.css("visibility", "visible");
        } else {
            line.css("visibility", "hidden");
        }
    }    
}