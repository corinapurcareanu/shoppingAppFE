import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/accesories/hair-pins',
  templateUrl: './hair-pins.html',
  styleUrls: ['./hair-pins.css'],
})

export class HairPins implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}