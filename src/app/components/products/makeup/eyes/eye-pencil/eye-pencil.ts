import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'make-up/eyes/eye-pencil',
  templateUrl: './eye-pencil.html',
  styleUrls: ['./eye-pencil.css'],
})

export class EyePencil implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}