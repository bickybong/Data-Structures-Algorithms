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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }

  lookup(index) {
    //O(n)
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      this.length++;
      return this.append(value);
    }
    if (index === 0) {
      this.length++;
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.lookup(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    // check params
    if (index >= this.length) {
      return console.log("error, index out of range of linkedlist");
    }
    if (index === 0) {
      const nextHead = this.head.next;
      this.head.next = null;
      this.head = nextHead;
      this.length--;
      return this;
    }
    const leader = this.lookup(index - 1);
    const down2 = leader.next.next;
    leader.next = down2;
    this.length--;
    return this;
  }

  reverse(){
    if(!this.head.next){
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const newList = new LinkedList(10);
newList.append(8);
newList.prepend(3);
newList.insert(1, 6);
// newList.remove(0);
// newList.reverse();
newList.printList();
