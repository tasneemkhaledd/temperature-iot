import { Component, Input, OnInit , OnDestroy } from '@angular/core';
import { TempService } from 'src/app/services/temp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Temp } from 'src/app/models/temp.model';

@Component({
  selector: 'app-temp-details',
  templateUrl: './temp-details.component.html',
  styleUrls: ['./temp-details.component.css'],
})
export class TempDetailsComponent implements OnInit , OnDestroy {
  _id: number | any = 0;
  @Input() viewMode = false;

  @Input() currentTemp: Temp = {
    payload: '',
    temperature: 0,
    createdAt :  new Date(),
    //published: false
  };

  message = '';

  constructor(
    private tempService: TempService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTemp(this.route.snapshot.params['id']);
    }
  }
  ngOnDestroy(): void {
    if(this._id) {
      clearInterval(this._id as number);
    }
}

  getTemp(_id: string): void {
    this.tempService.get(_id).subscribe({
      next: (data) => {
        this.currentTemp = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      payload: this.currentTemp.payload,
      temperature: this.currentTemp.temperature,
    };

    this.message = '';

    this.tempService.update(this.currentTemp._id, data).subscribe({
      next: (res) => {
        console.log(res);
        //this.currentTemp.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTemp(): void {
    this.message = '';

    this.tempService
      .update(this.currentTemp._id, this.currentTemp)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This temperature was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTemp(): void {
    this.tempService.delete(this.currentTemp._id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/temps']);
      },
      error: (e) => console.error(e)
    });
  }
}
