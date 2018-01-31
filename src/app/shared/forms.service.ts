import { Injectable } from '@angular/core';
import { ElementBase } from '../model/element-base';
import { DropDownElement } from '../model/drop-down-element';
import { TextBoxElement } from '../model/text-box-element';

@Injectable()
export class FormsService {

  getElements() {
    const elements: ElementBase<any>[] = [
      new TextBoxElement({
        key: 'firstName',
        lable: 'First Name',
        required: true,
        order: 1
      }),
      new TextBoxElement({
        key: 'lasttName',
        lable: 'Last Name',
        order: 2
      }),
      new TextBoxElement({
        key: 'email',
        lable: 'Email',
        type: 'email',
        required: true,
        order: 3
      }),
      new DropDownElement({
        key: 'language',
        lable: 'Language',
        order: 4,
        options: [
          {key: '1', value: 'Ukrainian'},
          {key: '2', value: 'Russian'},
          {key: '3', value: 'English'}
        ]
      })
    ];

    return elements.sort((a, b) => a.opder - b.opder);
  }
}

