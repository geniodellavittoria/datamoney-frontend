import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offer} from '../models/offer';
import {Api} from '../config/api';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private serviceUrl: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.serviceUrl = Api.offer;
  }

  addOffer(offer: Offer) {
    return this.http.post(this.serviceUrl, offer);
  }

  getOffers() {
    return this.http.get<Offer>(this.serviceUrl);
  }
}
