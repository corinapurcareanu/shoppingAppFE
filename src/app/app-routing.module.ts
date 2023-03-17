import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeUp } from './components/products/makeup/makeup';
import { Home } from './components/home/home'
import { Perfume } from './components/products/perfume/perfume';
import { SkinCare } from './components/products/skincare/skincare';
import { Hair } from './components/products/hair/hair';
import { Bath } from './components/products/bath/bath';
import { BathSalt } from './components/products/bath/balt-salt/bath-salt';
import { ShowerGel } from './components/products/bath/shower-gel/shower-gel';
import { ShowerOil } from './components/products/bath/shower-oil/shower-oil';
import { Soap } from './components/products/bath/soap/soap';
import { Accesories } from './components/products/hair/accesories/accesories';
import { HairCare } from './components/products/hair/hair-care/hair-care';
import { Styling } from './components/products/hair/styling/styling';
import { Brushes } from './components/products/makeup/brushes/brushes';
import { Eyebrows } from './components/products/makeup/eyebrows/eyebrows';
import { Face } from './components/products/makeup/face/face';
import { Nails } from './components/products/makeup/nails/nails';
import { ForMen } from './components/products/perfume/for-men/for-men';
import { ForWomen } from './components/products/perfume/for-women/for-women';
import { BodyCare } from './components/products/skincare/body-care/body-care';
import { FaceCare } from './components/products/skincare/face-care/face-care';
import { HandsCare } from './components/products/skincare/hands-care/hands-care';
import { FeetCare } from './components/products/skincare/feet-care/feet-care';
import { Lips } from './components/products/makeup/lips/lips';
import { Eyes } from './components/products/makeup/eyes/eyes';
import { HairBrush } from './components/products/hair/accesories/hair-brush/hair-brush';
import { HairPins } from './components/products/hair/accesories/hair-pins/hair-pins';
import { HairTie } from './components/products/hair/accesories/hair-tie/hair-tie';
import { HairMask } from './components/products/hair/hair-care/hair-mask/hair-mask';
import { HairOil } from './components/products/hair/hair-care/hair-oil/hair-oil';
import { Shampoo } from './components/products/hair/hair-care/shampoo/shampoo';
import { HairGel } from './components/products/hair/styling/hair-gel/hair-gel';
import { HairSpray } from './components/products/hair/styling/hair-spray/hair-spray';
import { HairWax } from './components/products/hair/styling/hair-wax/hair-wax';
import { EyePencil } from './components/products/makeup/eyes/eye-pencil/eye-pencil';
import { Eyeliner } from './components/products/makeup/eyes/eyeliner/eyeliner';
import { Lashes } from './components/products/makeup/eyes/lashes/lashes';
import { Mascara } from './components/products/makeup/eyes/mascara/mascara';
import { Palette } from './components/products/makeup/eyes/palette/palette';
import { EyebrowsPencil } from './components/products/makeup/eyebrows/eyebrows-pencil/eyebrows-pencil';
import { EyebrowsGel } from './components/products/makeup/eyebrows/eyebrows-gel/eyebrows-gel';
import { Concealer } from './components/products/makeup/face/concealer/concealer';
import { FacePowder } from './components/products/makeup/face/face-powder/face-powder';
import { Foundation } from './components/products/makeup/face/foundation/foundation';
import { Gloss } from './components/products/makeup/lips/gloss/gloss';
import { LipBalm } from './components/products/makeup/lips/lip-balm/lip-balm';
import { LipPencil } from './components/products/makeup/lips/lip-pencil/lip-pencil';
import { Lipstick } from './components/products/makeup/lips/lipstick/lipstick';
import { NailBase } from './components/products/makeup/nails/nail-base/nail-base';
import { NailPolish } from './components/products/makeup/nails/nail-polish/nail-polish';
import { TopCoat } from './components/products/makeup/nails/top-coat/top-coat';
import { EauDeParfume as ManEauDeParfume} from './components/products/perfume/for-men/eau-de-parfume/eau-de-parfume';
import { EauDeToalette as ManEauDeToalette} from './components/products/perfume/for-men/eau-de-toalette/eau-de-toalette';
import { EauDeParfume as WomanEauDeParfume} from './components/products/perfume/for-women/eau-de-parfume/eau-de-parfume';
import { EauDeToalette as WomanEauDeToalette} from './components/products/perfume/for-women/eau-de-toalette/eau-de-toalette';
import { BodyOil } from './components/products/skincare/body-care/body-oil/body-oil';
import { BodyCream } from './components/products/skincare/body-care/body-cream/body-cream';
import { DayCream } from './components/products/skincare/face-care/day-cream/day-cream';
import { NightCream } from './components/products/skincare/face-care/night-cream/night-cream';
import { FaceMask } from './components/products/skincare/face-care/face-mask/face-mask';
import { HairBalm } from './components/products/hair/hair-care/hair-balm/hair-balm';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { AddProduct } from './components/add-product/add-product';
import { AuthGuard } from './_auth/auth.guard';
import { ShowProductDetails } from './components/show-product-details/show-product-details';
import { ProductResolveService } from './product-resolve.service';
import { ProductViewDetails } from './components/view-product-details/view-product-details';
import { BuyProductComponent } from './components/buy-product/buy-product.component';
import { ProductsResolverService } from './products-resolver.service';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { SearchView } from './components/search-view/search-view';
import { SearchResolveService } from './search-resolve.service';
import { CartComponent } from './components/cart/cart.component';
import { AccessForbidden } from './components/acces.forbidden/access';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home, //add landing page
  },
  {
    path: 'authenticate',
    pathMatch: 'full',
    component: Login,
  },
  {
    path: 'sign-up',
    pathMatch: 'full',
    component: SignUp,
  },
  {
    path: 'accessForbidden',
    pathMatch: 'full',
    component: AccessForbidden,
  },
  {
    path: 'add-product',
    pathMatch: 'full',
    component: AddProduct, canActivate:[AuthGuard], data: {roles:['admin']} ,
    resolve: {
        product: ProductResolveService
      }
  },
  {
    path: 'search-view',
    pathMatch: 'full',
    component: SearchView,
    resolve: {
        key: SearchResolveService
      }
  },
  {
    path: 'view-product-details',
    pathMatch: 'full',
    component: ProductViewDetails,
    resolve: {
        product: ProductResolveService
      }
  },
  {
    path: 'show-product-details',
    pathMatch: 'full',
    component: ShowProductDetails, canActivate:[AuthGuard], data: {roles:['admin']} 
  },
  {
    path: 'buyProduct',
    pathMatch: 'full',
    component: BuyProductComponent,  canActivate:[AuthGuard], data: {roles:['user']},
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent,  canActivate:[AuthGuard], data: {roles:['user']},
    resolve: {
      productDetails: ProductsResolverService
    }
  },
  {
    path: 'orderConfirm',
    pathMatch: 'full',
    component: OrderConfirmationComponent, canActivate:[AuthGuard], data: {roles:['user']}
  },
  {
    path: 'myOrders',
    pathMatch: 'full',
    component: MyOrdersComponent, canActivate:[AuthGuard], data: {roles:['user']}
  },
  {
    path: 'show-all-orders',
    pathMatch: 'full',
    component: OrderDetailsComponent, canActivate:[AuthGuard], data: {roles:['admin']}
  },
  {
    path: 'make-up',
    pathMatch: 'full',
    component: MakeUp
  },
  {
    path: 'perfume',
    pathMatch: 'full',
    component: Perfume
  },
  {
    path: 'skin-care',
    pathMatch: 'full',
    component: SkinCare
  },
  {
    path: 'hair',
    pathMatch: 'full',
    component: Hair
  }
  ,
  {
    path: 'bath',
    pathMatch: 'full',
    component: Bath
  },
  {
    path: 'bath/bath-salt',
    pathMatch: 'full',
    component: BathSalt
  },
  {
    path: 'bath/shower-gel',
    pathMatch: 'full',
    component: ShowerGel
  },
  {
    path: 'bath/shower-oil',
    pathMatch: 'full',
    component: ShowerOil
  },
  {
    path: 'bath/soap',
    pathMatch: 'full',
    component: Soap
  },
  {
    path: 'hair/accesories',
    pathMatch: 'full',
    component: Accesories
  },
  {
    path: 'hair/accesories/hair-brush',
    pathMatch: 'full',
    component: HairBrush
  },
  {
    path: 'hair/accesories/hair-pins',
    pathMatch: 'full',
    component: HairPins
  },
  {
    path: 'hair/accesories/hair-tie',
    pathMatch: 'full',
    component: HairTie
  },
  {
    path: 'hair/hair-care',
    pathMatch: 'full',
    component: HairCare
  },
  {
    path: 'hair/hair-care/hair-mask',
    pathMatch: 'full',
    component: HairMask
  },
  {
    path: 'hair/hair-care/hair-oil',
    pathMatch: 'full',
    component: HairOil
  },
  {
    path: 'hair/hair-care/hair-balm',
    pathMatch: 'full',
    component: HairBalm
  },
  {
    path: 'hair/hair-care/shampoo',
    pathMatch: 'full',
    component: Shampoo
  },
  {
    path: 'hair/styling',
    pathMatch: 'full',
    component: Styling
  },
  {
    path: 'hair/styling/hair-gel',
    pathMatch: 'full',
    component: HairGel
  },
  {
    path: 'hair/styling/hair-spray',
    pathMatch: 'full',
    component: HairSpray
  },
  {
    path: 'hair/styling/hair-wax',
    pathMatch: 'full',
    component: HairWax
  },
  {
    path: 'make-up/eyes',
    pathMatch: 'full',
    component: Eyes
  },
  {
    path: 'make-up/eyes/eye-pencil',
    pathMatch: 'full',
    component: EyePencil
  },
  {
    path: 'make-up/eyes/eyeliner',
    pathMatch: 'full',
    component: Eyeliner
  },
  {
    path: 'make-up/eyes/lashes',
    pathMatch: 'full',
    component: Lashes
  },
  {
    path: 'make-up/eyes/mascara',
    pathMatch: 'full',
    component: Mascara
  },
  {
    path: 'make-up/eyes/palette',
    pathMatch: 'full',
    component: Palette
  },
  {
    path: 'make-up/brushes',
    pathMatch: 'full',
    component: Brushes
  },
  {
    path: 'make-up/eyebrows',
    pathMatch: 'full',
    component: Eyebrows
  },
  {
    path: 'make-up/eyebrows/eyebrows-pencil',
    pathMatch: 'full',
    component: EyebrowsPencil
  },
  {
    path: 'make-up/eyebrows/eyebrows-gel',
    pathMatch: 'full',
    component: EyebrowsGel
  },
  {
    path: 'make-up/face',
    pathMatch: 'full',
    component: Face
  },
  {
    path: 'make-up/face/concealer',
    pathMatch: 'full',
    component: Concealer
  },
  {
    path: 'make-up/face/face-powder',
    pathMatch: 'full',
    component: FacePowder
  },
  {
    path: 'make-up/face/foundation',
    pathMatch: 'full',
    component: Foundation
  },
  {
    path: 'make-up/lips',
    pathMatch: 'full',
    component: Lips
  },
  {
    path: 'make-up/lips/gloss',
    pathMatch: 'full',
    component: Gloss
  },
  {
    path: 'make-up/lips/lip-balm',
    pathMatch: 'full',
    component: LipBalm
  },
  {
    path: 'make-up/lips/lip-pencil',
    pathMatch: 'full',
    component: LipPencil
  },
  {
    path: 'make-up/lips/lipstick',
    pathMatch: 'full',
    component: Lipstick
  },
  {
    path: 'make-up/nails',
    pathMatch: 'full',
    component: Nails
  },
  {
    path: 'make-up/nails/nail-base',
    pathMatch: 'full',
    component: NailBase
  },
  {
    path: 'make-up/nails/nail-polish',
    pathMatch: 'full',
    component: NailPolish
  },
  {
    path: 'make-up/nails/top-coat',
    pathMatch: 'full',
    component: TopCoat
  },
  {
    path: 'perfume/for-men',
    pathMatch: 'full',
    component: ForMen
  },
  {
    path: 'perfume/for-men/eau-de-parfume',
    pathMatch: 'full',
    component: ManEauDeParfume
  },
  {
    path: 'perfume/for-men/eau-de-toalette',
    pathMatch: 'full',
    component: ManEauDeToalette
  },
  {
    path: 'perfume/for-women',
    pathMatch: 'full',
    component: ForWomen
  },
  {
    path: 'perfume/for-women/eau-de-parfume',
    pathMatch: 'full',
    component: WomanEauDeParfume
  },
  {
    path: 'perfume/for-women/eau-de-toalette',
    pathMatch: 'full',
    component: WomanEauDeToalette
  },
  {
    path: 'skin-care/body-care',
    pathMatch: 'full',
    component: BodyCare
  },
  {
    path: 'skin-care/body-care/body-cream',
    pathMatch: 'full',
    component: BodyCream
  },
  {
    path: 'skin-care/body-care/body-oil',
    pathMatch: 'full',
    component: BodyOil
  },
  {
    path: 'skin-care/face-care/day-cream',
    pathMatch: 'full',
    component: DayCream
  },
  {
    path: 'skin-care/face-care/night-cream',
    pathMatch: 'full',
    component: NightCream
  },
  {
    path: 'skin-care/face-care/face-mask',
    pathMatch: 'full',
    component: FaceMask
  },
  {
    path: 'skin-care/face-care',
    pathMatch: 'full',
    component: FaceCare
  },
  {
    path: 'skin-care/hands-care',
    pathMatch: 'full',
    component: HandsCare
  },
  {
    path: 'skin-care/feet-care',
    pathMatch: 'full',
    component: FeetCare
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
