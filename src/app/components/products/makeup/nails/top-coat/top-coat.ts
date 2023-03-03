import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/nails/top-coat',
  templateUrl: './top-coat.html',
  styleUrls: ['./top-coat.css'],
})

export class TopCoat implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}