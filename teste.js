var book = {

    topic: "javascript",
    fat: true
};
book.author = "Flanagen";
console.log(book.author);

var empty = [];
empty.length;

var x = 3, y = 5;

console.log(false == (x > y));

function abs(x) {

    if (x >= 0) {

        return x;

    } else {

        return -x;
    }
}

console.log(abs(23.6));

function factorial(n) {

    var product = 1;

    while (n > 1) {

        product *= n;
        n--;
    }

    return product;
}

console.log(factorial(5));

function Point(x,y) {

    this.x = x;
    this.y = y;
}

var p = new Point(1,1);

Point.prototype.r = function() {

    return Math.sqrt(
        this.x * this.x +
        this.y * this.y
    );
};

p.r()