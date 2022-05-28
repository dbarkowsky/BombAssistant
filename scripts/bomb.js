class Bomb{
    serialEven;
    serialVowel;
    batteryCount;
    litIndicators;
    parallelPort;

    constructor (){
        this.serialEven = false;
        this.serialVowel = false;
        this.batteryCount = 0;
        this.litIndicators = [];
        this.parallelPort = false;

        $(".even-odd-button").on("click", this.evenOddButtons);
        $(".vowel-button").on("click", this.serialVowelButton);
    }

    evenOddButtons(){
        console.log(`Bomb: evenOddButtons() - ${this.id}`);

        // Set any buttons with this class to default
        $(".selected.even-odd-button").removeClass("selected");

        // Add the class back to the appropriate button
        $(this).addClass("selected");

        // Assign even or odd boolean based on id
        if ($(this).attr("id") == "even")
            this.serialEven = true;
        else
            this.serialEven = false;
    }

    serialVowelButton(){
        console.log(`Bomb: serialVowelButton() - ${this.value}`);

        // Set any buttons with this class to default
        $(".selected.vowel-button").removeClass("selected");

        // Add the class back to the appropriate button
        $(this).addClass("selected");

        // Assign even or odd boolean based on id
        if ($(this).attr("value") == 1)
            this.serialVowel = true;
        else
            this.serialVowel = false;
    }

    batteryCountButtons(){
        // Check if up or down button is pressed
        // Increment or decrement value appropriately
        // Update visual
    }

    litIndicatorButtons(){
        // Check if button pressed is already in the list
        // If so, remove selected style and remove from list
        // If not, add selected style and push to list
    }

    parallelPortButton(){
        // Check if button is already marked as selected
        // If so, removed selected and change to false
        // Otherwise, add selected and change to true
    }
}