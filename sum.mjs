function sum(n) {
    if (n === 1) return 1;  // 기저 조건
    return n + sum(n - 1);  // 재귀
}

console.log(sum(5)); // 15