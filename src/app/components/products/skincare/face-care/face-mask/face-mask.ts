import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/face-care/face-mask',
  templateUrl: './face-mask.html',
  styleUrls: ['./face-mask.css'],
})

export class FaceMask implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}