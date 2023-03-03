import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes',
  templateUrl: './eyes.html',
  styleUrls: ['./eyes.css'],
})

export class Eyes implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}