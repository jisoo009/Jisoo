//for문을 이용해서 배열의 합 구하기 -상향식
//function sumarray(arr){
//    let sum=0;
//    for(let i=0;i<arr.length;i++){
//        sum+=arr[i];
        
//    }
//    return sum;
//}
//let arr=[1,2,3,4,5];
//console.log(sumarray(arr));

//재귀함수를 이용해서 배열의 합 구하기 - 하향식

function sumarray(arr){
    if(arr.length===1)return arr[0];        //기저 조건
    return arr[arr.length-1] + sumarray(arr.slice(0,-1));
}
let arr=[1,2,3,4,5];
console.log(sumarray(arr));