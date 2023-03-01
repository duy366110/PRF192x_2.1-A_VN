"use strict";
import { petInfo } from './script/query.js';
import {validation} from './script/validation.js';

window.onload = function(e) {
    (() => {
        validation(petInfo.infor, [
            {
                field: petInfo.id,
                rules: [
                    {
                        error: 'required',
                        message: '',
                        state: false,
                    }
                ]
            },
            {
                field: petInfo.name,
                rules: [
                    {
                        error: 'required',
                        message: '',
                        state: false,
                    }
                ]
            }
        ]);
    })()
}