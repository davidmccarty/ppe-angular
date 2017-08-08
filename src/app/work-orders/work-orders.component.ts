import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.less']
})
export class WorkOrdersComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showSafetyBriefing(): void {
    this.router.navigate(['./safety-briefing']);
  };

}
