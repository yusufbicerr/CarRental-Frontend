import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[] = [];
  imageUrl:string="https://localhost:44356/Uploads/images/"

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]&&params["brandId"]){
        this.getCarDetailsByColorAndBrand(params["colorId"],params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars();
      }
    })
  }
  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.carDetails = response.data; 
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails = response.data
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails = response.data
    })
  }

  getCarDetailsByColorAndBrand(colorId:number,brandId:number){
      this.carService.getCarDetailsByColorAndBrand(colorId, brandId).subscribe(response=>{
        console.log(response)
        this.carDetails=response.data; 
      })
  }
}
