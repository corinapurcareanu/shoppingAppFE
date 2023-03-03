import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'hair',
  templateUrl: './hair.html',
  styleUrls: ['./hair.css'],
})

export class Hair implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}