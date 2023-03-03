import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up',
  templateUrl: './makeup.html',
  styleUrls: ['./makeup.css'],
})

export class MakeUp implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}