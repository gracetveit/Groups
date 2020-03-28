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

    static from (iterable) {
        return new Group(iterable)
    }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);

console.log(group.has(10));