import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { GestureConfig } from '@angular/material';

// import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { rootRouterConfig } from './app.router';
// import { APIInterceptor, HttpErrorInterceptor } from './shared/http.intercepter';
// import { AmChartsModule } from '@amcharts/amcharts3-angular';
// import { AuthServices } from './views/sessions/services/auth.service';
// import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,
    // FlexLayoutModule,
  //  TranslateModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
    // RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    // { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
