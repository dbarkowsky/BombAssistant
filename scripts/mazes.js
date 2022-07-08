class Mazes{
    circles; // Array length 2. Holds two coordinates.
    redTriangle; // String holding one coordinate.
    whiteSquare; // String holding one coordinate.
    squares; // List of square objects. Each object has a tag (A1), a contains (circle, triangle, square), and four links (up, down, left, right)
    configurations; // 3D array of possible square configurations. 1D = 9 possible configs, 2D = 36 squares on board, 3D = 4 directions of links (0,1,2,3 = up,down,left,right)
    optimalPath; // List of square tags that makes for the optimal path through maze.

    constructor (){

        this.draw();
    }

    // Populates the squares with default status. All links open.
    initSquares(){

    }

    // Based on two circles locations, configure squares to block links.
    configureSquares(){

    }

    // Activates on square selected and decides what to do with that info
    squareSelected(){

    }

    // Finds optimal path through maze. Stores as list of square tags.
    findPath(){

    }

    // Based on optimal path, draws SVG line through squares
    drawPath(){

    }

    // Prints directions to screen
    printDirections(){
        
    }

    draw(){
        console.log("Mazes.draw(): drawing in canvas")
        $("#canvas").html(`Not yet implemented.`);
    }
}