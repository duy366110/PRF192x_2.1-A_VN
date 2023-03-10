"use strict";
import {REPORTINFO} from './script/query.js';
import {MESSAGES} from './script/data.js';
import {VALIDATION} from './script/validation.js';
import {EXECURED} from './script/executed.js';

window.onload = function(event) {
    let app = (function() {
        let fields = [
            {
                field: REPORTINFO.file,
                name: 'report',
                type: 'file',
                rules: [
                    {
                        condition: 'file',
                        message: `${MESSAGES.ERRORS.typeFile}, need type *.json`
                    }
                ]
            }
        ];

        VALIDATION.validation(REPORTINFO.infor, fields, 'report');

        return {
            event: {
                ACTION: EXECURED.pageReportAction,
            }
        }

    })()

    app.event.ACTION();
}