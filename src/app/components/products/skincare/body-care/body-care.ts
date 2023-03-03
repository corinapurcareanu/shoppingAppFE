import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/body-care',
  templateUrl: './body-care.html',
  styleUrls: ['./body-care.css'],
})

export class BodyCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}