import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair/accesories',
  templateUrl: './accesories.html',
  styleUrls: ['./accesories.css'],
})

export class Accesories implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}