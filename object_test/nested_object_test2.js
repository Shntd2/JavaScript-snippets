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
const ownerName = 'Alice'; // Specify the name of the car owner you want to retrieve
const carOwner = Object.values(carOwners).find(owner => owner.carOwnersDetails.firstName === ownerName);

if (carOwner) {
    console.log('Details of', ownerName + ':', carOwner);
} else {
    console.log('Car owner not found:', ownerName);
}
