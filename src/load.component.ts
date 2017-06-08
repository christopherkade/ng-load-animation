import {Component, Input, OnInit} from '@angular/core';
import {LoadService} from './load.service';

@Component({
  selector: 'ng-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  animate: boolean = false;
  @Input() colorOdd: string;
  @Input() colorEven: string;

  constructor(public loadService: LoadService) {}

  ngOnInit(): void {
    this.loadService.getValue().subscribe((status: boolean) => {
      this.animate = status;
    });

    this.handleOddColor();
    this.handleEventColor();
  }

  /**
   * Checks color code passed by property binding
   */
  handleOddColor() {
    switch (this.colorOdd) {
      case 'red':
        this.colorOdd = '#F44336';
        break;
      case 'blue':
        this.colorOdd = '#2196F3';
        break;
      case 'yellow':
        this.colorOdd = '#FFEB3B';
        break;
      case 'teal':
        this.colorOdd = '#009688';
        break;
    }
  }

  handleEventColor() {
    switch (this.colorEven) {
      case 'red':
        this.colorEven = '#F44336';
        break;
      case 'blue':
        this.colorEven = '#2196F3';
        break;
      case 'yellow':
        this.colorEven = '#FFEB3B';
        break;
      case 'teal':
        this.colorEven = '#009688';
        break;
    }
  }
}
