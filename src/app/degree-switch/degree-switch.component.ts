import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToggleCondition } from '../toggle-condition.enum';


@Component({
  selector: 'app-degree-switch',
  templateUrl: './degree-switch.component.html',
  styleUrls: ['./degree-switch.component.scss']
})
export class DegreeSwitchComponent implements OnInit {
  @Output() public toggleDegree: EventEmitter<ToggleCondition>;
  color: ThemePalette = 'accent';

  constructor() { 
    this.toggleDegree = new EventEmitter();
  }
  
  ngOnInit() {
  }

  changeCondition(ev:MatSlideToggleChange): void {
  if (ev.checked) {
    this.toggleDegree.emit(ToggleCondition.kelvin);
  }
  else {
    this.toggleDegree.emit(ToggleCondition.celsius);
  }
  }

}