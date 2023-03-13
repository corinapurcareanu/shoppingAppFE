import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service/product.service';
import { UserAuthComponent } from 'src/app/_services/user.auth/user.auth/user.auth.component';
import { NgForm }   from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Product } from 'src/app/_model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from 'src/app/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'accessForbidden',
  templateUrl: './access.html',
  styleUrls: ['./access.css']
})
export class AccessForbidden implements OnInit {
  constructor() {
  }

 ngOnInit(): void {
 }

}