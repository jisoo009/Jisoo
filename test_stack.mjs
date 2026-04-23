import { Stack } from "./stack.mjs";

// let stack = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack);

// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// stack.pop();
// console.log(stack);


// stack.pop();
// stack.pop();
// stack.pop();

let stack = new Stack();
// console.log("===== 첫번째 출력 =====");
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack.pop().data);
// console.log(stack.pop().data);
// console.log(stack.pop().data);
// console.log(stack.pop().data);

// console.log(stack.pop());


console.log("===== 두번째 출력 =====");
stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");

stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek().data);

stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`); 
