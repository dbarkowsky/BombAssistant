class ComplicatedWires {
  constructor() {
    this.draw();
  }

  draw() {
    console.log('ComplicatedWires.draw(): drawing in canvas');
    $('#canvas').html(`
    <div class="row console" id="instructions">Cut wires if your bomb has the matching attributes.<br>Change bomb settings if needed.</div>
        <div class="steel-plate container-fluid">
          <div id="complex-always" class="row white py-3 border border-secondary border-2">
            <div class="col-md-3 complex-words"><p class="h3">Always Cut</p></div>
            <div class="col row">
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white-red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
            </div>
          </div>
          <div id="complex-serial" class="row white py-3 border border-secondary border-2">
            <div class="col-md-3 complex-words"><p class="h3">Serial is Even</p><p id="serial-note"></p></div>
            <div class="col row">
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire red"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white-red"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire blue"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white-blue"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire red-blue"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire red-blue"></div>
                <div class="complex-star rounded"></div>
              </div>
            </div>
          </div>
          <div id="complex-parallel" class="row white py-3 border border-secondary border-2">
            <div class="col-md-3 complex-words"><p class="h3">Parallel Port</p><p id="parallel-note"></p></div>
            <div class="col row">
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire red-blue"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire blue"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire white-blue"></div>
                <div class="complex-star rounded"></div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire blue"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire white-blue"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
            </div>
          </div>
          <div id="complex-batteries" class="row white py-3 border border-secondary border-2">
            <div class="col-md-3 complex-words"><p class="h3">Two or more batteries</p><p id="batteries-note"></p></div>
            <div class="col row">
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire white"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light"></div>
                <div class="complex-wire white-red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
              <div class="col complex-wire-column">
                <div class="complex-light-on"></div>
                <div class="complex-wire white-red"></div>
                <div class="complex-star rounded">⭐</div>
              </div>
            </div>
          </div>
        </div>
        `);
  }

  // Updates the notes in each section
  updateNotes = () => {
    console.log('ComplicatedWires.updateNotes()');
    // Is serial set?
    if ($('#odd').hasClass('selected')){
      $('#serial-note').html('Set to odd. Don\'t cut! ❌');
    } else if ($('#even').hasClass('selected')){
      $('#serial-note').html('Set to even. Cut! ✔');
    } else {
      $('#serial-note').html('Not set. Don\'t cut! ❌');
    }

    // Is parallel port set?
    if ($('#parallel-false').hasClass('selected')){
      $('#parallel-note').html('Set to false. Don\'t cut! ❌');
    } else if ($('#parallel-true').hasClass('selected')){
      $('#parallel-note').html('Set to true. Cut! ✔');
    } else {
      $('#parallel-note').html('Not set. Don\'t cut! ❌');
    }

    // How many batteries are there?
    if ($('#battery-display').attr('value') >= 2){
      $('#batteries-note').html('Set to two or more. Cut! ✔');
    } else {
      $('#batteries-note').html('Set below two. Don\'t cut! ❌');
    }
  }

  // Repeats an interval so notes are frequently updated.
  runInterval = () => {
    return setInterval(this.updateNotes, 1000);
  }
}
