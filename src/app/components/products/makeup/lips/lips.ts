import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/lips',
  templateUrl: './lips.html',
  styleUrls: ['./lips.css'],
})

export class Lips implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}