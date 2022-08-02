class Mazes{
    circles; // Array length 2. Holds two coordinates.
    redTriangle; // String holding one coordinate.
    whiteSquare; // String holding one coordinate.
    squares; // Root object containing square objects. Each object has a tag (A1), contents (circle, triangle, square), and four links (up, down, left, right)
    configurations; // 3D array of possible square configurations. 1D = 9 possible configs, 2D = 36 squares on board, 3D = 4 directions of links (0,1,2,3 = up,down,left,right) + circle boolean
    optimalPath; // List of square tags that makes for the optimal path through maze.

    constructor(){
      this.draw();
      this.squares = this.initSquares();
      this.configurations = this.populateConfigs();
      $('.maze-square').on('click', this.squareSelected);
      console.log(this.squares);
      console.log(this.configurations);
    }

    // Populates the squares with default status. All links closed.
    initSquares(){
      // Get list of maze-squares for id attribute
      let domSquares = [];
      $('.maze-square').each(function (){
          domSquares.push($(this).attr('id'));
      });
      
      // Populate 
      let squareObjects = {};
      domSquares.forEach(square => {
          squareObjects[square] = {
              tag: square,
              contents: null,
              up: null,
              down: null,
              left: null,
              right: null
          };
      });

      return squareObjects;
    }

    // Fill configurations array
    populateConfigs(){
        let configsArray = [];
        configsArray.push([   
          [0,1,0,1,0], // A
          [1,1,0,0,1],
          [1,1,0,0,0],
          [1,1,0,0,0],
          [1,1,0,1,0],
          [1,0,0,1,0],
          [0,0,1,1,0], // B
          [0,1,0,1,0],
          [1,0,0,1,0],
          [0,0,0,1,0],
          [0,0,1,1,0],
          [0,0,1,0,0],
          [0,1,1,0,0], // C
          [1,0,1,0,0],
          [0,1,1,0,0],
          [1,0,1,1,0],
          [0,1,1,0,0],
          [1,0,0,1,0],
          [0,1,0,1,0], // D
          [1,0,0,1,0],
          [0,1,0,1,0],
          [1,0,1,0,0],
          [0,1,0,1,0],
          [1,0,1,0,0],
          [0,0,1,1,0], // E
          [0,0,1,1,0],
          [0,0,1,1,0],
          [0,0,0,1,0],
          [0,0,1,0,0],
          [0,0,0,1,0],
          [0,0,1,0,0], // F
          [0,1,1,0,0],
          [1,1,1,0,1],
          [1,1,1,0,0],
          [1,1,0,0,0],
          [1,0,1,0,0]
        ]);
        console.log(`Mazes: populateConfigs()`);
        return configsArray;
    }

    // Activates on square selected and decides what to do with that info
    squareSelected = () => {
        let selectedTag = $(event.target).attr('id');
        console.log(`Mazes: squareSelected() - ${selectedTag}`);
        
        const configureSquares = (selectedConfig) => {
          console.log(`Mazes: configureSquares()`);
          let arrayIndex = 0;
          const tagArray = Object.keys(this.squares).sort();
          console.log('tagarray', tagArray);
          console.log('configs', this.configurations[selectedConfig]);
          
          tagArray.forEach(tag => {
            const element = document.getElementById(tag);
            const tagValue = parseInt(tag, 16);
            //square.up == the square above it. Can I do this in hex? Yes, +-1 up/down, +-10 left right
            if (this.configurations[selectedConfig][arrayIndex][0] === 1)
              this.squares[tag].up = parseInt(tagValue - 1).toString(16).toUpperCase();
            else
              element.style.borderTop = "solid 3px black";

            if (this.configurations[selectedConfig][arrayIndex][1] === 1)
              this.squares[tag].down = parseInt(tagValue + 1).toString(16).toUpperCase();
            else
              element.style.borderBottom = "solid 3px black";

            if (this.configurations[selectedConfig][arrayIndex][2] === 1)
              this.squares[tag].left = parseInt(tagValue - 16).toString(16).toUpperCase();
            else
              element.style.borderLeft = "solid 3px black";

            if (this.configurations[selectedConfig][arrayIndex][3] === 1)
              this.squares[tag].right = parseInt(tagValue + 16).toString(16).toUpperCase();
            else
              element.style.borderRight = "solid 3px black";

            arrayIndex++;
          });
        }
        
        if(this.circles === undefined){
          // Which maze is it?
          if (selectedTag === 'A2' || selectedTag === 'F3'){
            configureSquares(0);
            this.circles = ['A2', 'F3'];
          }

          console.log(`Mazes: squareSelected()`, this.squares);
        } else if (this.whiteSquare === undefined){
          this.whiteSquare = selectedTag;
          console.log('white square', this.whiteSquare);
          
        } else if (this.redTriangle === undefined){
          this.redTriangle = selectedTag;
          console.log('red triangle', this.redTriangle);
          this.optimalPath = this.findPath(this.whiteSquare, this.redTriangle);
        }
    }

    // Finds optimal path through maze. Stores as list of square tags.
    findPath = (currentLocation, destination, previousLocation = "") => {
      console.log(`Mazes: findPath()`, `${currentLocation} to ${destination}`);
      let path = [];
      //Base case, if currentLocation == destination
      if (currentLocation === destination){
        path.push(currentLocation);
        console.log(path);
        return path;
      } else {
        // see if each direction is neither null nor last visited, repeat
        if (this.squares[currentLocation].up !== null && this.squares[currentLocation].up.tag !== previousLocation){
          if(this.findPath(this.squares[currentLocation].up, destination, currentLocation !== null))
            return this.findPath(this.squares[currentLocation].up.tag, destination, currentLocation);
        }

        if (this.squares[currentLocation].down !== null && this.squares[currentLocation].down.tag !== previousLocation){
          if(this.findPath(this.squares[currentLocation].down, destination, currentLocation !== null))
            return this.findPath(this.squares[currentLocation].down.tag, destination, currentLocation);
        }

        if (this.squares[currentLocation].left !== null && this.squares[currentLocation].left.tag !== previousLocation){
          if(this.findPath(this.squares[currentLocation].left, destination, currentLocation !== null))
            return this.findPath(this.squares[currentLocation].left.tag, destination, currentLocation);
        }

        if (this.squares[currentLocation].right !== null && this.squares[currentLocation].right.tag !== previousLocation){
          if(this.findPath(this.squares[currentLocation].right, destination, currentLocation !== null))
            return this.findPath(this.squares[currentLocation].right.tag, destination, currentLocation);
        }
      }
      return null;
    }

    // Based on optimal path, draws SVG line through squares
    drawPath(){

    }

    // Prints directions to screen
    printDirections(){

    }

    draw(){
        console.log("Mazes.draw(): drawing in canvas")
        $("#canvas").html(` <div class="row console" id="instructions">Instructions appear here.</div>
                            <div class="container-fluid" id="maze-container">
                                <div id="maze">
                                    <div class="row">
                                        <div class="col maze-square" id="A1"></div>
                                        <div class="col maze-square" id="B1"></div>
                                        <div class="col maze-square" id="C1"></div>
                                        <div class="col maze-square" id="D1"></div>
                                        <div class="col maze-square" id="E1"></div>
                                        <div class="col maze-square" id="F1"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col maze-square" id="A2"></div>
                                        <div class="col maze-square" id="B2"></div>
                                        <div class="col maze-square" id="C2"></div>
                                        <div class="col maze-square" id="D2"></div>
                                        <div class="col maze-square" id="E2"></div>
                                        <div class="col maze-square" id="F2"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col maze-square" id="A3"></div>
                                        <div class="col maze-square" id="B3"></div>
                                        <div class="col maze-square" id="C3"></div>
                                        <div class="col maze-square" id="D3"></div>
                                        <div class="col maze-square" id="E3"></div>
                                        <div class="col maze-square" id="F3"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col maze-square" id="A4"></div>
                                        <div class="col maze-square" id="B4"></div>
                                        <div class="col maze-square" id="C4"></div>
                                        <div class="col maze-square" id="D4"></div>
                                        <div class="col maze-square" id="E4"></div>
                                        <div class="col maze-square" id="F4"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col maze-square" id="A5"></div>
                                        <div class="col maze-square" id="B5"></div>
                                        <div class="col maze-square" id="C5"></div>
                                        <div class="col maze-square" id="D5"></div>
                                        <div class="col maze-square" id="E5"></div>
                                        <div class="col maze-square" id="F5"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col maze-square" id="A6"></div>
                                        <div class="col maze-square" id="B6"></div>
                                        <div class="col maze-square" id="C6"></div>
                                        <div class="col maze-square" id="D6"></div>
                                        <div class="col maze-square" id="E6"></div>
                                        <div class="col maze-square" id="F6"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row console" id="commands">Select circle locations.</div>`);
    }
}