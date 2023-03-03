import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/face/foundation',
  templateUrl: './foundation.html',
  styleUrls: ['./foundation.css'],
})

export class Foundation implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}