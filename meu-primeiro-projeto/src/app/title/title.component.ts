import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Welcome to Angular!';
  constructor() { }
  ngOnDestroy(): void {
    alert('destruido');
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    alert('title changed');
  }

}
