import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'bath/shower-gel',
  templateUrl: './shower-gel.html',
  styleUrls: ['./shower-gel.css'],
})

export class ShowerGel implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}