import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyebrows/eyebrows-pencil',
  templateUrl: './eyebrows-pencil.html',
  styleUrls: ['./eyebrows-pencil.css'],
})

export class EyebrowsPencil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}