const carOwners = {
    1: {
        carOwnersDetails: {
            firstName: 'John',
            lastName: 'Velaski',
            age: 30
        },
        car: {
            brand: 'Ford',
            model: 'Mustang',
            year: 1973
        }
    },
    2: {
        carOwnersDetails: {        
            firstName: 'Alice',
            lastName: 'Popper',
            age: 36
        },
        car: {
            brand: 'Fiat',
            model: 'Punto',
            year: 2010
        }
    }
};


// Example of retrieving data by the name of the car owner
const carOwner = carOwners[1];
console.log(carOwner);

const carOwner2 = carOwners[2];
console.log(carOwner);

console.log(carOwners[1].carOwnersDetails.firstName)
console.log(carOwners[1].car.model)
