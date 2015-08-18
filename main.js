$("document").ready(function() {
  $(document).on("click", "#button", function() {
      console.log("Got a Button Click");

  });





});

var exampleArray1 = ["red", "green", "purple", "amber"];
var exampleArray2 = [7, 34, 9, 1, 3, 29, ];
console.log("origonal array= ", exampleArray1);

sortArray1(exampleArray1);
sortArray2(exampleArray2);


function sortArray1(sourceArray) {
    console.log("*** In the sort function Process 1 ***");
    var work = sourceArray;
    console.log("Work array= ", work);
    work = work.sort(work);
    console.log("Processed array 1 = ", work);
    console.log("");
    return work;
}

function sortArray2(sourceArray) {
    console.log("*** in the sort function Process 2 ***");
    var work = sourceArray;
    console.log("S2 workArray= ", work)
    for (var i = work.length - 1; i >= 0; i--) {
      console.log("Value of I  =", i);
        if (work[i] < 25) {
          delete work[i];
          console.log("        Removing Work Array Element #", i);
        }
    }
    console.log("");
      return work;
}


/*
  1. Create a new Github project named js102.
  2. Create a ~/workspace/js102 directory on your host machine.
  3. Initialize the ~/workspace/js102 directory as a git project and attach it to your js102 Github project.

  4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you passed in that are larger than 25.

  6. Create a simple HTML form that has one input box and one button.
  7. Attach an event handler to the button click.
  8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that sorts the array.
  12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).

  13. Give each <div> a class of "number".
  14. Write a CSS class that changes the font color of the even elements to red.
  15. Write a CSS class that changes the background color of the odd elements to azure.

  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/


/*
  Create an `xmas` function that accepts an integer
  as an argument. The function should create a Christmas
  tree out of asterisks in the browser console. The
  height is whatever is passed as an argument to the
  function.

  Example output with argument value of 5 (i.e. xmas(5);)

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.
//function ... {

//}

//xmas();






