/** Problem 1
 * orderInUnique('AABBBCcADEE') == ['A', 'B', 'C', 'c', 'A', 'D', 'E'];
 * orderInUnique('112233') == ['1', '2', '3'];
 *
 * var orderInUnique = function(iterable){
 *    // iterable may be string or array
 * }
 */

const orderInUnique = function (iterable) {
  let result = [];
  let newArray = [];

  if (iterable.constructor === String) {
    newArray = iterable.split("");
  } else if (iterable.constructor === Array) {
    newArray = iterable;
  }

  result = newArray.filter((val, idx) => {
    if (idx === 0) {
      // first index
      return val;
    } else {
      // other indexes other than first index
      if (newArray[idx] !== newArray[idx - 1]) {
        return newArray[idx];
      }
    }
  });
  return result;
};

console.log(orderInUnique(["A", "A", "B", "B", "C", "c", "A"]));
console.log(orderInUnique("AABBCcDABB"));
console.log(orderInUnique("112233"));

// =====================================================
