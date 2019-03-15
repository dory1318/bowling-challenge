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

  it('score will be 9 after rolling 2, then rolling 7', function() {
    var game = new Game();
    game.roll(2);
    game.roll(7);
    expect(game.score).toEqual(9);
  })

  it('is a gutter game', function() {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  })

  it('is a perfect game', function() {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(10);
    }
    expect(game.score).toEqual(200);
  })
});
