var rounds = []
var rolls = []
function Game() {
  this.score = 0
}

Game.prototype.roll = function(number) {
    rolls.push(number)
}
