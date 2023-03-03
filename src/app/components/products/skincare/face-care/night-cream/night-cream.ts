import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/face-care/night-cream',
  templateUrl: './night-cream.html',
  styleUrls: ['./night-cream.css'],
})

export class NightCream implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}