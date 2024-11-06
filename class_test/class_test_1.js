// Define a class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car information
  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Create an object of the class
const myCar = new Car("Toyota", "Corolla", 2022);

// Access properties and methods
console.log(myCar.brand);        
console.log(myCar.getInfo());    
