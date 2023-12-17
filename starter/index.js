var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

/* Outline:
The given dataset is provided as a nested array of key-value pairs comprising a text string and a number. The text string is a date in the form "Mon-Year" and the number, assumed to be an integer being the monthy profit or loss. Profit positive, losses negative

We are required to find: 
  The total number of months in the given dataset.
    This will be given by the length of the array (watch for boundary conditions and zero indexing).
  The net total of P/L over the entire period.
    A quick glance suggests the full total of all the numeric fields gives this! 
  The average of changes in the P/L amounts over the whole period.
    A two stage process suggested in the README:
      Track the changes in P/L from month to month (delta).
      Find the average of those changes (Total {of deltas}/(Number of months - 1)).
        Note there is a boundary condition, the first value has no known delta as we don't have the previous month's figure, hence the -1 above.
      Find the greatest increase in P/L (date and amount) over the period.
      Find the greatest decrease .........................................

      Console output is acceptable, that's all the given index.html would provide!

      Financial Analysis
      ------------------
      Total Months:
      Total P/L: £
      Average Change: 
      Greatest Increase in P/L: 'date0 string' £ **** Do not use brackets ****
      Greatest Decrease in P/L: 'date0 string' £ **** Do not use brackets ****

      num.toFixed(2) appears a likey method to round (floaty ill-defined numbery things) to display as 2 decimal places. At least as long as no concatenation provoked type changing happens!
*/

/* Pseudocode:

Find the number of entries in the dataset, this is the number of months which can be asigned to a variable for use in the output and calculations.

Iterate over the array, adding the P/L amounts to a running total which will gbe the net P/L for the whole period. (No, use an array method for this!)

Calculate the values for delta, starting with first month to second month, dated as second month. Store these values for later analysis. (Or use Laura's repeated comparison method?)

Calculate average delta. Numerator is P/L total *** minus first month which is not in the average! (Or total of deltas, but not raw total P/L)

Search for highest and lowest deltas (or just order the array and take start and finish?)

There's going to be fun with array indexing...

Print everything to the console.
*/

/* Ideas from Laura's pseudocode:

Running on a couple of different principles; one iteration over the array, creating a rolling total of P/L and also looking for greatest positive and negative deltas. For deltas need current and previous, or current and next.

variables neeeded:
  total number of months   ** Can be found from array length
  rolling total of profits ** Doesn't appear to be used for anything.
  greatest positive delta  ** Because these need to be linked with the month,
  greatest negative delta  ** an iterative approach is probably OK.
  average delta
loop variables
  current and previous data points. (Array indexing.)

*/

// Experimental code here: 

/*https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/

const myNums=[1,2,3,4,-5];

const myfinance=

let sum = 0;

finances.forEach( num => {
  sum += num;
})

console.log(sum)

// Works well on pure numbers, has trouble with strings! How do I split the numerical data out of array? Returning tuples, need to drop first element
*/

// let sum = 0;
// finances.forEach( num => {
//   sum += num;
//   console.log(finances[0][1]); // read from nested arrays
// })

// Go for the conceptually easier for loop <<====================

// create an array
// let myNums = [1, 2, 3, 4, 5];

// create a variable for the sum and initialize it


/* iterate over each item in the array and add to summary variable show index to check function
for (let i = 0; i < finances.length; i++ ) {
  periodNetPL += finances[i][1];
  console.log(periodNetPL, i) 
}
*/

// now to think about calculating deltas using previous and current indexes starting at one 

// delta = current month P/L less previous month P/L

let periodNetPL = 0;
let delta = 0;
let sigmaDelta = 0;
//loop here 

// finances[i][1] - finances[i-1][1] // works as we start from item one!
// log date finances[i][0] and delta 

for (let i = 1; i < finances.length; i++ ) {
  periodNetPL += finances[i][1];
  delta = finances[i][1] - finances[i-1][1];
    sigmaDelta += delta;

  console.log(i + ", " + finances[i][0] + ", " + finances[i][1] + ", " + finances[i-1][1] + ", " + delta );
  console.log(`Differences total ${sigmaDelta}`) 
}


// Looking good but not formally sanity checked

// Provisional output 

console.log("Results table \n -----------")
console.log(`Overall ${periodNetPL+867884}`) //error here as misses january off - don't use value from loop here with start at one change variable name
console.log("Number of months will be array length " + finances.length)
console.log(`Average delta ${(sigmaDelta / (finances.length -1)).toFixed(2)}`)

// Sharp idea - output a comma-separated list to load into spreadsheet for sanity check. Also start using the nice template output system. Well good, helped find boundary errors.

// Pinch the array traversal for min/max from W3 schools? https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_max Would then have to go back searching for the value. Really need one that returns the index!

// Based on https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array


const testArray=[["junk", 1],["trash",3],
["trash",15],["trash",9],["trash",4]]


function indexOfMax(arr) {
  // if (arr.length === 0) {
  //     return -1;
  // }

  var max = arr[0][1];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i][1] > max) { //need to change to calc for delta 
          maxIndex = i;
          max = arr[i][1];
      }
  }

  return {index:maxIndex, value:arr[maxIndex][1]}; // Return a data object with the cash figure and the month or the array position.
}



let maxPos = indexOfMax(finances)

console.log(maxPos)

// console.log(finances[maxPos]) // Or redo the delta calculation here

// accidentally searched for highest sales, not delta presumably have to run over sigmaDelta.... sigmaDelta isn't stored in the array so need to test during iteration and record until max/min value and position logged.