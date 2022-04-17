import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44356/api/';

  constructor(private httpClient: HttpClient) {}
  getImagePath(imagePath:string){
    return this.apiUrl+imagePath
  }
  getImagesByCarId(id:number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getimagebycarid?carId='+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}