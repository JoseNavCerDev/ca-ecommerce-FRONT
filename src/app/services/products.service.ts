import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsInterface } from '../interfaces/producr.interface';

interface Chuck {
  icon_url: String,
  id: String,
  url: String,
  value: String
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  API_URL = 'http://localhost:3000/clothes';

  //API_URL = 'https://api.chucknorris.io/jokes/random';  

  constructor(
    private httpClient: HttpClient
  ) {}

  GetProducts() : Observable<ProductsInterface> {
    return this.httpClient.get<ProductsInterface>(this.API_URL);
  }

}
