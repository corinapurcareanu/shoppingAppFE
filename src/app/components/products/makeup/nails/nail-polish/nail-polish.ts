import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/nails/nail-polish',
  templateUrl: './nail-polish.html',
  styleUrls: ['./nail-polish.css'],
})

export class NailPolish implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}