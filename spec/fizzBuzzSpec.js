describe('Testing FizzBuzz', function(){

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("It returns 1 when passed 1", function(){
    expect(fizzBuzz.play(1)).toEqual(1);
  });
  it("It returns 2 when passed 2", function(){
    expect(fizzBuzz.play(2)).toEqual(2);
  });
  it("It returns Fizz when passed 3", function(){
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });
  it("It returns Fizz when passed 6", function(){
    expect(fizzBuzz.play(6)).toEqual('Fizz');
  });
});