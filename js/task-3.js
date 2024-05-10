class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }
    initialValue() {
        return this.#value.join('');
    }

    padEnd(str) {
        this.#value.push(str);
    }

    padStart(str) {
        this.#value.unshift(str);
    }
}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="







