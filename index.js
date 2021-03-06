var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "Area l = " + l + " and b = " + b + " is " + rectangle.area()
      );
      console.log(
        "Perimeter l = " + l + " and b = " + b + " is " + rectangle.perimeter()
      );
    }
  });
  console.log("This statement after the call to rect()");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
