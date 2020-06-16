import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-some-content',
  templateUrl: './some-content.component.html',
  styleUrls: ['./some-content.component.scss']
})
export class SomeContentComponent implements OnInit {

  @Input() items: number[];
  constructor() { }

  ngOnInit(): void {
  }

}
