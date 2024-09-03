class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	printList() {
		let current = this.head;
		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
	reverse() {
    let current = this.head;
    let next = null
    let prev = null
    while(current){
       next = current.next
       current.next = prev
       prev = current
       current = next
       
    }
    this.head = prev
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(1);

console.log("Original Linked List:");
linkedList.printList();

linkedList.reverse();

console.log("\nReversed Linked List:");
linkedList.printList();


