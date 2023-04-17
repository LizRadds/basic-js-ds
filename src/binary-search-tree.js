const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');
class Node{
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (this._root === null){
      this._root = node
    } else{
      let current = this._root
      while(true){
        if(data < current.data){
          if(current.left === null){
            current.left = node;
            break
          }else{
            current = current.left
          }
        } else if
        (data > current.data) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
    
  }

  has(data) {
    let current = this._root
    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this._root === null) {
      return null;
    }
    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }
    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};