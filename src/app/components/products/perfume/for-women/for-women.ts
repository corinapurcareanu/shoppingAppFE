import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'perfume/for-women',
  templateUrl: './for-women.html',
  styleUrls: ['./for-women.css'],
})

export class ForWomen implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}