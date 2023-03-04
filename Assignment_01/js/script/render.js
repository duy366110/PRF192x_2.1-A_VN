export function renderPetTemplate() {
    let viewer = $('#tbody');
    let template = ``;

    if(localStorage.getItem('PETS')) {
        let pets = JSON.parse(localStorage.getItem('PETS'));
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
                    <td>${pet.color}</td>
                    <td>${pet.vaccinated}</td>
                    <td>${pet.dewormed}</td>
                    <td>${pet.sterilized}</td>
                    <td>04/03/2023</td>
                    <td><button class='btn btn-danger'>delete</button></td>
                </tr>
            `;
        })
        
    } else {
        template += `
            <tr>
                <td colspan='11'>Nội dung trống</td>
            </tr>
        `;
    }

    viewer[0].innerHTML = template;

}