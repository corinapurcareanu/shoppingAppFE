import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/lips/lipstick',
  templateUrl: './lipstick.html',
  styleUrls: ['./lipstick.css'],
})

export class Lipstick implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}