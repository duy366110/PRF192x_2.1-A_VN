"use strict";
import { petInfo } from './script/query.js';
import {validation} from './script/validation.js';

window.onload = function(e) {
    (() => {
        validation(petInfo.infor, [
            {
                field: petInfo.age,
                type: 'input',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: '',
                    },
                    {
                        error: 'number',
                        message: '',
                    },
                    {
                        error: 'range',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.breed,
                type: 'selector',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.id,
                type: 'input',
                state: '',
                rules: [
                    {
                        error: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.name,
                type: 'input',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.type,
                type: 'selector',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.weight,
                type: 'input',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: ''
                    },
                    {
                        error: 'number',
                        message: ''
                    },
                    {
                        error: 'range',
                        message: '',
                    }
                ]
            },
            {
                field: petInfo.length,
                type: 'input',
                state: false,
                rules: [
                    {
                        error: 'required',
                        message: ''
                    },
                    {
                        error: 'number',
                        message: ''
                    },
                    {
                        error: 'range',
                        message: '',
                    }
                ]
            }
        ]);
    })()
}