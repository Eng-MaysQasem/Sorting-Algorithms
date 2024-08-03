function mergeSort(arr) {
  // If the array has less than two elements, return it as it's already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Calculate the middle index of the array
  var mid = Math.floor(arr.length / 2);

  // Recursively split the array into two halves: left and right
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid, arr.length));

  // Merge the two halves using recursion
  return merge(left, right);
}

// Function to merge two sorted halves using recursion
function merge(left, right) {
  // If the left half is empty, return the right half
  if (left.length === 0) {
    return right;
  }
  // If the right half is empty, return the left half
  else if (right.length === 0) {
    return left;
  }
  // Compare the first elements of both halves
  // If the left element is smaller, add it to the result and recursively merge the rest
  else if (left[0] < right[0]) {
    return [left[0]].concat(merge(left.slice(1), right));
  }
  // If the right element is smaller, add it to the result and recursively merge the rest
  else {
    return [right[0]].concat(merge(left, right.slice(1)));
  }
}

console.log(mergeSort([5, 1, 4, 2, 3])); // Output: [1, 2, 3, 4, 5]
//O(n log n) for all cases
//Divide-and-conquer algorithm
