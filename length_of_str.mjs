function strLength(str){
    if(str.length===0) return 0;
    return strLength(str.slice(0,-1))+1;
}
let str = "abcdellklklk";
console.log(strLength(str));