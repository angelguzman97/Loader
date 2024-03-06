import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() secuenciaImg: string[] = [];
  @Input() secuenciaText: string[] = [];
  @Input() interval: number = 3000;
  indexActual: number = 0;
  cargando: boolean = false;
  private intervalId: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.iniciarLoader();
  }
  ngOnDestroy() {
    this.detenerLoader();
  }
  private iniciarLoader() {
    this.cargando = true;
    this.intervalId = setInterval(() => {
      this.indexActual = (this.indexActual + 1) % this.secuenciaImg.length;
    }, this.interval);
  }
  private detenerLoader() {
    clearInterval(this.intervalId);
    this.cargando = false;
    setTimeout(() => {
      console.log('Proceso o API finalizado');
      this.router.navigate(['/ruta']);
    }, 3000);
  }
}
