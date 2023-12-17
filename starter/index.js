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

The given dataset is provided as a nested array of key-value pairs comprising a text string and a number. The text string is a date in the form "Mon-Year" and the number, assumed to be an integer being the monthly profit or loss. Profit positive, losses negative.

We are required to find: 
  The total number of months in the given dataset.
    This will be given by the length of the array.
  The net total of P/L over the entire period.
    A quick glance shows the full total of all the numeric fields gives this.
  
  The average of changes in the P/L amounts over the whole period.
    A two stage process suggested in the README:
      Track the changes in P/L from month to month (delta).
      Find the greatest increase in P/L (month period and amount) over the period.
      Find the greatest decrease .........................................
      Find the average of those changes (Total of deltas/(Number of months - 1)). Note there is a boundary condition, the first value has no known delta as we don't have the previous month's figure, hence the -1 above.
      
Console output is acceptable, that's all the given index.html would provide!
  It should look something like the following:

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

The number of entries in the dataset - array length - is the number of monthly periods for the required output and calculations.

Iterate over the array, adding the P/L amounts to a running total which will gbe the net P/L for the whole period. 

Iterate over the array, calculating the deltas and their sum. Use comparison operators to find and store the minimun and maximum values with the month period.

Calculate average delta. Total delta over number of deltas. Note boundary condition, number of deltas is one less than length of array.


Print everything to the console.
*/

// Sharp idea - output a comma-separated list to load into spreadsheet for sanity check. Also start using the nice template output system. Well good, helped find boundary errors.

/* Ideas from Laura's pseudocode:

variables neeeded:
  total number of months   ** Can be found from array length
  rolling total of profits ** Doesn't appear to be used for anything.
  greatest positive delta  ** Because these need to be linked with the month,
  greatest negative delta  ** an iterative approach is probably OK.
  average delta            ** Watch for that boundary problem.
loop variables
  current and previous data points. (Array indexing.)

*/

// *** Start of code ***

// delta = current month P/L less previous month P/L

let periodNetPL = 0;
let delta = 0;
let sigmaDelta = 0;
let maxDelta = 0;
let minDelta = 0;
let maxDeltaMonth = "";
let minDeltaMonth = "";
let avgSigmaDelta = 0;

// simple loop here to calculate sum of P/L for all periods

for (var i = 0; i < finances.length; i ++ ) {
  periodNetPL += finances[i][1]
}

// Loop to find total delta (for use in average) plus maximum and minimum for delta and the months in which they occur. NB no protection against duplicate values.


// finances[i][1] - finances[i-1][1] works as we start from item one!

for (let i = 1; i < finances.length; i++ ) {

  delta = finances[i][1] - finances[i-1][1];
    sigmaDelta += delta;

    if (maxDelta < delta) {
      maxDelta = delta;
      maxDeltaMonth = finances[i][0];
    }

    if (minDelta > delta) {
      minDelta = delta;
      minDeltaMonth = finances[i][0];
    }
}

avgSigmaDelta = sigmaDelta / (finances.length -1)

// Output 

console.log("Results table \n -----------")
console.log(`Number of months in dataset ${finances.length}`)
console.log(`Overall P/L ${periodNetPL.toLocaleString("en-gb", {style: "currency", "currency": "GBP", currencySign: "accounting"})}`)
console.log(`Average change in monthly P/L ${avgSigmaDelta.toLocaleString("en-gb", {style:"currency", currency:"GBP", currencySign: "accounting"})}`)
console.log(`Greatest monthly increase in P/L ${maxDelta.toLocaleString("en-gb", {style:"currency", currency:"GBP"})} in ${maxDeltaMonth}`)
console.log(`Greatest monthly decrease in P/L ${minDelta.toLocaleString("en-gb", {style:"currency", currency:"GBP", currencySign: "accounting"})} in ${minDeltaMonth}`)





