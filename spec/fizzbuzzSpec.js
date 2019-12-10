describe('Fizzbuzz', function() {
    var  fizzbuzz;

    it("should be divisible by 3", function() {
    fizzbuzz = new Fizzbuzz();    
    expect(fizzbuzz.number(3)).toEqual('fizz');
    });

    it("should be divisible by 5", function() {
        fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.number(5)).toEqual('buzz');
    });

    it("should be divisible by 15", function() {
        fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.number(15)).toEqual('fizzbuzz');
    });
});

