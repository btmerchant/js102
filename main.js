
var exampleArray1 = ["red", "green", "purple", "amber"];
var exampleArray2 = [7, 34, 9, 1, 3, 29, ];
console.log("origonal array= ", exampleArray1);
var processedArray = [];
sortArray1(exampleArray1);
sortArray2(exampleArray2);
console.log("Processed Array= ", processedArray);


function sortArray1(sourceArray) {
    console.log("in the sort function");
    var work = sourceArray;
    console.log("Work array= ", work);
    work = work.sort(work);
    return work;
}

function sortArray2(sourceArray) {
    var work = sourceArray;
    console.log("S2 workArray= ", work)
    for (var i = work.length - 1; i >= 0; i--) {
        if (work[i] < 25) {work[i].remove();};
        console.log(work[i]);
        console.log("Process2Array= ", work);
        return work;
    }
}


