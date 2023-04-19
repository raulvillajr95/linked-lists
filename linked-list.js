class LinkedList {
  list = [];

  append(value) {
    this.list.push(new Node(value));
  }

  prepend(value) {
    this.list.unshift(new Node(value));
  }

  size() {
    return this.list.length;
  }

  head() {
    return this.list[0];
  }

  tail() {
    return this.list[this.list.length - 1];
  }

  at(index) {
    return this.list[index];
  }

  pop() {
    this.list.pop();
  }

  contains(value) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) return true;
    }
    return false;
  }

  find(value) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) return i;
    }
    return null;
  }

  toString() {}
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

/**
 * do #10
 *
 * then do extra credit
 */

let list = new LinkedList();
list.append(45);
list.prepend(12);
console.log(list.size(), 'size');
console.log(list.head(), 'head');
console.log(list.tail(), 'tail');
console.log(list.at(0), 'at');
list.pop();
console.log(list.contains(45), 'contains');
console.log(list.find(45), 'find');

console.log(list);
