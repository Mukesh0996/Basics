const user ={id: 42, value: true};

const {id:foo, value: bar} = user; // foo and bar are local variables that consist the values 42 and true

console.log(foo);
console.log(bar);