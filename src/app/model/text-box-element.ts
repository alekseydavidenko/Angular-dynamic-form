import { ElementBase } from './element-base';
import { ElementOptions } from './element-options';

export class TextBoxElement extends ElementBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: ElementOptions = {}) {
    super(options);
    this.type = options['type'] || 'type';
  }
}
