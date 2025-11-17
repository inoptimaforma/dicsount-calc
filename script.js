// Второе д/з
var a = Number(prompt("Total sum"))


if (isNaN(a)) {
    alert("Invalid number")
} else if (a < 100) {
    alert("No discount")
} else if (a >= 100 && a < 500) {
    console.log(a - (a * (5 / 100)));
} else if (a >= 500 && a < 1000) {
    console.log(a - (a * (10 / 100)));
} else if (a >= 1000) {
    console.log(a - (a * (15 / 100)));
} else {
    alert("No discout")
}

// первое д/з
var a = 222
var b = "222"
var c

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a === b);
console.log(a == b);
console.log(a * c);
