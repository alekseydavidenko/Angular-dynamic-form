import { ElementBase } from './element-base';
import { ElementOptions } from './element-options';

export class DropDownElement extends ElementBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: ElementOptions = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
