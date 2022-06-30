class Passwords{
    words;
    selectedButtons;
    filteredWords;

    constructor (){
        this.words = ['about', 'after', 'again', 'below', 'could', 'every', 'first', 'found', 'great', 'house', 'large', 'learn', 'never', 'other', 'place', 'plant', 'point', 'right', 'small', 'sound', 'spell', 'still', 'study', 'their', 'there', 'these', 'thing', 'think', 'three', 'water', 'where', 'which', 'world', 'would', 'write'];
        this.selectedButtons = [[]]; // 2D array with columns 1-5 holding selected button content 
        this.filteredWords = [];
        draw();

        function columnController(){
            console.log("Passwords: columnController() - populating columns");
            populateColumn(2);
        }
    
        function getSelectedLetters(){
            for(let i = 0; i < 5; i++){
                this.selectedButtons[i] = getSelectedLettersInColumn(i);
            }
        }

        function getSelectedLettersInColumn(column){
            let selectedLetters = [];
            let selectedButtons = $(`#${column} .selected`).toArray();

            selectedButtons.forEach(button => {
                selectedLetters.push(button.textContent);
            });
            
            console.log(`Passwords: getSelectedButtonsInColumn() - column ${column}: ${selectedLetters}`);
            return selectedLetters;
        }

        function getAllButtons(column){
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

        function populateColumn(column){

        }
    
        // This is not optimal. Now outdated.
        function populateColumnOld(column){
            let selectedLetters = getSelectedLetters();
            let lettersToInsert = [];
            words.forEach(word => {
                let checkAgainstLetter = word.substring(column - 2, column - 1).toUpperCase();
                selectedLetters.forEach(letter => {
                    if (checkAgainstLetter === letter && !lettersToInsert.includes(checkAgainstLetter)){
                        lettersToInsert.push(word.substring(column - 1, column).toUpperCase());
                    }
                });
            });

            let existingButtons = getAllButtons(column);

            lettersToInsert.forEach(letter => {
                let letterAlreadyExists = false;
                existingButtons.forEach(button => {
                    if (letter === button.letter)
                        letterAlreadyExists = true;
                });

                if (!letterAlreadyExists){

                }

                // $(`#${column}`).append(`<div class="row"><button class="steel-button">${letter}</button></div>`);
            });
        }

        function selectButton(){
            $(this).toggleClass('selected');
            columnController();
        }

        function draw(){
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
            $('.password-column button.steel-button').on('click', selectButton);
        }
    }    
}