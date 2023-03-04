"use strict";
import { petInfo } from './script/query.js';
import {validation} from './script/validation.js';
import {save} from './script/executed.js';

window.onload = function(e) {
    
    (() => {
        validation(petInfo.infor, [
            {
                field: petInfo.age,
                name: 'age',
                type: 'input',
                rules: [
                    { error: 'required'},{error: 'number'},{error: 'range'}
                ]
            },
            {
                field: petInfo.breed,
                name: 'breed',
                type: 'selector',
                rules: [
                    {error: 'required'}
                ]
            },
            {
                field: petInfo.color,
                name: 'color',
                type: 'input',
                rules: []
            },
            {
                field: petInfo.dewormed,
                name: 'dewormed',
                type: 'checkbox',
                rules: []
            },
            {
                field: petInfo.id,
                name: 'id',
                type: 'input',
                rules: [
                    {error: 'required'}, {error: 'unique'}
                ]
            },
            {
                field: petInfo.length,
                name: 'length',
                type: 'input',
                rules: [
                    {error: 'required'},{error: 'number'},{error: 'range'}
                ]
            },
            {
                field: petInfo.name,
                name: 'name',
                type: 'input',
                rules: [
                    {error: 'required'}
                ]
            },
            {
                field: petInfo.sterilized,
                name: 'sterilized',
                type: 'checkbox',
                rules: []
            },
            {
                field: petInfo.type,
                name: 'type',
                type: 'selector',
                rules: [
                    {error: 'required'}
                ]
            },
            {
                field: petInfo.vaccinated,
                name: 'vaccinated',
                type: 'checkbox',
                rules: []
            },
            {
                field: petInfo.weight,
                name: 'weight',
                type: 'input',
                rules: [
                    {error: 'required'},{error: 'number'},{error: 'range'}
                ]
            }
        ], save);
    })()
}