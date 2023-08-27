// two number of sum
//use function, Rest operator and foreach another function to give sum

function sum(params1, params2) {
  return params1 + params2;
}
console.log(sum(1, 2));
function totalSum(...params1) {
  let total = 0;
  params1.forEach((perElement) => {
    total += perElement;
  });
  return total;
}

console.log(totalSum(5, 6, 8, 11));
