import {Component, Input} from '@angular/core';

@Component({
  selector: 'ng-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {

  @Input() animate = false;

  constructor() {}
}
