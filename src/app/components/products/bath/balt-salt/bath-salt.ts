import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'bath/bath-salt',
  templateUrl: './bath-salt.html',
  styleUrls: ['./bath-salt.css'],
})

export class BathSalt implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}