import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule // verificar o que é ????
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
