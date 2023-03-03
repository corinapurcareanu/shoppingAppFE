import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care/hands-care',
  templateUrl: './hands-care.html',
  styleUrls: ['./hands-care.css'],
})

export class HandsCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}