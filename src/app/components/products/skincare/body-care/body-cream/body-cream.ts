import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/body-care/body-cream',
  templateUrl: './body-cream.html',
  styleUrls: ['./body-cream.css'],
})

export class BodyCream implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}