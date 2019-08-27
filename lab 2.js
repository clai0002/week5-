class Queue {
    constructor() {
        this.q = [];
    }
// get the current number of elements in the queue
//Getter function
    get length() {
        return this.q.length
    };
//Get all the elements 
    get queue() {
        return this.q;
    }
// Boolean function: returns true if the queue is empty, false otherwise 
    isEmpty() {
        return 0 == this.q.length;
    };
//adds new element to the end of the quue
    enqueue(newItem) {
        this.q.push(newItem)
    };
//Boolean function: returns true if an item is found (first occurnace); false otherwise
    inQueue(item) {
        let i = 0;
        let isFound = false;
        while (i < this.q.length && !isFound) {
            if (this.q[i] === item) {
                isFound = true;
            } else
                i++;
        }
        return (isFound);
    }
// pop an item from the queue
    dequeue() {
        if (0 != this.q.length) {
            let c = this.q[0];
            this.q.splice(0, 1);
            return c
        }
    };

    removeall(){
        while(!this.isEmpty()){
            this.dequeue()
        }
    }

    addall(newset){
        let i = 0
        for(i=0;i<newset.length;i++){
            this.enqueue(newset[i])
        }

    }

    print(list){
        let i=0
        for(i=0;i<list.length;i++){
            console.log(i+1 +"-->"+list[i]);

        }
    }


};
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
// console.log(queue.length);
console.log(queue.q);
// queue.removeall();
queue.addall([3,7,1,9])
// queue.enqueue(33);
// queue.print(queue.q);
console.log(queue.q);
queue.print(queue.q)
// console.log(queue.inQueue(33));
// console.log(queue.inQueue(88));



