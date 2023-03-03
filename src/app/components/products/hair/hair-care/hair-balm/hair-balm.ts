import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/hair-care/hair-balm',
  templateUrl: './hair-balm.html',
  styleUrls: ['./hair-balm.css'],
})

export class HairBalm implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}