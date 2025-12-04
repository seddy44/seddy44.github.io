var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // Declare our variables
        var circle;                 // temporary circle holder  
        var circles = [];           // array storing ALL circles


        // Function that draws ONE random circle
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }


        // Draw MANY circles (300)
        for (var i = 0; i < 300; i++) {
            drawCircle();
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        function update() {
            // Loop through array and update every circle
            for (var i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
        }
    

        // Reposition circles that drift off-screen
        game.checkCirclePosition = function(circle) {

            // RIGHT → LEFT
            if (circle.x > canvas.width) {
                circle.x = 0;
            }

            // LEFT → RIGHT
            if (circle.x < 0) {
                circle.x = canvas.width;
            }

            // BOTTOM → TOP
            if (circle.y > canvas.height) {
                circle.y = 0;
            }

            // TOP → BOTTOM
            if (circle.y < 0) {
                circle.y = canvas.height;
            }
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = init;
}
