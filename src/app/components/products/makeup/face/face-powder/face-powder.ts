import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/face/face-powder',
  templateUrl: './face-powder.html',
  styleUrls: ['./face-powder.css'],
})

export class FacePowder implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}