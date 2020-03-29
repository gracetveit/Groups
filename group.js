class Group {
    constructor(set = []) {
        this.set = set;

    }
    
    add (value) {
        if (this.set.includes(value)) {
            console.log(`${value} is already in this group`);
            return undefined;
        }
        else {this.set.push(value);}
    }
    
    delete (value) {
        if (this.set.includes(value) === false) {
            console.log(`${value} is not in this group`);
            return undefined;
        }
        
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i] === value) {
                this.set.splice(i, 1);
            }
        }
    }

    has (value) {
        return this.set.includes(value)
    }

    [Symbol.iterator] () {
        return new GroupIterator(this.set)
    }

    static from (iterable) {
        return new Group(iterable)
    }
}

class GroupIterator {
    constructor(list) {
        this.list = list
        this.curPos = 0
        // Constructs with curent position tracked
    }

    next() {
        // Checks whether loop is done, and if not, moves past current value and
        // returns it.
        if (this.list.length === this.curPos) return {done: true};

        let curVal = this.list[this.curPos]
        this.curPos++;
        return{value: curVal, done: false}
    }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);

console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}