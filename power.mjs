function power(x,n){    //x: 밑수, n:지수
    
    if(n===0) return 1;
    return x*power(x,n-1);

}
console.log(power(3,7));