import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-analyze',
  templateUrl: './image-analyze.component.html',
  styleUrls: ['./image-analyze.component.less']
})
export class ImageAnalyzeComponent implements OnInit {

  constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showCamera(): void {
    this.router.navigate(['./camera']);
  };

  public save(): void {
    this.router.navigate(['./protection']);
  };

}
