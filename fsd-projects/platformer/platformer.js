$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(600, 600, 40, 19, "orange");
    createPlatform(400, 400, 39, 18, "blue");
    createPlatform(600, 300, 39, 20, "purple");
    createPlatform(900, 400,39,20, "yellow");
    createPlatform(1100, 300,39,20, " red");
    createPlatform(900, 200,39,20," pink");

    // TODO 3 - Create Collectables

    createCollectable("diamond", 700, 400);
    createCollectable("steve", 1000, 400);
    createCollectable("max", 800, 200);

    // TODO 4 - Create Cannons
    createCannon("left", 300);
    createCannon("top", 800);
    createCannon("top", 1100);
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
