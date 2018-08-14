var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"]

var addElementToBeginningOfArray = [1];
const array = ["foo", ...addElementToBeginningOfArray]
console.log(array)

function destructivelyAddElementToBeginnningOfArray(array, element) {
  array.unshift(element)
  return array
}