# NgxTemplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/ngx-template.svg)](https://badge.fury.io/js/ngx-template)

## A strengthened angular template.

### Usage

1. Import

    ``` TypeScript
    import {NgxTemplateModule} from 'ngx-template';
    ```

2. Getting Started

    - set template name or type
        ```html
        <ng-template ngxTemplate="fontSize" [type]="'node'" let-p>
            <input type="number" placeholder="Value" [(ngModel)]="p.value">
        </ng-template>
        ```
    - get template by name or type
        ```TypeScript
        export class SomeComponent {
            @ContentChildren(NgxTemplate) templates: QueryList<NgxTemplate>;

            public getTemplateByName(name: string): TemplateRef<any> {
                return this.defaultTemplates.find(o => o.name === name);
            }
        }

        ```
