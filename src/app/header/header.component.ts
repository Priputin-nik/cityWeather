import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { cities } from '../cities.const';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public filteredOptions!: Observable<string[]>;
  public control: FormControl;
  private destroy$: Subject<void>;

  constructor(public dataSourceService: DataSourceService) { 
    this.control = dataSourceService.control;
    this.destroy$ = new Subject();
  }

  ngOnInit() {
    this.subscribeOptionsFiltration()
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeOptionsFiltration() { 
  this.filteredOptions = this.control.valueChanges.pipe(
    takeUntil(this.destroy$),
    startWith(''),
    map(name => (name ? this._filter(name) : cities.slice())),
  );
}

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return cities.filter(city => city.toLowerCase().includes(filterValue));
  }

}