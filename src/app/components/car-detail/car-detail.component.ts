import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/carDetail';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: CarDetail[] = [];
  carImagePaths:string[] = [];
  carDetail: CarDetail;
  dataLoaded = false;
  imageUrl:string="https://localhost:44356/Uploads/images/"
  //--for rental
  
 
  
  
  carImages:CarImage[]=[];//slider için

  constructor(private carImageService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {//car id verilirse ki arabaya tiklayinca verilmis olur: icerdeki emthodlari calistir

      if(params['carId']){
          this.getCarsDetailsByCarId(params['carId'])
         // this.getImagesByCarId(params['carId'])

        }
    })

    
  }

  getCarsDetailsByCarId(carId: number){//details sayfamızdaki araç detaylarını çekiyor
    this.carService.getCarDetailByCar(carId).subscribe((response)=>{
      this.cars=response.data
      this.carDetail = response.data[0];//sıfırıncı eement bilgilerin olduğu kısım,sonra mesaj felan geliyor
      
      this.carImagePaths=this.carDetail.imagePath
      this.dataLoaded = true;

    })
  }
}
