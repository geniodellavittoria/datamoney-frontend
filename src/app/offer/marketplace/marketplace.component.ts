import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Offer} from '../../models/offer';
import {OfferService} from '../offer.service';
import {AcceptedOffer} from '../../dto/acceptedOfferForm';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  offers: Observable<Offer>;

  constructor(private authService: AuthService,
              private offerService: OfferService) { }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

  acceptOffer(offer: Offer) {
    const acceptedOffer = {
      offerId: offer.id,
      buyerPublicKey: this.authService.getSessionData().publicKey,
    } as AcceptedOffer;
    this.offerService.acceptOffer(acceptedOffer);
  }
}
