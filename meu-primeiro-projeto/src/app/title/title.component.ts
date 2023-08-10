import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() public title: string = 'Welcome to Angular!';
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    alert('title changed');
  }

}
