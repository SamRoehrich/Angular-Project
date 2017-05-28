//angular components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

//my components
import { AppComponent } from "./app.component";
import {FormComponent} from "./form/form.component";

import { routing } from './app.routing'


@NgModule({
    declarations: [AppComponent,
                   FormComponent,
                  ],
    imports: [BrowserModule,
              FormsModule,
              routing,
              ReactiveFormsModule,
              HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}