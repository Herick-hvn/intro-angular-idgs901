import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IEVNComponent } from './ievn/ievn.component';
import { UtlComponent } from './utl/utl.component';
import { IricComponent } from './grupos/iric/iric.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from
'./grupos/formularios/suma/suma.component';
import { OperasBasComponent } from
'./grupos/formularios/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from
'@angular/platform-browser/animations';
import { OperasModule } from './grupos/formularios/operas/operas.module';

@NgModule({
  declarations: [
    AppComponent,
    IEVNComponent,
    UtlComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }