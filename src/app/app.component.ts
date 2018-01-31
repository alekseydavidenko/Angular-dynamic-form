import { Component } from '@angular/core';
import { ElementBase } from './model/element-base';
import { FormsService } from './shared/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormsService]
})
export class AppComponent {
  elements: ElementBase<any>[];

  constructor(private formsService: FormsService) {
    this.elements = formsService.getElements();
  }
}
