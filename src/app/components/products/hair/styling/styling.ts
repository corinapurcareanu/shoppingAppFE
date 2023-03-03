import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/styling',
  templateUrl: './styling.html',
  styleUrls: ['./styling.css'],
})

export class Styling implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}