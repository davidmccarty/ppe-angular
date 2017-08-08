import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.less']
})
export class InspectionComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showProtection(): void {
    this.router.navigate(['./protection']);
  };

}
