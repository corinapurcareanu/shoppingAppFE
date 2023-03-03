import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'skin-care',
  templateUrl: './skincare.html',
  styleUrls: ['./skincare.css'],
})

export class SkinCare implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}