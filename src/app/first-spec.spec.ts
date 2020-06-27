describe('my first test', () => {
  let sut; //System under test

  //beforeEach helps make sure that the system (in this case sut) is restarted every time.
  beforeEach(() => {
    sut = {}
  })

  it('should be true if true', () => {
    // arrange A
    sut.a = false;

    // act
    sut.a =  true;

    // assert AAA
    expect(sut.a).toBe(true);
  });
});
