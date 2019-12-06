import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuardService} from '../auth/auth.guard';
import {OfferDataComponent} from './offer-data/offer-data.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';

const routes: Routes = [
  { path: 'data', component: OfferDataComponent, canActivate: [AuthGuardService] },
  { path: 'market', component: MarketplaceComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: '**', redirectTo: 'data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule {
}
