import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, Observable, share, startWith, switchMap } from 'rxjs';
import { cities } from './cities.const';
import { GetWeatherDataService } from './get-weather-data.service';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  public control: FormControl;
  public dataSource$: Observable<any>;

  constructor(private getWeatherDataService: GetWeatherDataService) {
    this.control = new FormControl(cities[0]);
    this.dataSource$ = this.control.valueChanges.pipe(
      startWith(this.control.value),
      distinctUntilChanged(),
      filter((value) => cities.includes(value)),
      switchMap((value) => getWeatherDataService.getDataAPI(value)),
      share()
    );
  }
}
