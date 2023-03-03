import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/face',
  templateUrl: './face.html',
  styleUrls: ['./face.css'],
})

export class Face implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}