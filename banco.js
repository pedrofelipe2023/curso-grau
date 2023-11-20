// Definindo uma classe base
class Animal {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }

  // Método
  makeSound() {
    console.log("Some generic sound");
  }
}

// Herança: Criando uma subclasse que estende a classe Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Chama o construtor da classe base
    this._breed = breed;
  }

  // Getter específico da subclasse
  get breed() {
    return this._breed;
  }

  // Setter específico da subclasse
  set breed(newBreed) {
    this._breed = newBreed;
  }

  // Método específico da subclasse
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// Criando instâncias das classes
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Usando os getters e setters
console.log(genericAnimal.name); // Output: Generic Animal
genericAnimal.name = "New Name";
console.log(genericAnimal.name); // Output: New Name

console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
myDog.breed = "Labrador";
console.log(myDog.breed); // Output: Labrador

// Chamando métodos
genericAnimal.makeSound(); // Output: Some generic sound
myDog.makeSound(); // Output: Woof! Woof!
