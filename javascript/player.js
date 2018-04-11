(function(root) {

  // "class" is like "object" but they store functions and constructors
  // Chacter is stored in root. Get character key from root object
  class Player extends root.Character {

    // constructor is a s special function - called whenever a class is called
    // pass these values into constructor
    // needs matching arguments
    // ...args pass all argments through that function
    constructor(_opts) {
      // "super" overload by making a function with the same name
      // tells it to go to the parent constructor (character)
      super(Object.assign({
        imageSource: 'assets/images/pacman.svg'
      }, _opts || {}));

      // Add our player class
      this.addClasses('player');

      // KEYBOARD EVENT LISTENERS
      document.addEventListener('keydown', (event) => {
        //pacman1
        if (event.code === 'Space') {
          this.directionX = 0;
          this.directionY = 0;
        } else if (event.code === 'ArrowLeft') {
          this.directionX = -0.01;
          this.directionY = 0;

          //Remove all direction classes
          this.resetDirection();

          // Add our new direction class
          this.addClasses('direction-left');

        } else if (event.code === 'ArrowRight') {
          this.directionX = 0.01;
          this.directionY = 0;
          this.resetDirection();
          this.addClasses('direction-right');
        } else if (event.code === 'ArrowUp') {
          this.directionY = -0.01;
          this.directionX = 0;
          this.resetDirection();
          this.addClasses('direction-up');
        } else if (event.code === 'ArrowDown') {
          this.directionY = 0.01;
          this.directionX = 0;
          this.resetDirection();
          this.addClasses('direction-down');
        }
      }, true)
    }
  }

  // every exprssion has a result
  // object = result
  root.Player = Player;

})((window.root) ? window.root : (window.root = {}));
