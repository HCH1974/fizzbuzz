for (var i=1 ; i <=100; i++)
{
    var display = ""

if ((i % 3) === 0) display = "Fizz"
if ((i % 5) === 0) display = display + "Buzz"
if ((i % 7) === 0) display = display + "Bang"

/*
    if ((i % 3) === 0) {console.log("Fizz")
    }
    if ((i % 5) === 0) {console.log("Buzz")
    }
    if ((i % 7) === 0) {console.log("Bang")
    }      
  */
    console.log(display);
    console.log(i);
}