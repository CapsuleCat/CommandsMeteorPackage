class TestCommand {
  constructor(s) {
    this.s = s;
  }

  handle() {
    return this.s + '-out';
  }
}

describe('dispatch', function () {
  it('can dispatch a command', function () {
    var out = dispatch(TestCommand, 'in');
    expect(out).toBe('in-out');
  });

  it('can dispatch a asynchronous command', function () {
    dispatchAsync(TestCommand, 'in', function (result) {
      expect(result).toBe('in-out');
      done();
    });
  });
});