import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/hair-care/shampoo',
  templateUrl: './shampoo.html',
  styleUrls: ['./shampoo.css'],
})

export class Shampoo implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}