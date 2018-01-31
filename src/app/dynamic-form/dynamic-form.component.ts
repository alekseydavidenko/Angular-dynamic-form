import { Component, OnInit, Input } from '@angular/core';
import { ElementsService } from '../shared/elements.service';
import { FormGroup } from '@angular/forms/src/model';
import { ElementBase } from '../model/element-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ElementsService]
})
export class DynamicFormComponent implements OnInit {

  constructor(private elementService: ElementsService) { }

  @Input()
  elements: ElementBase<any>[] = [];
  form: FormGroup;


  ngOnInit() {
    this.form = this.elementService.toFormFroup(this.elements);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
