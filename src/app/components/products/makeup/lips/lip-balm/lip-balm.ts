import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/lips/lip-balm',
  templateUrl: './lip-balm.html',
  styleUrls: ['./lip-balm.css'],
})

export class LipBalm implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}