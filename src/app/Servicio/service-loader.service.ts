import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoaderService {
  private loaderSubject = new Subject<boolean>();

  loaderState$ = this.loaderSubject.asObservable();

  constructor() {}

  iniciarLoader() {
    this.loaderSubject.next(true);
  }

  detenerLoader() {
    this.loaderSubject.next(false);
  }
}