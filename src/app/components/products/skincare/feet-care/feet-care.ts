import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/feet-care',
  templateUrl: './feet-care.html',
  styleUrls: ['./feet-care.css'],
})

export class FeetCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}