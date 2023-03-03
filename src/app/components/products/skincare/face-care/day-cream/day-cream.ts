import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/face-care/day-cream',
  templateUrl: './day-cream.html',
  styleUrls: ['./day-cream.css'],
})

export class DayCream implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}