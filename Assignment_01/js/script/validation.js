function validField(field, rules) {
    if(rules.some((e) => e.state === false)) {
        for(let i = 0; i < rules.length; i++) {
            if(rules.some((e) => e.state === false)) {
                validator(field, rules[i]);
                if(!rules[i].state) {
                    break;
                }
            }
        }
    }
}

function validator(field, rule) {
    switch(rule.error) {
        case 'number':
            numbers(field, rule);
            break

        case 'required':
        default:
            required(field, rule);
            break;
    }
}

function required(field, rule) {
    let message = $(`#${field.id}-message`)[0];

    if(field.value.trim()) {
        field.classList.remove("is-invalid");
        message.classList.remove('is-invalid');
        message.textContent = '';
        rule.message = '';
        rule.state = true;

    } else {
        field.classList.add("is-invalid");
        message.classList.add('is-invalid');
        message.textContent = 'Nội dung không được rỗng';
        rule.message = 'Nội dung không được rỗng';
        rule.state = false;
    }
}

function numbers(field, rule) {
    let message = $(`#${field.id}-message`)[0];

    if(Number(field.value)) {
        field.classList.remove("is-invalid");
        message.classList.remove('is-invalid');
        message.textContent = '';
        rule.message = '';
        rule.state = true;

    } else {
        field.classList.add("is-invalid");
        message.classList.add('is-invalid');
        message.textContent = 'Nội dung phải là sô';
        rule.message = 'Nội dung phải là số';
        rule.state = false;
    }
}

export function validation (form, fields) {
    fields.forEach(itemField => {
        itemField.field.addEventListener('blur', (event) => {
            validField(event.target, itemField.rules);
        })
    })
}