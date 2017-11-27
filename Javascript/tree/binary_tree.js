const util = require('util')

class Node {
  constructor(val) {
    this.data = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
}

BinarySearchTree.prototype.push = function (val) {
  const root = this.root

  if (!root) {
    this.root = new Node(val)
    return
  }

  let currentNode = root
  const newNode = new Node(val)

  while (currentNode) {
    if (val < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = newNode
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }

}

const bst = new BinarySearchTree()
bst.push(3)
bst.push(2)
bst.push(4)
bst.push(1)
bst.push(5)
bst.push(7)


console.log(util.inspect(bst, false, null))
