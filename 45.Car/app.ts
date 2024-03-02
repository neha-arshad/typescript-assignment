

function makeCar(manufacturer: string, modelName: string, opetional: Record<string, any>): any{
    return{
        manufacturer,
        modelName,
        opetional
    }

}

// Example usage:
const mycar = makeCar('Subaru', 'Audi', { color: 'blue', year :"2000"});
console.log(mycar);
