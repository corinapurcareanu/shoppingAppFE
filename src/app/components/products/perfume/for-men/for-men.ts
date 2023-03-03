import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'perfume/for-men',
  templateUrl: './for-men.html',
  styleUrls: ['./for-men.css'],
})

export class ForMen implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}