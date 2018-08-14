var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"]


function addElementToBeginningOfArray(array,element) {
array.["foo", ...addElementToBeginningOfArray]
return array
}

function destructivelyAddElementToBeginnningOfArray(array, element) {
  array.unshift(element)
  return array
}