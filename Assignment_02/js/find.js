"use strict";
import {PETINFO} from './script/query.js';
import {VALIDATION} from './script/validation.js';
import {MESSAGES} from './script/data.js';
import {EXECURED} from './script/executed.js';
import {RENDERVIEW} from './script/render.js';


window.onload = function(event) {
    let app = (function() {
        let fields = [
            {
                field: PETINFO.breed,
                name: 'breed',
                type: 'selector',
                rules: []
            },
            {
                field: PETINFO.dewormed,
                name: 'dewormed',
                type: 'checkbox',
                rules: []
            },
            {
                field: PETINFO.id,
                name: 'id',
                type: 'input',
                rules: []
            },
            {
                field: PETINFO.name,
                name: 'name',
                type: 'input',
                rules: []
            },
            {
                field: PETINFO.sterilized,
                name: 'sterilized',
                type: 'checkbox',
                rules: []
            },
            {
                field: PETINFO.type,
                name: 'type',
                type: 'selector',
                rules: []
            },
            {
                field: PETINFO.vaccinated,
                name: 'vaccinated',
                type: 'checkbox',
                rules: []
            },
        ];

        VALIDATION.validation(PETINFO.infor, fields, 'find');

        return {
            event: {
                ACTION: EXECURED.pageFindAcion(fields),
                OPTION: RENDERVIEW.optionBreed(''),
                VIEW: RENDERVIEW.viewFind,
            }
        }

    })()

    app.event.ACTION;
    app.event.OPTION;
    app.event.VIEW(false);
}