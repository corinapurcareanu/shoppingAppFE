import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'bath',
  templateUrl: './bath.html',
  styleUrls: ['./bath.css'],
})

export class Bath implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}