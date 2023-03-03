import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/styling/hair-wax',
  templateUrl: './hair-wax.html',
  styleUrls: ['./hair-wax.css'],
})

export class HairWax implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}