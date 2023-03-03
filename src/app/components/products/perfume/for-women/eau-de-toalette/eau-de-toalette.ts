import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'perfume/for-women/eau-de-toalette',
  templateUrl: './eau-de-toalette.html',
  styleUrls: ['./eau-de-toalette.css'],
})

export class EauDeToalette implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}