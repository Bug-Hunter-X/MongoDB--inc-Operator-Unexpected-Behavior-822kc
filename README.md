# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The `$inc` operator is designed to increment (or decrement) a numerical field in a document.  However, if the field doesn't exist, it will default to 0 before incrementing.  This can lead to unexpected behavior if you intend to create the field and set it to a specific initial value. 

## Bug
The provided `bug.js` file shows an incorrect application of `$inc`.  The `field` may not already exist in the collection. This leads to the field being initialized to 0 before incrementing, causing unexpected results. 

## Solution
The solution is presented in `bugSolution.js`. It shows a proper method of handling the case where a field might not exist using the $setOnInsert operator with the $inc operator for proper behavior when initializing and incrementing a value in a single step.