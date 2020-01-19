import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsApiUrl);
  }

  public getProductDetailsById(id: string): Observable<Product> {
    let params = new HttpParams().set("id", id);

    return this.http.get<Product>(environment.productsApiUrl + "/" + id);
  }
}
