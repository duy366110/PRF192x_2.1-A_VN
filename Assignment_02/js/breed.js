import {BREEDINFO} from './script/query.js';
import {EXECURED} from './script/executed.js';
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
                    },
                    {
                        condition: 'unique',
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
        ], 'save');

        return {
            event: {
                ACTION: EXECURED.pageBreedAction,
                REMOVE: EXECURED.remove,
                VIEW: RENDERVIEW.viewBreed,
            }
        }
    })()

    app.event.ACTION();
    app.event.REMOVE();
    app.event.VIEW()
}