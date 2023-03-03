import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/hair-care/hair-oil',
  templateUrl: './hair-oil.html',
  styleUrls: ['./hair-oil.css'],
})

export class HairOil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}