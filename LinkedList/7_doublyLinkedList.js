class NewNode {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = leaderNode;
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
    nodeNext.prev = leaderNode;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(3, 99);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());
