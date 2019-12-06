import {Component, OnInit} from '@angular/core';
import {DataSet} from '../../dto/dataSet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferService} from '../offer.service';
import {Offer} from '../../models/offer';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-offer-data',
  templateUrl: './offer-data.component.html',
  styleUrls: ['./offer-data.component.scss']
})
export class OfferDataComponent implements OnInit {

  offerDataForm: FormGroup;

  public dataSets: DataSet[] = [
    {
      hash: 'ASDFASDFASF',
      rawData: 'ESTEST'
    },
    {
      hash: 'HASHHASHHASH',
      rawData: 'TEST DATA'
    }
  ];
  error: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private offerService: OfferService) {
  }

  ngOnInit() {
    this.offerDataForm = this.fb.group({
      description: ['', Validators.required],
      expireDate: ['', Validators.required],
      price: ['', Validators.required],
      offeredData: this.fb.array([]),
    });
  }

  createOffer() {
    const offer = this.offerDataForm.getRawValue() as Offer;
    offer.ownerId = this.authService.getSessionData().id;
    this.offerService.addOffer(offer)
      .subscribe(res => {
        console.log(res);
      });
  }
}
