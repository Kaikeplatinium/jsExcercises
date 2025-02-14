class NewNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.array = [];
    }
    push(value) {
      this.array.push(value)
    }
    pop(){
      this.array.pop()
      return this
    }
    peek(){
      return this.array[this.array.length - 1]
    }
    isEmpty(){
      if(this.array.length == 0){
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