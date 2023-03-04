function renderIcon(color, status) {
    let icon = '';
    if(color) {
        icon += `
        <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill='${color}' fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
        </svg>
        `;

    } else {
        if(status) {
            icon += `
            <svg class="icons icons-true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            `;

        } else {
            icon += `
            <svg class="icons icons-false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
            </svg>
            `;
        }
    }

    return icon;
}

export function renderPetTemplate(deletePet) {
    let viewer = $('#tbody');
    let pets = [];
    let status = localStorage.getItem('PETS')? true : false;
    let template = ``;

    if(status) {
        pets = JSON.parse(localStorage.getItem('PETS'));
        pets.forEach(pet => {
            template += `
                <tr>
                    <td>${pet.id}</td>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.type}</td>
                    <td>${pet.weight}</td>
                    <td>${pet.length}</td>
                    <td>${pet.breed}</td>
                    <td>${renderIcon(pet.color, false)}</td>
                    <td>${renderIcon('', pet.vaccinated)}</td>
                    <td>${renderIcon('', pet.dewormed)}</td>
                    <td>${renderIcon('', pet.sterilized)}</td>
                    <td>04/03/2023</td>
                    <td><button type="button" class='btn btn-danger btn-pet-delete' id='${pet.id}'>delete</button></td>
                </tr>
            `;
        })
        
    } else {
        template += `
            <tr>
                <td class='blanb-view' colspan='13'>Nội dung trống</td>
            </tr>
        `;
    }

    viewer[0].innerHTML = template;
    if(status) {
        deletePet(pets);
    }

}