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
    this.list[this.list.length - 1].nextNode = null;
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

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.list.length) {
      this.append(value);
    } else {
      let before = this.list.slice(0, index);
      let after = this.list.slice(index);
      let newValue = new Node(value, after[0].value);

      before[before.length - 1].nextNode = value;
      this.list = [...before, newValue, ...after];
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.list = this.list.slice(1);
    } else if (index === this.list.length - 1) {
      this.pop();
    } else {
      let before = this.list.slice(0, index);
      let after = this.list.slice(index + 1);

      before[before.length - 1].nextNode = after[0].value;

      this.list = [...before, ...after];
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

/**
 * do extra credit
 */

let list = new LinkedList();
list.append(45);
list.append(32);
list.append(12);
list.append(1);
list.append(0);

// list.prepend(45);
// list.prepend(32);
// list.prepend(12);
// list.prepend(1);
// list.prepend(0);

// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(2));

// list.pop();

// console.log(list.contains(0));
// console.log(list.find(0));

// console.log(list.toString());

// list.insertAt(7, 5);
list.removeAt(2);
console.log(list);
