import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes/eyeliner',
  templateUrl: './eyeliner.html',
  styleUrls: ['./eyeliner.css'],
})

export class Eyeliner implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}