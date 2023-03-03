import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/brushes',
  templateUrl: './brushes.html',
  styleUrls: ['./brushes.css'],
})

export class Brushes implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}