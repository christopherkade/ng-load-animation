import {Component, Input, OnInit} from '@angular/core';
import {LoadService} from './load.service';

@Component({
  selector: 'ng-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  @Input() colorOdd: string;
  @Input() colorEven: string;
  @Input() shape: string;
  @Input() width: number;
  @Input() height: number;
  radius: number;
  animate: boolean;

  constructor(public loadService: LoadService) {}

  ngOnInit(): void {
    this.loadService.getValue().subscribe((status: boolean) => {
      this.animate = status;
    });
    this.handleShape();
  }

  /**
   * Handles styles that are shared across divs
   * @returns {{height: string, background: string}}, used by ngStyle to define an elements style
   */
  getStyle(): any {
    return {
      'height': this.height + 'px',
      'width': this.width + 'px',
      'border-radius': this.radius + '%'
    };
  }

  /**
   * Checks shape binding and sets the corresponding radius
   */
  handleShape() {
    switch (this.shape) {
      case 'circle':
        this.radius = 50;
        break;
      default:
        this.shape = 'square';
        this.radius = 0;
        break;
    }
  }
}
