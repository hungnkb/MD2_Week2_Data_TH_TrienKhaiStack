import { Stack } from "./Stack";

let newStack = new Stack()

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);

console.log(newStack.container.length);
console.log(newStack.container.pop());
console.log(newStack.container.length);