import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/styling/hair-gel',
  templateUrl: './hair-gel.html',
  styleUrls: ['./hair-gel.css'],
})

export class HairGel implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}