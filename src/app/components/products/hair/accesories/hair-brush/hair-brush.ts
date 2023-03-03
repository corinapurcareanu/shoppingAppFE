import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/accesories/hair-brush',
  templateUrl: './hair-brush.html',
  styleUrls: ['./hair-brush.css'],
})

export class HairBrush implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}