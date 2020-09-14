import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlprComponent} from './components/alpr/alpr.component';
import {RouterModule} from "@angular/router";
import {FaceComponent} from './components/face/face.component';

import {FilePondModule, registerPlugin} from "ngx-filepond";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import {HttpClientModule} from "@angular/common/http";
import {AlprController} from "./controllers/alprController";
registerPlugin(FilePondPluginFileValidateType);
@NgModule({
  declarations: [
    AppComponent,
    AlprComponent,
    FaceComponent
  ],
  imports: [
    BrowserModule,
    FilePondModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'alpr', component: AlprComponent},
      {path: 'face', component: FaceComponent},
    ])
  ],
  providers: [
    AlprController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
