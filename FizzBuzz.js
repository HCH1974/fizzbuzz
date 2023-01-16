for (var i=1 ; i <=105; i++)
{
    var display = ""

if ((i % 3) === 0) display = "Fizz"
if ((i % 5) === 0) display = display + "Buzz"
if ((i % 7) === 0) display = display + "Bang"

if (display === "")
    console.log(i);
else
    console.log(display);
}