import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'perfume/for-men/eau-de-parfume',
  templateUrl: './eau-de-parfume.html',
  styleUrls: ['./eau-de-parfume.css'],
})

export class EauDeParfume implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}