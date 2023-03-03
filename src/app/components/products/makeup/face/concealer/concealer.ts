import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/face/concealer',
  templateUrl: './concealer.html',
  styleUrls: ['./concealer.css'],
})

export class Concealer implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}