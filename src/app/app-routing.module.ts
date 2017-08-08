import { GuideComponent } from './guide/guide.component';
import { VideoComponent } from './video/video.component';
import { EndOfDemoComponent } from './end-of-demo/end-of-demo.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ImageAnalyzeComponent } from './image-analyze/image-analyze.component';
import { CameraComponent } from './camera/camera.component';
import { ProtectionComponent } from './protection/protection.component';
import { ReportComponent } from './report/report.component';
import { SafetyBriefingComponent } from './safety-briefing/safety-briefing.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'work-orders',
      component: WorkOrdersComponent
    },
    {
      path: 'camera',
      component: CameraComponent
    },
    {
      path: 'image-analyze',
      component: ImageAnalyzeComponent
    },
    {
      path: 'inspection',
      component: InspectionComponent
    },
    {
      path: 'protection',
      component: ProtectionComponent
    },
    {
      path: 'report',
      component: ReportComponent
    },
    {
      path: 'safety-briefing',
      component: SafetyBriefingComponent
    },
     {
      path: 'guide',
      component: GuideComponent
    },
     {
      path: 'video',
      component: VideoComponent
    },
     {
      path: 'end-of-demo',
      component: EndOfDemoComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
