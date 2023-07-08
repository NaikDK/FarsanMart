import { Component } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FarsanMartUI';

  myHolidayDates = [
    new Date('06/1/2023'),
    new Date('06/20/2023'),
    new Date('06/17/2023'),
    new Date('06/25/2023'),
    new Date('06/4/2023'),
    new Date('06/7/2023'),
    new Date('06/12/2023'),
    new Date('06/11/2023'),
    new Date('12/26/2023'),
    new Date('12/25/2023'),
  ];

  myHolidayFilter: DateFilterFn<Date | null> = (d: Date | null): boolean => {
    if (d == null) {
      return false;
    }
    const time = d.getTime();
    return !this.myHolidayDates.find((x) => x.getTime() == time);
  };

  ngOnInit(): void {
    localStorage.clear();
  }
}
