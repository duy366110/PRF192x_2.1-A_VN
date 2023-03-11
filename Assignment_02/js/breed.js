import {BREEDINFO} from './script/query.js';
import {RENDERVIEW} from './script/render.js';
import {VALIDATION} from './script/validation.js';

window.onload = function(e) {
    const app = (() => {
        VALIDATION.validation(BREEDINFO.infor, [
            {
                field: BREEDINFO.breed,
                name: 'breed',
                type: 'selector',
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: BREEDINFO.type,
                name: 'type',
                type: 'selector',
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    }
                ]
            }
        ]);

        return {
            event: {
                VIEW: RENDERVIEW.viewBreed,
            }
        }
    })()

    app.event.VIEW()
}