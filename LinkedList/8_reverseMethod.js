class NewNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index == 0) {
      this.prepend(value);
      return this;
    }
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    const leaderNode = this.traverse(index - 1);
    const nextToLeaderNode = leaderNode.next;
    const newNode = new NewNode(value);

    newNode.next = nextToLeaderNode;
    nextToLeaderNode.prev = newNode;
    leaderNode.next = newNode;

    this.length++;
    return this;
  }
  traverse(index) {
    let actualIndex = 0;
    let currentNode = this.head;
    while (actualIndex < index) {
      currentNode = currentNode.next;
      actualIndex++;
    }
    return currentNode;
  }
  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }
    const leaderNode = this.traverse(index - 1);
    const nodeToRemove = leaderNode.next;
    const nodeNext = nodeToRemove.next;

    leaderNode.next = nodeNext;
    this.length--;
    return this;
  }
  reverseKike() {
    if (this.length == 1) {
      return this;
    }
    let reversedLinkedList = new LinkedList(this.head.value);
    let actualIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (actualIndex > 0 && currentNode != null) {
        reversedLinkedList.prepend(currentNode.value);
      }
      actualIndex++;
      currentNode = currentNode.next;
    }
    this.head = reversedLinkedList.head;
    this.tail = reversedLinkedList.tail;
    this.length = reversedLinkedList.length;
    return this;
  }
  reverse() {
    if (this.length == 1) {
      return this;
    }
    let firstNode = this.head;
    this.tail = this.head
    let secondNode = this.head.next;
    this.head.next = null

    let counter = 0;
    while (secondNode) {
      let thirdNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = thirdNode;
      counter++;
    }
    this.head = firstNode
    return this;
  }
}

/*
  Primer Segundo
  1-2-3

  3-2-1
*/

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 99);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
