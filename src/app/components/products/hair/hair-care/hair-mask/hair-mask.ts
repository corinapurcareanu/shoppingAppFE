import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/hair-care/hair-mask',
  templateUrl: './hair-mask.html',
  styleUrls: ['./hair-mask.css'],
})

export class HairMask implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}