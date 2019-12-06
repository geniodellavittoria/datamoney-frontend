import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {OfferDataComponent} from './offer-data/offer-data.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {OfferRoutingModule} from './offer-routing.module';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [
    MarketplaceComponent,
    OfferDataComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    OfferRoutingModule,
    RouterModule,
    AuthModule,
  ]
})
export class OfferModule {
}
