class Symbols {
  constructor() {
    this.draw();
  }

  // Adds selected class to symbol and call update function
  symbolSelected = () => {};

  // Assessed currently selected symbols, updates disabled symbols, sees if order can be decided
  update = () => {};

  // Toggles a single symbol on or off depending on whether linked symbols are selected
  toggleDisabled = () => {};

  // Gets all selected symbols
  getSelected = () => {};

  // Prints order to order stack
  printOrder = () => {};

  draw() {
    console.log('Symbols.draw(): drawing in canvas');
    $('#canvas').html(`Not yet implemented.`);
  }
}
