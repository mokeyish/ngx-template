import {Directive, Input, NgModule, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';

@Directive({
    selector: '[ngxTemplate]'
})
export class NgxTemplate {
    @Input() type: string;

    @Input('ngxTemplate') name: string;

    constructor(public template: TemplateRef<any>) {
    }

    getType(): string {
        return this.name;
    }
}


@NgModule({
    declarations: [
        NgxTemplate
    ],
    exports: [
        NgxTemplate
    ]
})
export class NgxTemplateModule {
}
