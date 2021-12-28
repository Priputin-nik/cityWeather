import { Component, OnInit } from '@angular/core';
import { ToggleCondition } from '../toggle-condition.enum';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public toggleW: ToggleCondition;

  constructor() {
    this.toggleW = ToggleCondition.celsius;
  }

  ngOnInit(): void {
  }

  toggle(evt: ToggleCondition): void {
    this.toggleW = evt;
  }

}