export class Stack<T> {
    container: T[] = [];

    constructor() {

    }

    push(data: T): void {
        this.container.push(data);
    }

    pop() {
        this.container.pop();
    }

    size() {
        return this.container.length;
    }
}