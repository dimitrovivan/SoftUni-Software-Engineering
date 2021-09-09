const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  let asd = Symbol('123');
  person[asd] = 1
  person[id] = 140353;
  // Now Person[id] = 140353
  // but person.id is still undefined
  console.log(person);
  console.log(person.id);
  console.log(person[asd]);