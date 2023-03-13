import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './components/home/home';
import { BathSalt } from './components/products/bath/balt-salt/bath-salt';
import { Bath } from './components/products/bath/bath';
import { ShowerGel } from './components/products/bath/shower-gel/shower-gel';
import { ShowerOil } from './components/products/bath/shower-oil/shower-oil';
import { Soap } from './components/products/bath/soap/soap';
import { Accesories } from './components/products/hair/accesories/accesories';
import { HairBrush } from './components/products/hair/accesories/hair-brush/hair-brush';
import { HairPins } from './components/products/hair/accesories/hair-pins/hair-pins';
import { HairTie } from './components/products/hair/accesories/hair-tie/hair-tie';
import { Hair } from './components/products/hair/hair';
import { HairBalm } from './components/products/hair/hair-care/hair-balm/hair-balm';
import { HairCare } from './components/products/hair/hair-care/hair-care';
import { HairMask } from './components/products/hair/hair-care/hair-mask/hair-mask';
import { HairOil } from './components/products/hair/hair-care/hair-oil/hair-oil';
import { Shampoo } from './components/products/hair/hair-care/shampoo/shampoo';
import { HairGel } from './components/products/hair/styling/hair-gel/hair-gel';
import { HairSpray } from './components/products/hair/styling/hair-spray/hair-spray';
import { HairWax } from './components/products/hair/styling/hair-wax/hair-wax';
import { Styling } from './components/products/hair/styling/styling';
import { Brushes } from './components/products/makeup/brushes/brushes';
import { Eyebrows } from './components/products/makeup/eyebrows/eyebrows';
import { EyebrowsGel } from './components/products/makeup/eyebrows/eyebrows-gel/eyebrows-gel';
import { EyePencil } from './components/products/makeup/eyes/eye-pencil/eye-pencil';
import { Eyeliner } from './components/products/makeup/eyes/eyeliner/eyeliner';
import { Eyes } from './components/products/makeup/eyes/eyes';
import { Lashes } from './components/products/makeup/eyes/lashes/lashes';
import { Mascara } from './components/products/makeup/eyes/mascara/mascara';
import { Palette } from './components/products/makeup/eyes/palette/palette';
import { Concealer } from './components/products/makeup/face/concealer/concealer';
import { FacePowder } from './components/products/makeup/face/face-powder/face-powder';
import { Foundation } from './components/products/makeup/face/foundation/foundation';
import { Gloss } from './components/products/makeup/lips/gloss/gloss';
import { LipBalm } from './components/products/makeup/lips/lip-balm/lip-balm';
import { LipPencil } from './components/products/makeup/lips/lip-pencil/lip-pencil';
import { Lips } from './components/products/makeup/lips/lips';
import { Lipstick } from './components/products/makeup/lips/lipstick/lipstick';
import { MakeUp } from './components/products/makeup/makeup';
import { NailBase } from './components/products/makeup/nails/nail-base/nail-base';
import { NailPolish } from './components/products/makeup/nails/nail-polish/nail-polish';
import { Nails } from './components/products/makeup/nails/nails';
import { TopCoat } from './components/products/makeup/nails/top-coat/top-coat';
import { ForMen } from './components/products/perfume/for-men/for-men';
import { ForWomen } from './components/products/perfume/for-women/for-women';
import { Perfume } from './components/products/perfume/perfume';
import { BodyCare } from './components/products/skincare/body-care/body-care';
import { FaceCare } from './components/products/skincare/face-care/face-care';
import { FeetCare } from './components/products/skincare/feet-care/feet-care';
import { HandsCare } from './components/products/skincare/hands-care/hands-care';
import { SkinCare } from './components/products/skincare/skincare';
import { EauDeParfume as ManEauDeParfume} from './components/products/perfume/for-men/eau-de-parfume/eau-de-parfume';
import { EauDeToalette as ManEauDeToalette} from './components/products/perfume/for-men/eau-de-toalette/eau-de-toalette';
import { EauDeParfume as WomanEauDeParfume} from './components/products/perfume/for-women/eau-de-parfume/eau-de-parfume';
import { EauDeToalette as WomanEauDeToalette} from './components/products/perfume/for-women/eau-de-toalette/eau-de-toalette';
import { DayCream } from './components/products/skincare/face-care/day-cream/day-cream';
import { NightCream } from './components/products/skincare/face-care/night-cream/night-cream';
import { FaceMask } from './components/products/skincare/face-care/face-mask/face-mask';
import { Face } from './components/products/makeup/face/face';
import { Login } from './components/login/login';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserAuthComponent } from './_services/user.auth/user.auth/user.auth.component'
import { RouterModule } from '@angular/router';
import { Header } from './components/header/header';
import { SignUp } from './components/sign-up/sign-up';
import { AddProduct } from './components/add-product/add-product';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './drag.directive'
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShowProductDetails } from './components/show-product-details/show-product-details';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ShowProductImagesDialogComponent } from './components/show-product-images-dialog/show-product-images-dialog.component'
import {MatDialogModule} from '@angular/material/dialog';
import { ProductViewDetails } from './components/view-product-details/view-product-details';
import { BuyProductComponent } from './components/buy-product/buy-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { SearchView } from './components/search-view/search-view';
import { CartComponent } from './components/cart/cart.component';
import {MatSelectModule} from '@angular/material/select';
import { BodyCream } from './components/products/skincare/body-care/body-cream/body-cream';
import { EyebrowsPencil } from './components/products/makeup/eyebrows/eyebrows-pencil/eyebrows-pencil';
import { BodyOil } from './components/products/skincare/body-care/body-oil/body-oil';
import { SearchResolveService } from './search-resolve.service';
import { AccessForbidden } from './components/acces.forbidden/access';

@NgModule({
  declarations: [
    AppComponent,
    MakeUp,
    Perfume,
    SkinCare,
    Hair,
    Bath,
    Eyes,
    BathSalt,
    ShowerGel,
    ShowerOil,
    Soap,
    Accesories,
    HairCare,
    Styling,
    Brushes,
    Eyes,
    Eyebrows,
    Lips,
    Nails,
    ForMen,
    ForWomen,
    BodyCare,
    FaceCare,
    Face,
    FeetCare,
    HandsCare,
    HairGel,
    HairSpray,
    HairWax,
    HairBalm,
    HairMask,
    HairOil,
    Shampoo,
    HairBrush,
    HairPins,
    HairTie,
    EyePencil,
    Eyeliner,
    Lashes,
    Mascara,
    Palette,
    EyePencil,
    EyebrowsGel,
    Concealer,
    FacePowder,
    Foundation,
    Gloss,
    LipBalm,
    LipPencil,
    Lipstick,
    NailBase,
    NailPolish,
    TopCoat,
    WomanEauDeParfume,
    WomanEauDeToalette,
    ManEauDeParfume,
    ManEauDeToalette,
    DayCream,
    NightCream,
    FaceMask,
    Login,
    Home,
    Header,
    SignUp,
    AddProduct,
    DragDirective,
    ShowProductDetails,
    ShowProductImagesDialogComponent,
    ProductViewDetails,
    BuyProductComponent,
    OrderConfirmationComponent,
    SearchView,
    CartComponent,
    BodyCream,
    EyebrowsPencil,
    BodyOil,
    AccessForbidden
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService,
    SearchResolveService,
    provideAnimations()
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
