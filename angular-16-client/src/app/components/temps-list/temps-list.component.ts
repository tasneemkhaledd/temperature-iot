import { Component, OnDestroy, OnInit } from '@angular/core';
import { Temp } from 'src/app/models/temp.model';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-temps-list',
  templateUrl: './temps-list.component.html',
  styleUrls: ['./temps-list.component.css'],
})
export class TempsListComponent implements OnInit , OnDestroy {
  id: number | any = 0;
  temps?: Temp[];
  /* currentTutorial: Temp = {}; */
  currentTemp: Temp = {};
  currentIndex = -1;
  payload = '';

  constructor(private tempService: TempService) {}

//  ngOnInit(): void {
//    this.retrieveTemps();
//  }
ngOnInit(): void {
    this.callMethod();
    this.id = setInterval(()=>{
      this.callMethod(); },3000);
    }
    callMethod(){
      this.tempService.getAll().subscribe(res => {
        console.log(res)
        this.temps = res;
      })
    } 

  ngOnDestroy(): void {
      if(this.id) {
        clearInterval(this.id as number);
      }
  }

  retrieveTemps(): void {
    this.tempService.getAll().subscribe({
      next: (data) => {
        this.temps = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    /* this.retrieveTutorials(); */
    this.retrieveTemps();
    this.currentTemp = {};
    this.currentIndex = -1;
  }

  setActiveTemp(temp: Temp, index: number): void {
    this.currentTemp = temp;
    this.currentIndex = index;
  }

  removeAllTemps(): void {
    this.tempService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchLocation(): void {
    this.currentTemp = {};
    this.currentIndex = -1;

    this.tempService.findByLocation(this.payload).subscribe({
      next: (data) => {
        this.temps = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

