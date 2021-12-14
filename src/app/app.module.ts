import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';

// Import the module from the SDK
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'christianliebel.eu.auth0.com',
      clientId: 'IWoeJ6ujAFOxJ32r8ySR8XkxpWkilcA9',
      audience: 'https://christianliebel.com/dhbw/2021/ws/todo',
      httpInterceptor: {
        allowedList: ['http://localhost:3000/*']
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
