class NewNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    push(value) {
      const newNode = new NewNode(value);
      this.length++;
      if (this.top == null) {
        this.top = newNode;
        this.bottom = newNode
        return this;
      }
      newNode.next = this.top
      this.top = newNode;
      return this;
    }
    pop(){
      this.top = this.top.next
      this.length--;
      if(this.length == 0){
        this.bottom = null
      }
    }
    peek(){
      return this.top.value
    }
    isEmpty(){
      if(this.length == 0){
        return true
      }else{
        return false
      }
    }
  }
  
  let myStack = new Stack();
  console.log(myStack.isEmpty())
  myStack.push("Amazon");
  myStack.push("Twitter");
  myStack.push("Udemy");
  myStack.pop()
  console.log(myStack.peek())
  
  console.log(myStack);