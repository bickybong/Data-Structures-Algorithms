class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (true) {
        if (value < curr.value) {
          // left
          if (!curr.left) {
            curr.left = newNode;
            return this;
          }
          curr = curr.left;
        } else {
          // right
          if (!curr.right) {
            curr.right = newNode;
            return this;
          }
          curr = curr.right;
        }
      }
    }
    //Code here
  }
  lookup(value) {
    if(!this.root){
        return false
    }
    let curr = this.root;
      while (curr) {
        if (curr.value === value){
            return curr
        }else if (value < curr.value) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
    }
    return false;
    //Code here
  }
  
  remove(value){ 
    // normally wont test
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// lvl 0: 2^0 = 1 nodes
// l1: 2^1 = 2
// l2: 2^2 = 4
// l3: 2^3 = 8
// no. of nodes = 2^h - 1
