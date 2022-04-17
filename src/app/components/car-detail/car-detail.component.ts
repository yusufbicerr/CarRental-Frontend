import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/carDetail';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  currentCars:CarDetail[]=[];
  brands:Brand[]=[];
  carImages:CarImage[]=[];
  imagePath: string = 'https://localhost:44356/';
  constructor(
    private carImageService:CarImageService,
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetail(params['id']);
      }
      this.getImagesByCarId(params['id']);

    });
  }

  getCarDetail(id: number) {
    this.carDetailService.getCarDetail(id).subscribe((response) => {
      this.currentCars = response.data;
    });
  }

  getImagesByCarId(id: number) {
    this.carImageService.getImagesByCarId(id).subscribe((response) => {
      this.carImages = response.data;
      console.log(this.carImageService.getImagesByCarId(id));
    });
  }

}