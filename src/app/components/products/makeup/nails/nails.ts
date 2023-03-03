import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/nails',
  templateUrl: './nails.html',
  styleUrls: ['./nails.css'],
})

export class Nails implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}