import { Component } from '@angular/core';
import { Temp } from 'src/app/models/temp.model';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-add-temp',
  templateUrl: './add-temp.component.html',
  styleUrls: ['./add-temp.component.css'],
})
export class AddTempComponent {
  temp: Temp = {
    payload: '',
    temperature: 0,
  };
  submitted = false;

  constructor(private tempService: TempService) {}

  saveTemp(): void {
    const data = {
      location: this.temp.payload,
      temperature: this.temp.temperature
    };

    this.tempService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTemp(): void {
    this.submitted = false;
    this.temp = {
      payload: '',
      temperature: 0,
      //published: false
    };
  }
}
