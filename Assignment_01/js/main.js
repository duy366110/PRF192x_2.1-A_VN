import { petInfo } from './script/query.js';
import {validator} from './script/validation.js';

window.onload = function(e) {
    (() => {
        validator(petInfo.infor, [
            {
                field: petInfo.id,
                rules: [
                    'required',
                    'number'
                ]
            }
        ]);
    })()
}