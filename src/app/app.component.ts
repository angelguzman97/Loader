import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loader';

  loaderActivo = true;
  iniciarLoader() {
    this.loaderActivo = true;
    alert('Iniciando');
  }

  detenerLoader() {
    this.loaderActivo = false;
    alert('deteniendo');
    
  }
}
