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
    }

    evenOddButtons(){
        console.log(`Bomb: evenOddButtons() - ${this.id}`);

        //set any buttons with this class to default
        $(".selected").removeClass("selected");

        $(this).addClass("selected");

        if ($(this).attr("id") == "even")
            this.serialEven = true;
        else
            this.serialEven = false;
    }
}