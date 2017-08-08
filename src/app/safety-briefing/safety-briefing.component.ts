import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safety-briefing',
  templateUrl: './safety-briefing.component.html',
  styleUrls: ['./safety-briefing.component.less']
})
export class SafetyBriefingComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showProtection(): void {
    this.router.navigate(['./protection']);
  };


  public showEndOfDemo(): void {
    this.router.navigate(['./end-of-demo']);
  };


}
