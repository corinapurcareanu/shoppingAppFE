import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/face-care',
  templateUrl: './face-care.html',
  styleUrls: ['./face-care.css'],
})

export class FaceCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}