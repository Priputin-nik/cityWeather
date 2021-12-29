import { Component, Input, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { DataSourceService } from '../data-source.service';
import { ToggleCondition } from '../toggle-condition.enum';

@Component({
  selector: 'app-main-block-temp',
  templateUrl: './main-block-temp.component.html',
  styleUrls: ['./main-block-temp.component.scss']
})
export class MainBlockTempComponent implements OnInit {
  @Input() public toggle: ToggleCondition;

  h: string = '03d'
  public data$: Observable<any>;


  constructor(public dataSourceService: DataSourceService) {
    this.data$ = dataSourceService.dataSource$.pipe(share());
    this.toggle = ToggleCondition.celsius;
    // this.data$.subscribe(m => console.log(m));

  }

  ngOnInit(): void {  

  }

}