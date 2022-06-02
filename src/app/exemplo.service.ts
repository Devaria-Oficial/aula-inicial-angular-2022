import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor(private http: HttpClient) {
  }

  public exemplo(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.adviceslip.com/advice')
        .subscribe({
          next: (v) => resolve(v),
          error: (v) => reject(v)
        })
    });
  }
}
