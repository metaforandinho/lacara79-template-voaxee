import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = './assets/lista.json';
  lista: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((resp) => {
      this.lista = resp;
      console.log(this.lista);
    });
  }
}
