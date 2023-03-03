import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'bath/soap',
  templateUrl: './soap.html',
  styleUrls: ['./soap.css'],
})

export class Soap implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}