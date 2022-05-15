class SimpleWires{
    serial;
    wireCount;

    constructor (){
        this.draw();
        this.serial = null;
        this.wireCount = 0;
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
    }

    setCommands(){
        console.log("SimpleWires: setCommands() - " + this.wireCount);

        switch (this.wireCount){
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
            if (line.css('visibility') == 'hidden')
                this.wireCount++;

            line.css("background-color", colour);
            line.css("visibility", "visible");
        } else {
            if (line.css('visibility') == 'visible')
                this.wireCount--;
            line.css("visibility", "hidden");
        }

        this.setCommands;
    }    
}