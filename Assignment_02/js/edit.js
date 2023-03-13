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
                field: PETINFO.age,
                name: 'age',
                type: 'input',
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    },
                    {
                        condition: 'number',
                        message: '',
                    },
                    {
                        condition: 'range',
                        message: MESSAGES.ERRORS.age,
                    }
                ]
            },
            {
                field: PETINFO.breed,
                name: 'breed',
                type: 'selector',
                rules: [
                    {
                        condition: 'required',
                        message: MESSAGES.ERRORS.breed,
                    }
                ]
            },
            {
                field: PETINFO.color,
                name: 'color',
                type: 'input',
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
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: PETINFO.length,
                name: 'length',
                type: 'input',
                rules: [
                    { 
                        condition: 'required',
                        message: '',
                    },
                    {
                        condition: 'number',
                        message: '',
                    },
                    {
                        condition: 'range',
                        message: MESSAGES.ERRORS.length,
                    }
                ]
            },
            {
                field: PETINFO.name,
                name: 'name',
                type: 'input',
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    }
                ]
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
                rules: [
                    {
                        condition: 'required',
                        message: MESSAGES.ERRORS.type,
                    }
                ]
            },
            {
                field: PETINFO.vaccinated,
                name: 'vaccinated',
                type: 'checkbox',
                rules: []
            },
            {
                field: PETINFO.weight,
                name: 'weight',
                type: 'input',
                rules: [
                    {
                        condition: 'required',
                        message: '',
                    },
                    {
                        condition: 'number',
                        message: '',
                    },
                    {
                        condition: 'range',
                        message: MESSAGES.ERRORS.weight,
                    }
                ]
            }
        ];

        VALIDATION.validation(PETINFO.infor,fields , 'edit');

        return {
            event: {
                ACTION: EXECURED.pageEditAction(fields),
                OPTION: RENDERVIEW.optionBreed,
                VIEW: RENDERVIEW.view,
            }
        }

    })()

    app.event.ACTION;
    app.event.OPTION();
    app.event.VIEW(false, 'edit');
}