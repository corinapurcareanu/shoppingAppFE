import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/body-care/body-oil',
  templateUrl: './body-oil.html',
  styleUrls: ['./body-oil.css'],
})

export class BodyOil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}