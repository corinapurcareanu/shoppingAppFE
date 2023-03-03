import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes/lashes',
  templateUrl: './lashes.html',
  styleUrls: ['./lashes.css'],
})

export class Lashes implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}