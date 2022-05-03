class SimpleWires{
    constructor (){
        this.draw();

    }

    draw(){
        console.log("SimpleWires.draw(): drawing in canvas")
        $("#canvas").html(` <div class="row console" id="instructions">Instructions appear here.</div>
                            <div class="row simple-wire-row p-1">
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
                            </div>
                            <div class="row console" id="commands">Add more wires.</div>`);
        $(".simple-wire-button").on("click", this.clickedButton);
    }

    clickedButton(){
        let colour = "";

        if($(this).hasClass("yellow"))
            colour = "yellow";
        if($(this).hasClass("blue"))
            colour = "blue";
        if($(this).hasClass("black"))
            colour = "black";
        if($(this).hasClass("white"))
            colour = "white";
        if($(this).hasClass("red"))
            colour = "red";
        if($(this).hasClass("clear"))
            colour = "clear";

        console.log("SimpleWires: clickedButton() - " + colour);

        if (colour !== "clear") {
            $(this).closest(".simple-wire-row").find(".wire").css("background-color", colour);
            $(this).closest(".simple-wire-row").find(".wire").css("visibility", "visible");
        } else {
            $(this).closest(".simple-wire-row").find(".wire").css("visibility", "hidden");
        }
    }
}