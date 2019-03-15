function Game() {
  this.score = 0
}

Game.prototype.roll = function(number) {
  this.score += number;
}
