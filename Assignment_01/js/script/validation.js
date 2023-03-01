function validation(field, rule) {
    let state = true;
    if((rule === 'required') && !field.value) {
        console.log(rule);
        console.log('Trường dữ liệu không được rỗng');
        state = false;
    }

    if((rule === 'number')) {
        console.log(rule);
        console.log('Dữ liệu phải là số');
        state = false;
    }
    return state;
}

export function validator (form, fields) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(Array.isArray(fields)) {
            fields.forEach((e) => {
                if(e.hasOwnProperty('rules') && Array.isArray(e.rules)) {
                    for(let i = 0; i < e.rules.length; i++) {
                        if(e.rules.length !== 0) {
                            if(validation(e.field, e.rules[i])) {
                                e.rules.shift();
                                
                            } else {
                                console.log("Submit chưa done");
                                break;
                            }
                        } else {
                            console.log("Submit done");
                        }
                    }
                }
            })
        }
    })
}