import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/nails/nail-base',
  templateUrl: './nail-base.html',
  styleUrls: ['./nail-base.css'],
})

export class NailBase implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}