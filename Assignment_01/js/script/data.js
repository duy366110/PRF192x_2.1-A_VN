export const messageErrors = {
    age: 'Age must be between 1 and 15!',
    breed: 'Please select Breed!',
    length: 'Length must be between 1 and 100!',
    number: 'Please enter number',
    required: 'Please enter content',
    uniqueID: 'ID must be unique!',
    type: 'Please select Type!',
    weight: 'Weight must be between 1 and 15!',
}

export const PETS = [];
export function PET(age, breed, color, dewormed, length, infor, id, name, sterilized, type, weight, vaccinated) {
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.dewormed = dewormed;
    this.length = length;
    this.infor = infor;
    this.id = id;
    this.name = name;
    this.sterilized = sterilized;
    this.type = type;
    this.weight = weight;
    this.vaccinated = vaccinated;
}