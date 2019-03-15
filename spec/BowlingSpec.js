describe('Bowling', function(){
  it('score starts from 0', function() {
    var game = new Game();
    expect(game.score).toEqual(0);
  })

  it('score will be 2 after rolling 2', function() {
    var game = new Game();
    game.roll(2)
    expect(rolls).toContain(2);
  })

  it('rolls array have elements 2 and 7 after rolling 2 and 7', function() {
    var game = new Game();
    game.roll(2);
    game.roll(7);
    expect(rolls).toContain(2,7);
  })

  it('is a gutter game', function() {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  })
});
