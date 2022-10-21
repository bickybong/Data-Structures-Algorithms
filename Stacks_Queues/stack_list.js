class Node {
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
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.bottom = newNode;
    }
    const holdingPointer = this.top;
    this.top = newNode;
    this.top.next = holdingPointer;
    this.length++;
    return this
  }
  pop() {
    if (!this.top){
        return null;
    }
    if (this.length === 1){
        this.bottom = null;
    }
    this.top = this.next;
    this.length--;
    return this
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Udemy");
myStack.peek();
myStack.pop();
myStack.push("google");
myStack.pop();
myStack.pop();


console.log(myStack);

//Discord
//Udemy
//google
