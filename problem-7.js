function make_avg(integer1, integer2, integer3) {
    var total = integer1 + integer2 + integer3;
    var avarege = total / 3;
    return avarege;
}

var integer1Marks = 33;
var integer2Marks = 55;
var integer3Marks = 56;

console.log(make_avg(integer1Marks, integer2Marks, integer3Marks));