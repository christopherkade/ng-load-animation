import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class LoadService {
  @Output() animating: EventEmitter<any> = new EventEmitter();

  constructor() {}

  animate(val: boolean) {
    this.animating.emit(val);
  }

  getValue(): any {
    return this.animating;
  }
}
