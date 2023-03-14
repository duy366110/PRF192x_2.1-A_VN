export const MESSAGES = {
    ERRORS : {
        age: 'Age must be between 1 and 15!',
        breed: 'Please select Breed!',
        length: 'Length must be between 1 and 100!',
        number: 'Please enter number',
        required: 'Please enter content',
        uniqueBreed: 'Breed must be unique',
        uniqueID: 'ID must be unique!',
        rangeDefault: 'Value must be between',
        type: 'Please select Type!',
        typeFile: 'File type incorrect',
        weight: 'Weight must be between 1 and 15!',
    }
}

export const RENDER = {
    key: 'SA',
}

export function BREEDTYPE(breed, type) {
    this.breed = breed;
    this.type = type;
}

export const PETKEY =  [
    'age', 'bmi', 'breed', 'color', 'createDate',
    'dewormed', 'id', 'length', 'name', 'sterilized',
    'type', 'vaccinated', 'weight'
]

export function PET(age, breed, color, createDate, dewormed, length, id, name, sterilized, type, weight, vaccinated) {
    this.age = age;
    this.bmi = '',
    this.breed = breed;
    this.color = color;
    this.createDate = createDate,
    this.dewormed = dewormed;
    this.id = id;
    this.length = Number(length);
    this.name = name;
    this.sterilized = sterilized;
    this.type = type;
    this.vaccinated = vaccinated;
    this.weight = Number(weight);

    this.caculatorBMI = function () {
        if(this.type === 'Cat' || this.type === 'Dog') {
            this.bmi = ((this.weight * ((this.type === 'Cat')? 886 : 703)) / (this.length ** 2)).toFixed(2);

        } else {
            this.bmi = '';
        }
    }
}