import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Offer} from '../../models/offer';
import {OfferService} from '../offer.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  offers: Observable<Offer>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

}
