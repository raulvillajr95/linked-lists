class LinkedList {
  list = [];

  append(value) {
    if (this.list.length >= 1) {
      this.list[this.list.length - 1].nextNode = value;
    }
    this.list.push(new Node(value));
  }

  prepend(value) {
    if (this.list.length >= 1) {
      this.list.unshift(new Node(value, this.list[0].value));
    } else {
      this.list.unshift(new Node(value));
    }
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

  toString() {
    let str = '';
    for (let i = 0; i <= this.list.length; i++) {
      if (i === this.list.length) {
        str += 'null';
      } else {
        str += `( ${this.list[i].value} ) -> `;
      }
    }
    return str;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

/**
 * update nextNode on #3-10
 * then do extra credit
 */

let list = new LinkedList();
// list.append(45);
// list.append(32);
// list.append(12);
// list.append(1);
// list.append(0);

list.prepend(45);
list.prepend(32);
list.prepend(12);
list.prepend(1);
list.prepend(0);

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list);
