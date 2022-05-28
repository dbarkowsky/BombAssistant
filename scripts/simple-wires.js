class SimpleWires{    
    constructor (){
        this.draw();
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
        const YELLOW_RGB = 'rgb(255, 255, 0)';
        const BLUE_RGB = 'rgb(0, 0, 255)';
        const RED_RGB = 'rgb(255, 0, 0)';
        const WHITE_RGB = 'rgb(245, 245, 245)';
        const BLACK_RGB = 'rgb(0, 0, 0)';

        let coloursCount = [0, 0, 0, 0, 0];
        const rawWires = document.getElementsByClassName("wire");
        let refinedWires = [];

        for (let wire of rawWires) {
            if (wire.style.visibility == "visible"){
                refinedWires.push(wire);
            
                switch (wire.style.backgroundColor){
                    case RED_RGB:
                        coloursCount[RED_INDEX]++;
                        break;
                    case WHITE_RGB:
                        coloursCount[WHITE_INDEX]++;
                        break;
                    case BLACK_RGB:
                        coloursCount[BLACK_INDEX]++;
                        break;
                    case YELLOW_RGB:
                        coloursCount[YELLOW_INDEX]++;
                        break;
                    case BLUE_RGB:
                        coloursCount[BLUE_INDEX]++;
                        break;
                }
            }
        }

        console.log("SimpleWires: setCommands() - " + refinedWires.length);
        console.log("SimpleWires: setCommands() - " + coloursCount);
        const LAST_WIRE = refinedWires.length - 1;
        switch (refinedWires.length){
            case 3:
                // If there are no red wires, cut the second wire.
                if (coloursCount[RED_INDEX] == 0)
                    $("#commands").html(`Cut the second wire.`);
                // If the last wire is white, cut the last wire.
                else if (refinedWires[LAST_WIRE].style.backgroundColor == WHITE_RGB)
                    $("#commands").html(`Cut the last wire.`);
                // If there is more than one blue wire, cut the last blue wire.
                else if (coloursCount[BLUE_INDEX] > 1)
                    $("#commands").html(`Cut the last blue wire.`);
                // Cut the last wire.
                else
                    $("#commands").html(`Cut the last wire.`);
                break;
            case 4:
                // If there is > 1 red wire and last digit of serial is odd, cut the last red wire.
                if (coloursCount[RED_INDEX] > 1 && 
                    $('#odd').hasClass('selected'))
                    $("#commands").html(`Cut the last red wire.`);
                // If the last wire is yellow and there are no red wires, cut the first wire.
                else if (refinedWires[LAST_WIRE].style.backgroundColor == YELLOW_RGB &&
                        coloursCount[RED_INDEX] === 0)
                    $("#commands").html(`Cut the first wire.`);
                // If there is only 1 blue wire, cut the first wire.
                else if (coloursCount[BLUE_INDEX] === 1)
                    $("#commands").html(`Cut the first wire.`);
                // If there is > 1 yellow wire, cut the last wire.
                else if (coloursCount[YELLOW_INDEX] > 1)
                    $("#commands").html(`Cut the last wire.`);
                // Cut the second wire
                else
                    $("#commands").html(`Cut the second wire.`);
                break;
            case 5:
                // If the last wire is black and the last digit of serial is odd, cut 4th wire.
                if (refinedWires[LAST_WIRE].style.backgroundColor == BLACK_RGB &&
                    $('#odd').hasClass('selected'))
                    $("#commands").html(`Cut the fourth wire.`);
                // If there is only 1 red wire and > 1 yellow wire, cut the first wire.
                else if (coloursCount[RED_INDEX] === 1 &&
                        coloursCount[YELLOW_INDEX] > 1)
                    $("#commands").html(`Cut the first wire.`);
                // If there are 0 black wires, cut the second wire.
                else if (coloursCount[BLACK_INDEX] === 0)
                    $("#commands").html(`Cut the second wire.`);
                // Cut the first wire.
                else 
                    $("#commands").html(`Cut the first wire.`);
                break;
            case 6:
                // If there are 0 yellow wires, and last digit of serial is odd, cut 3rd wire.
                if (coloursCount[YELLOW_INDEX] === 0 &&
                    $('#odd').hasClass('selected'))
                    $("#commands").html(`Cut the third wire.`);
                // If there is only 1 yellow wire and > 1 white wire, cut 4th wire.
                else if (coloursCount[YELLOW_INDEX] === 1 &&
                        coloursCount[WHITE_INDEX] > 1)
                    $("#commands").html(`Cut the fourth wire.`);
                // If there are 0 red wires, cut the last wire.
                else if (coloursCount[RED_INDEX] === 0)
                    $("#commands").html(`Cut the last wire.`);
                // Cut the 4th wire.
                else
                    $("#commands").html(`Cut the fourth wire.`);
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