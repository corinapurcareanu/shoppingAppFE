import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'bath/shower-oil',
  templateUrl: './shower-oil.html',
  styleUrls: ['./shower-oil.css'],
})

export class ShowerOil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}