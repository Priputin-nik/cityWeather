import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { cities } from '../cities.const';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filteredOptions!: Observable<string[]>;
  public control: FormControl;

  constructor(public dataSourceService: DataSourceService) { 
    this.control = dataSourceService.control;
  }

  ngOnInit() {
    this.subscribeOptionsFiltration()
  }

  subscribeOptionsFiltration() { 
  this.filteredOptions = this.control.valueChanges.pipe(
    startWith(''),
    map(name => (name ? this._filter(name) : cities.slice())),
  );
}

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return cities.filter(city => city.toLowerCase().includes(filterValue));
  }

}