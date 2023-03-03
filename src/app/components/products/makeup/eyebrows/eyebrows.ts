import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyebrows',
  templateUrl: './eyebrows.html',
  styleUrls: ['./eyebrows.css'],
})

export class Eyebrows implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}