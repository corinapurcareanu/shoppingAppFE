import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes/palette',
  templateUrl: './palette.html',
  styleUrls: ['./palette.css'],
})

export class Palette implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}