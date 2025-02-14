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
  }
  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
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
    const leaderNode = this.traverse(index-1)
    const nextToLeaderNode = leaderNode.next
    const newNode = new NewNode(value)

    newNode.next = nextToLeaderNode
    leaderNode.next = newNode

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
    return currentNode
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
