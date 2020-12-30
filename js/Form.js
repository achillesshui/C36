class Form {
    constructor() {

    }
    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(100,30);

        var input = createInput('Enter Your Name:');
        input.position(100,250);

        var button = createButton('Start');
        button.position(250,400);
        button.mousePressed(function(){
            title.hide();
            input.hide();
            button.hide();

            var name = input.value();
            
            player.updateName(name);
            playerCount+=1;
            player.updateCount(playerCount);
            
            var hi = createElement('h3');
            hi.html("Hello"+ name);
            hi.position(100,250);
        });

    }
}