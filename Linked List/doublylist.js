class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      back: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      back: null,
    };
    this.tail.next = newNode;
    newNode.back = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
      back: null,
    };
    this.head.back = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.back = leader;
    follower.back = newNode;
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
}

const newList = new DoublyLinkedList(10);
newList.append(8);
newList.prepend(3);
newList.append(23);
newList.insert(1, 6);
// newList.remove(8);
console.log(newList);
newList.printList();
