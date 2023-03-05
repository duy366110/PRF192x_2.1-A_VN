"use strict";
import { petInfo } from './script/query.js';
import {validation} from './script/validation.js';
import {messageErrors} from './script/data.js';
import {caculatorBMI, deletePet, savePet, renderPetHealthyView} from './script/executed.js';
import {renderPetTemplate} from './script/render.js';

/**
 * Start run main.
 * 1) Set up validation form information pet.
 * 2) After if validation pass call function save pet.
 * 3) After save pet successfull call function renderPetView
 */
window.onload = function(e) {
    ((BMI, renderPetView, renderPetHealthyView) => {
        validation(petInfo.infor, [
            {
                field: petInfo.age,
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
                        message: messageErrors.age,
                    }
                ]
            },
            {
                field: petInfo.breed,
                name: 'breed',
                type: 'selector',
                rules: [
                    {
                        condition: 'required',
                        message: messageErrors.breed,
                    }
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
                field: petInfo.length,
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
                        message: messageErrors.length,
                    }
                ]
            },
            {
                field: petInfo.name,
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
                    {
                        condition: 'required',
                        message: messageErrors.type,
                    }
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
                        message: messageErrors.weight,
                    }
                ]
            }
        ], savePet);
        renderPetView(deletePet, false);
        renderPetHealthyView();
        BMI();

    })(caculatorBMI, renderPetTemplate, renderPetHealthyView)
}