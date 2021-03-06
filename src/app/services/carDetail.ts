import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetail(id:number): Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}