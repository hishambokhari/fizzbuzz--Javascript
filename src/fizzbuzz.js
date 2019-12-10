var Fizzbuzz = function() {};

Fizzbuzz.prototype.number = function(value) {

    if(value % 15 == 0) { return 'fizzbuzz'; };    
    if(value % 3 == 0) { return 'fizz'; };
    if(value % 5 == 0) { return 'buzz'; };
    return value;
};