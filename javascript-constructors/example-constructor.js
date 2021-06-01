function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exampleObj = new ExampleConstructor();
console.log('value of exampleObj:', exampleObj);
console.log('exampleObj instanceof ExampleConstructor:', exampleObj instanceof ExampleConstructor);
