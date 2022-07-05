class Passwords{
    words;
    selectedLetters;
    filteredWords;
    farthestSelectedColumn;

    constructor (){
        this.words = ['about', 'after', 'again', 'below', 'could', 'every', 'first', 'found', 'great', 'house', 'large', 'learn', 'never', 'other', 'place', 'plant', 'point', 'right', 'small', 'sound', 'spell', 'still', 'study', 'their', 'there', 'these', 'thing', 'think', 'three', 'water', 'where', 'which', 'world', 'would', 'write'];
        this.selectedLetters = this.createSelectedLetters();    // 2D array with columns 1-5 holding selected button content 
        this.filteredWords = [];        // Final array with possible words after filtering
        this.farthestSelectedColumn = -1;
        this.draw();
    }

    createSelectedLetters(){
        let temp = [];
        for (let i = 0; i < 5; i++){
            temp[i] = [];
        }
        return temp;
    }

    columnController(){
        console.log("Passwords: columnController() - populating columns");

        // get all selected letters
        // determine farthest selected column -> determines later algorithms
        // de-select letters if they don't match -> start in column 1
        // check if other letters should be visible/not visible -> start in column 4
        // get all selected letters again --- remove in previous step if possible
        // compare selected letters to list of words
        this.setSelectedLetters();
        this.displayLetters();
    }

    setFarthestSelectedColumn(){
        let currentColumn = 4;
        let columnFound = false;
        while (!columnFound && currentColumn <= 0){
            if (this.selectedButtons[currentColumn].length != 0){
                columnFound = true;
                this.farthestSelectedColumn = currentColumn;
            }
            currentColumn--;
        }
    }

    displayLetters(){
        // Update column 0 list
        // this.selectedLetters[0] = this.getSelectedLettersInColumn[0];
        // For each column after the first
        for (let i = 1; i <= 4; i++){
            // For each button in column, see if preceeding letter requirement is there.
            let buttonList = $(`#${i} .steel-button`).toArray();
        
            buttonList.forEach(button => {
                console.log(`${this.shouldThisBeVisible(button.textContent, i)}: ${button.textContent}`);
                if (this.shouldThisBeVisible(button.textContent, i)){
                    console.log(button.textContent + " should be visible");
                    button.classList.remove('hidden');
                } else {
                    console.log(button.textContent + " should not be visible");
                    button.classList.add('hidden');
                    button.classList.remove('selected');
                }
            });

            this.setSelectedLetters();
        } 
    } 

    shouldThisBeVisible(letter, column){
        // Was that the last column? Then all needed letters are selected.
        if (column == 0){
            console.log(`last column`);
            return true;
        } else {
            // Go through every word in list
            for (let i = 0; i < this.words.length; i++){
                // If this word has a letter at that location
                console.log(`current word: ${this.words[i]}, column: ${column}, and letter: ${letter}`);
                if (this.words[i].charAt(column).toUpperCase() == letter){

                    // Are the previous letters in the word available?
                    let previousLettersSelected = [];
                    // For each column/letter left of checked letter
                    console.log(this.selectedLetters);
                    for (let j = column - 1; j >= 0; j--){
                        console.log(j);
                        if (this.selectedLetters[j].includes(this.words[i].charAt(j).toUpperCase())){
                            previousLettersSelected.push(true);
                        } else {
                            previousLettersSelected.push(false);
                            break;
                        }
                    }

                    // Were all of them true? AKA all needed letters were selected
                    if (!previousLettersSelected.includes(false)){
                        return true;
                    }


                //     // Is the previous letter selected in the previous column?
                //     console.log(column + letter);
                //     if (this.selectedLetters[column - 1].includes(this.words[i].charAt(column - 1).toUpperCase())){
                //         console.log(letter + ' exists');
                //         console.log(`not last column ${this.words[i].charAt(column - 1)} ${column-1}`);
                //         return this.shouldThisBeVisible(this.words[i].charAt(column - 1).toUpperCase(), column - 1);
                //     }
                // }
                }
            }
            // All words looped through, no complete matches found.
            return false;
        }
    } 

    setSelectedLetters(){
        for(let i = 0; i < 5; i++){
            this.selectedLetters[i] = this.getSelectedLettersInColumn(i);
        }
    }

    getSelectedLettersInColumn(column){
        let selectedLetters = [];
        let selectedButtons = $(`#${column} .selected`).toArray();

        selectedButtons.forEach(button => {
            selectedLetters.push(button.textContent);
        });
        
        console.log(`Passwords: getSelectedButtonsInColumn() - column ${column}: ${selectedLetters}`);
        return selectedLetters;
    }

    getAllButtons(column){
        let buttonList = [];
        let buttons = $(`#${column} button`).toArray();

        buttons.forEach(button => {
            let buttonObject = {
                selected: button.classList.contains('selected'),
                letter: button.textContent
            };
            buttonList.push(buttonObject);
        });
        
        console.log(`Passwords: getAllButtons() - column ${column}`);
        return buttonList;
    }

    selectButton = () => {
        $(event.currentTarget).toggleClass('selected');
        this.columnController();
        console.log(this.selectedLetters);
    }

    draw(){
        console.log("Passwords.draw(): drawing in canvas")
        $("#canvas").html(` <div class="row console" id="instructions">Instructions appear here.</div>
                            <div class="steel-plate container-fluid">
                                <div class="row">
                                    <div class="col password-column" id="0">
                                        <div class="row"><button class="steel-button">A</button></div>
                                        <div class="row"><button class="steel-button">B</button></div>
                                        <div class="row"><button class="steel-button">C</button></div>
                                        <div class="row"><button class="steel-button">E</button></div>
                                        <div class="row"><button class="steel-button">F</button></div>
                                        <div class="row"><button class="steel-button">G</button></div>
                                        <div class="row"><button class="steel-button">H</button></div>
                                        <div class="row"><button class="steel-button">L</button></div>
                                        <div class="row"><button class="steel-button">N</button></div>
                                        <div class="row"><button class="steel-button">O</button></div>
                                        <div class="row"><button class="steel-button">P</button></div>
                                        <div class="row"><button class="steel-button">R</button></div>
                                        <div class="row"><button class="steel-button">S</button></div>
                                        <div class="row"><button class="steel-button">T</button></div>
                                        <div class="row"><button class="steel-button">W</button></div>
                                    </div>
                                    <div class="col password-column" id="1">
                                        <div class="row"><button class="steel-button hidden">A</button></div>
                                        <div class="row"><button class="steel-button hidden">B</button></div>
                                        <div class="row"><button class="steel-button hidden">E</button></div>
                                        <div class="row"><button class="steel-button hidden">F</button></div>
                                        <div class="row"><button class="steel-button hidden">G</button></div>
                                        <div class="row"><button class="steel-button hidden">H</button></div>
                                        <div class="row"><button class="steel-button hidden">I</button></div>
                                        <div class="row"><button class="steel-button hidden">L</button></div>
                                        <div class="row"><button class="steel-button hidden">M</button></div>
                                        <div class="row"><button class="steel-button hidden">O</button></div>
                                        <div class="row"><button class="steel-button hidden">P</button></div>
                                        <div class="row"><button class="steel-button hidden">R</button></div>
                                        <div class="row"><button class="steel-button hidden">T</button></div>
                                        <div class="row"><button class="steel-button hidden">V</button></div>
                                    </div>
                                    <div class="col password-column" id="2">
                                        <div class="row"><button class="steel-button hidden">A</button></div>
                                        <div class="row"><button class="steel-button hidden">E</button></div>
                                        <div class="row"><button class="steel-button hidden">G</button></div>
                                        <div class="row"><button class="steel-button hidden">H</button></div>
                                        <div class="row"><button class="steel-button hidden">I</button></div>
                                        <div class="row"><button class="steel-button hidden">L</button></div>
                                        <div class="row"><button class="steel-button hidden">O</button></div>
                                        <div class="row"><button class="steel-button hidden">R</button></div>
                                        <div class="row"><button class="steel-button hidden">T</button></div>
                                        <div class="row"><button class="steel-button hidden">U</button></div>
                                        <div class="row"><button class="steel-button hidden">V</button></div>
                                    </div>
                                    <div class="col password-column" id="3">
                                        <div class="row"><button class="steel-button hidden">A</button></div>
                                        <div class="row"><button class="steel-button hidden">C</button></div>
                                        <div class="row"><button class="steel-button hidden">D</button></div>
                                        <div class="row"><button class="steel-button hidden">E</button></div>
                                        <div class="row"><button class="steel-button hidden">G</button></div>
                                        <div class="row"><button class="steel-button hidden">H</button></div>
                                        <div class="row"><button class="steel-button hidden">I</button></div>
                                        <div class="row"><button class="steel-button hidden">L</button></div>
                                        <div class="row"><button class="steel-button hidden">N</button></div>
                                        <div class="row"><button class="steel-button hidden">O</button></div>
                                        <div class="row"><button class="steel-button hidden">R</button></div>
                                        <div class="row"><button class="steel-button hidden">S</button></div>
                                        <div class="row"><button class="steel-button hidden">T</button></div>
                                        <div class="row"><button class="steel-button hidden">U</button></div>
                                    </div>
                                    <div class="col password-column" id="4">
                                        <div class="row"><button class="steel-button hidden">D</button></div>
                                        <div class="row"><button class="steel-button hidden">E</button></div>
                                        <div class="row"><button class="steel-button hidden">G</button></div>
                                        <div class="row"><button class="steel-button hidden">H</button></div>
                                        <div class="row"><button class="steel-button hidden">K</button></div>
                                        <div class="row"><button class="steel-button hidden">L</button></div>
                                        <div class="row"><button class="steel-button hidden">N</button></div>
                                        <div class="row"><button class="steel-button hidden">R</button></div>
                                        <div class="row"><button class="steel-button hidden">T</button></div>
                                        <div class="row"><button class="steel-button hidden">W</button></div>
                                        <div class="row"><button class="steel-button hidden">Y</button></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row console" id="commands">Select letters.</div>`
        );
        $('.password-column button.steel-button').on('click', this.selectButton);
    }
}