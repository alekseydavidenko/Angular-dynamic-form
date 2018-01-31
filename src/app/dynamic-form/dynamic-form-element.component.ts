import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from '../model/element-base';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent {

  @Input()
  public element: ElementBase<any>;
  @Input()
  form: FormGroup;

  get isValid() {
    return this.form.controls[this.element.key].valid;
  }
  get isDirty() {
    return this.form.controls[this.element.key].dirty;
  }
}
