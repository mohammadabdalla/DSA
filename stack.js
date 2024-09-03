class Stack {
    constructor() {
       this.queue = [];
    }

    push(value) {
       // Add new element to the end of the queue
       this.queue.push(value);

       // Rotate the queue so that the 
       // new element is at the front
       for (let i = 0; i < this.queue.length - 1; i++) {
         this.queue.push(this.queue.shift());
       }
     }

     pop() {
       if (this.isEmpty()) {
         return null; // Stack is empty
       }
       // Pop the top element from the
       // front of the queue
       return this.queue.shift(); 
     }

     peek() {
       if (this.isEmpty()) {
         return null;
       }
       // Return the front element of the queue
       return this.queue[0]; 
     }

     isEmpty() {
       return this.queue.length === 0;
     }

     clear(){
         let tempQueue = this.queue;
         this.queue = []; 
         return tempQueue;
     }
   }

   // Example usage
   const stack = new Stack();
   stack.push(1);
   stack.push(2);
   stack.push(3);
   console.log(stack.pop()); // Output: 3
   console.log(stack.peek()); // Output: 2
   console.log(stack);
   stack.clear(); 
   console.log(stack);