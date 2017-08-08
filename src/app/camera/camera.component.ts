import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.less']
})
export class CameraComponent implements OnInit {

    constructor(private router: Router) {
  };

  ngOnInit() {
  }

  public showProtection(): void {
    this.router.navigate(['./protection']);
  };

  public analyzeImage(): void {
    this.router.navigate(['./image-analyze']);
  };

}
