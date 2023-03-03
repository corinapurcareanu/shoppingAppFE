import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/lips/gloss',
  templateUrl: './gloss.html',
  styleUrls: ['./gloss.css'],
})

export class Gloss implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}