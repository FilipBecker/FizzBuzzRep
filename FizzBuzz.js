const start = 20
const end = 50

function FizzBuzz(st, ed) {
    for (var i = st; i <= ed; i++) {
        if (i % 7 === 0) {
            console.log("Boom");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

FizzBuzz(start, end)