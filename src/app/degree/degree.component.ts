import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {
  public data$: Observable<any>;

  constructor(public dataSourceService: DataSourceService) {
    this.data$ = dataSourceService.dataSource$.pipe(share());
  }

  ngOnInit() {
  
  }

}