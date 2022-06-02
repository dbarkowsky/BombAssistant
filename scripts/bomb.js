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
        $('.battery-button').on('click', this.batteryCountButtons);
        $('.indicator-button').on('click', this.litIndicatorButtons);
        $('.parallel-port-button').on('click', this.parallelPortButton);
    }

    evenOddButtons(){
        console.log(`Bomb: evenOddButtons() - ${this.id}`);

        // Set any buttons with this class to default
        $(".selected.even-odd-button").removeClass("selected");

        // Add the class back to the appropriate button
        $(this).addClass("selected");
    }

    serialVowelButton(){
        console.log(`Bomb: serialVowelButton() - ${this.value}`);

        // Set any buttons with this class to default
        $(".selected.vowel-button").removeClass("selected");

        // Add the class back to the appropriate button
        $(this).addClass("selected");
    }

    batteryCountButtons(){
        console.log(`Bomb: batterCountButtons()`);
        // Get current value
        let currentValue = parseInt($('#battery-display').attr('value'));
        // Check if up or down button is pressed
        // Increment or decrement value appropriately
        if ($(this).attr('id') == 'battery-up'){
            currentValue++;
        } else {
            currentValue--;
        }
        // Update visual and value
        $('#battery-display').html(currentValue);
        $('#battery-display').attr('value', currentValue);
    }

    litIndicatorButtons(){
        console.log(`Bomb: litIndicatorButtons()`);

        // Toggle the class on the appropriate button
        $(this).toggleClass("selected");
    }

    parallelPortButton(){
        console.log(`Bomb: parallelPortButton()`);
        
        // Set any buttons with this class to default
        $(".selected.parallel-port-button").removeClass("selected");

        // Add the class back to the appropriate button
        $(this).addClass("selected");
    }
}