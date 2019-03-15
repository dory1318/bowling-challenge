describe('Bowling', function(){
  it('has a Game class', function(){
    var game = new Game();
  });

  it('Game class has roll function', function() {
    var game = new Game();
    game.roll();
  });

  it('score starts from 0', function() {
    var game = new Game();
    expect(game.score).toEqual(0);
  });

  it('score will be 2 after rolling 2', function() {
    var game = new Game();
    game.roll(2)
    expect(game.score).toEqual(2);
  })
});
