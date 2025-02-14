class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root;
  }
  lookup(value) {
    if (this.root == null) {
      return this.root;
    } else {
      let foundRoute = false;
      let currentNode = this.root;
      while (foundRoute == false) {
        if (value == currentNode.value) {
          return this.root;
        } else {
          if (value < currentNode.value) {
            if (currentNode.left == null) {
              return null;
            } else {
              console.log(currentNode.left.value);
              if (value == currentNode.left.value) {
                return currentNode.left;
              } else {
                currentNode = currentNode.left;
              }
            }
          } else {
            if (currentNode.right == null) {
              return null;
            } else {
              if (value == currentNode.right.value) {
                return currentNode.right;
              } else {
                currentNode = currentNode.right;
              }
            }
          }
        }
      }
    }
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let foundRoute = false;
      let currentNode = this.root;
      while (foundRoute == false) {
        if (value == currentNode.value) {
          return this;
        } else {
          if (value < currentNode.value) {
            if (currentNode.left == null) {
              currentNode.left = newNode;
              return this;
            } else {
              currentNode = currentNode.left;
            }
          } else {
            if (currentNode.right == null) {
              currentNode.right = newNode;
              return this;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }
  remove(value) {
    if (this.root == null) {
      return this.root;
    } else {
      let foundRoute = false;
      let currentNode = this.root;
      while (foundRoute == false) {
        if (value == currentNode.value) {
          const borrado = this.root;
          this.root = null;
          return borrado;
        } else {
          if (value < currentNode.value) {
            if (currentNode.left == null) {
              return null;
            } else {
              if (value == currentNode.left.value) {
                const borrado = currentNode.left;
                if (currentNode.left.right != null) {
                  currentNode.left = currentNode.left.right;
                  currentNode.left.left = borrado.left;
                }else{
                  currentNode.left = borrado.left;
                }
                return borrado;
              } else {
                currentNode = currentNode.left;
              }
            }
          } else {
            if (currentNode.right == null) {
              return null;
            } else {
              if (value == currentNode.right.value) {
                const borrado = currentNode.right;
                if (currentNode.right.left != null) {
                  currentNode.right = currentNode.right.left;
                  currentNode.right.right = borrado.right;
                }else{
                  currentNode.right = borrado.right;
                }
                return borrado;
              } else {
                currentNode = currentNode.right;
              }
            }
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(1);
tree.insert(20);
tree.insert(20);
tree.insert(15);
tree.insert(170);
console.log(tree.lookup(170));
console.log(tree.remove(4));
console.log(tree.remove(20));
console.log(tree.remove(6));
console.log(tree.remove(15));
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
