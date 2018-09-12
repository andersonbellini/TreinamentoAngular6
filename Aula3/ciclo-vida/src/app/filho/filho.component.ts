import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
 {

  @Input() valorcomponentefilho: number;

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  constructor() { }

  ngOnInit() {
  }

}
