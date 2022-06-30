class TheButton{
    constructor (){
        this.draw();
    }

    draw(){
        console.log("TheButton.draw(): drawing in canvas")
        $("#canvas").html(`<div class="row console" id="instructions">Instructions appear here.</div>
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
                        <p class="font-weight-bold">Coloured Strips</p>
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