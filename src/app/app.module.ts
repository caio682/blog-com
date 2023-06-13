import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
