/* 
        9
    4       20
1    6   15     170
*/

// BFS [9,4,20,1,6,15,170]

// Stack Queues
// Recursion
// BFS DFS Trees 
// https://leetcode.com/problems/number-of-islands/description/


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
                                } else {
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
                                } else {
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
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        
        while (queue.length > 0) {
            console.log(queue);
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        let currentNode = this.queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }
    DFSInorder() {
        return traverseInOrder(this.root, []);
    }
    DFSPostorder() {
        return traversePostOrder(this.root, []);
    }
    DFSPreorder() {
        return traversePreOrder(this.root, []);
    }
}
/* 
        9
    4       20
1    6   15     170
*/

// InOrder [1,4,6,9,15,20,170] Ordered
// PreOrder [9,4,1,6,20,15,170] Recreate a tree
// PostOrder [1,6,4,15,170,20,9] 

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }

    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }

    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
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
// console.log(tree.DFSInorder());
// console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
console.log(tree.breadthFirstSearch());

/* 
1    1
2   3  
3   7
4   15
5   31
*/