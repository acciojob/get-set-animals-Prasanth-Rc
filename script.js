//complete this code
class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  bark(): void {
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
