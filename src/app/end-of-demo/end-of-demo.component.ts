import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-of-demo',
  templateUrl: './end-of-demo.component.html',
  styleUrls: ['./end-of-demo.component.less']
})
export class EndOfDemoComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

    public showWorkOrders(): void {
    this.router.navigate(['./work-orders']);
  };

}
