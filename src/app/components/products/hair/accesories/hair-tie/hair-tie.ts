import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/accesories/hair-tie',
  templateUrl: './hair-tie.html',
  styleUrls: ['./hair-tie.css'],
})

export class HairTie implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}