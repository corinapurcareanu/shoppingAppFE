import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes/mascara',
  templateUrl: './mascara.html',
  styleUrls: ['./mascara.css'],
})

export class Mascara implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}