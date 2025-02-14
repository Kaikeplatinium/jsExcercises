class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }
  dequeue() {
    const oldfirst = this.first;
    if (this.length <= 1) {
      this.first = null;
      this.last = null;
      this.length = 0
    } else {
      const newfirst = this.first.next;
      this.first = newfirst;
      this.length--;
    }
    return oldfirst;
  }
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

let myQueue = new Queue();
myQueue.enqueue("Enrique");
myQueue.enqueue("Abigail");
console.log(myQueue.peek());
console.log(myQueue);
