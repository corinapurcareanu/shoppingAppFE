import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/styling/hair-spray',
  templateUrl: './hair-spray.html',
  styleUrls: ['./hair-spray.css'],
})

export class HairSpray implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}