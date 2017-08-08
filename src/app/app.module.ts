import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { SafetyBriefingComponent } from './safety-briefing/safety-briefing.component';
import { ProtectionComponent } from './protection/protection.component';
import { CameraComponent } from './camera/camera.component';
import { ReportComponent } from './report/report.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ImageAnalyzeComponent } from './image-analyze/image-analyze.component';
import { EndOfDemoComponent } from './end-of-demo/end-of-demo.component';
import { GuideComponent } from './guide/guide.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrdersComponent,
    SafetyBriefingComponent,
    ProtectionComponent,
    CameraComponent,
    ReportComponent,
    InspectionComponent,
    ImageAnalyzeComponent,
    EndOfDemoComponent,
    GuideComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
