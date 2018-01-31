import { ElementOptions } from './element-options';

export class ElementBase<T> {
  value: T;
  key: string;
  lable: string;
  required: boolean;
  opder: number;
  controlType: string;

  constructor(options: ElementOptions = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.lable = options.lable || '';
    this.required = !!options.required;
    this.opder = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
