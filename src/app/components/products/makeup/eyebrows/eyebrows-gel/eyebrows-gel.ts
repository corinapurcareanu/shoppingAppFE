import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyebrows/eyebrows-gel',
  templateUrl: './eyebrows-gel.html',
  styleUrls: ['./eyebrows-gel.css'],
})

export class EyebrowsGel implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}