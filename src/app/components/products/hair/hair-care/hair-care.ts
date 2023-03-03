import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/hair-care',
  templateUrl: './hair-care.html',
  styleUrls: ['./hair-care.css'],
})

export class HairCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}