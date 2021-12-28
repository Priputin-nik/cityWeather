import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBlockTempComponent } from './main-block-temp/main-block-temp.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { TitleStylePipe } from './title-style.pipe';
import { DegreeSwitchComponent } from './degree-switch/degree-switch.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { DegreeComponent } from './degree/degree.component';
import { ChangeDegreePipe } from './change-degree.pipe';

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    MainBlockTempComponent,
    WrapperComponent,
    TitleStylePipe,
    DegreeSwitchComponent,
      DegreeComponent,
      ChangeDegreePipe
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
