import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'perfume',
  templateUrl: './perfume.html',
  styleUrls: ['./perfume.css'],
})

export class Perfume implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}