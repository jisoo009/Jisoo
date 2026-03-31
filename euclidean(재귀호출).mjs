
function euclidean(num1, num2) {
    if (num2 === 0) return num1;   // 기저 조건
    return euclidean(num2, num1 % num2); // 재귀 호출
}

console.log(euclidean(78, 66));

//const euclieadn =function(num1, num2){
//   return (num2==0) ? num1 : euclieadn(num2, num1 % num2);
//}

// if(조건){
//     1
// }
// else{
//     2
// }
// (조건) ? 1: 2;

const euclieadn =function(num1, num2) => (num===0) ? num1:euclieadn(num2, num1 % num2);
console.log(euclidean(78, 66));

