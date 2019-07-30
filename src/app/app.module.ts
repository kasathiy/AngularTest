import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SampleComponent } from "./sample/sample.component";
import { DecorateDirective } from './directive/decorate.directive';
import { AppendPipe } from './pipes/append.pipe';

@NgModule({
  declarations: [AppComponent, SampleComponent, DecorateDirective, AppendPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [SampleComponent]
})
export class AppModule {}
