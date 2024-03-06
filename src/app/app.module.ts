import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { LoaderComponent } from './Componentes/loader/loader.component';
import { RutaComponent } from './Componentes/ruta/ruta.component'; // Importa el componente correspondiente
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ruta', component: RutaComponent },
];
@NgModule({
  declarations: [AppComponent,
    LoaderComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot({}),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
