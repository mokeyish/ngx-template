/**
 * Created by YISH on 2020/02/29.
 */
import {Directive, Input, NgModule, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngxTemplate]'
})
// tslint:disable-next-line:directive-class-suffix
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
export class NgxTemplateModule {}
