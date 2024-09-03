
class Node{
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    insertAfter(valueRef, data){
        current = this.head
        while(current!=null){
            if(current.data = valueRef){
                let newNode = new Node(data, current.next)
                current.next = newNode
                return
            }
        }
    }

    reverse(){
        let current = this.head;
        let next = null
        let prev = null
        while(current!=null){
            next = current.next
            current.next = prev
            current = next
            prev = current
        }
    }

}