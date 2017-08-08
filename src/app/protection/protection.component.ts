import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.less']
})
export class ProtectionComponent implements OnInit {

    constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showGuide(): void {
    this.router.navigate(['./guide']);
  };

  public showVideo(): void {
    this.router.navigate(['./video']);
  };

  public reportIssue(): void {
    this.router.navigate(['./report']);
  };

  public scheduleInspection(): void {
    this.router.navigate(['./inspection']);
  };

  public showCamera(): void {
    this.router.navigate(['./camera']);
  };

  public showSafetyBriefing(): void {
    this.router.navigate(['./safety-briefing']);
  };

}
