import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.less']
})
export class GuideComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showProtection(): void {
    this.router.navigate(['./protection']);
  };


}
