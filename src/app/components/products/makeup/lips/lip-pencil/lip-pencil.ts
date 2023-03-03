import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/lips/lip-pencil',
  templateUrl: './lip-pencil.html',
  styleUrls: ['./lip-pencil.css'],
})

export class LipPencil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}