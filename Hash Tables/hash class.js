// create a hashtable
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    // fast loop so O(1)
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentbucket = this.data[address];
    if (currentbucket) {
      //usually O(1)
      for (let arrs of currentbucket) {
        if (arrs[0] === key) {
          console.log(arrs[1]);
          return arrs[1];
        }
      }
    }
    return undefined;
  }

  keys() { //O(n)
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    console.log(keysArr);
    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9532);
myHashTable.set("pears", 6);
// myHashTable.get("apples");
// myHashTable.get("grapes");
myHashTable.keys();
