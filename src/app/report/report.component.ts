import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class ReportComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showProtection(): void {
    this.router.navigate(['./protection']);
  };

}
