import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Manager';
 
  constructor(private responsive:BreakpointObserver) { }

  OnInit(){
this.responsive.observe([
  Breakpoints.TabletPortrait,
  Breakpoints.TabletLandscape,
  Breakpoints.HandsetPortrait,
  Breakpoints.HandsetLandscape
])
.subscribe()
  }
}
