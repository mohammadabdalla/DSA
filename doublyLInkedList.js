class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add an element to the end of the list
    add(value) {
      const newNode = new Node(value);
      if (this.tail === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Remove a specific element from the list
    remove(value) {
      if (this.head === null) {
        return "List is empty";
      }
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          if (current.prev !== null) {
            current.prev.next = current.next;
          } else {
            this.head = current.next;
          }
          if (current.next !== null) {
            current.next.prev = current.prev;
          } else {
            this.tail = current.prev;
          }
          this.size--;
          return;
        }
        current = current.next;
      }
      return "Element not found";
    }
  
    // Insert an element at a specific position in the list
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return "Index out of bounds";
      }
      const newNode = new Node(value);
      if (index === 0) {
        if (this.head === null) {
          this.head = this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
      } else if (index === this.size) {
        this.add(value);
        return;
      } else {
        let current = this.head;
        let count = 0;
        while (count < index) {
          current = current.next;
          count++;
        }
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
      this.size++;
    }
  
    // Remove an element from a specific position in the list
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return "Index out of bounds";
      }
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        if (this.head !== null) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      } else if (index === this.size - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let count = 0;
        while (count < index) {
          current = current.next;
          count++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.size--;
      return current.value;
    }
  
    // Get the index of a specific element
    indexOf(value) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  
    // Check if the list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Return the number of elements in the list
    sizeOfList() {
      return this.size;
    }
  
    // Print the elements of the list
    print() {
      let current = this.head;
      let elements = [];
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  
    // Print the elements of the list in reverse order
    printReverse() {
      let current = this.tail;
      let elements = [];
      while (current !== null) {
        elements.push(current.value);
        current = current.prev;
      }
      console.log(elements.join(' -> '));
    }
  }
  
  // Example usage:
  const list = new DoublyLinkedList();
  
  list.add(10);
  list.add(20);
  list.add(30);
  list.print(); // Output: 10 -> 20 -> 30
  
  list.insertAt(15, 1);
  list.print(); // Output: 10 -> 15 -> 20 -> 30
  
  list.remove(20);
  list.print(); // Output: 10 -> 15 -> 30
  
  console.log(list.indexOf(15)); // Output: 1
  
  list.removeAt(2);
  list.print(); // Output: 10 -> 15
  
  list.add(40);
  list.add(50);
  list.printReverse(); // Output: 50 -> 40 -> 15 -> 10
  
  console.log(list.isEmpty()); // Output: false
  console.log(list.sizeOfList()); // Output: 4
  