/* 
  Sorted Union
  ============
  Joins unique elements of given arrays
  =====================================
*/

function uniteUnique(arr) {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result = [...result, ...arguments[i]];
  }
  return [...new Set(result)];
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
