import { Injectable } from '@angular/core';

@Injectable()
export class LoadService {
  animating = false;

  constructor() {}

  public animate(val: boolean) {
    this.animating = val;
  }
}
