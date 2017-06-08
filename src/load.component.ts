import {Component, Input, OnInit} from '@angular/core';
import {LoadService} from './load.service';

@Component({
  selector: 'ng-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  @Input() animate = true;

  constructor(public loadService: LoadService) {}

  ngOnInit(): void {
    this.loadService.getValue().subscribe((status: boolean) => {
      this.animate = status;
    });
  }

}
