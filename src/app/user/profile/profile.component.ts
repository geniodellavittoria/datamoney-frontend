import {Component, OnInit} from '@angular/core';
import {DataSet} from 'src/app/dto/dataSet';
import {ProfileService} from './profile.service';
import {AuthService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileService: ProfileService;
  public authService: AuthService;
  public dataSets: DataSet[] = [];
  constructor(
    profileService: ProfileService,
    authService: AuthService) {
    this.profileService = profileService;
    this.authService = authService;
  }

  ngOnInit() {
    const accountId = this.authService.getSessionData().username;
    this.profileService.getData(accountId).subscribe(res => {
      console.log(res.dataFragment);
      this.dataSets = res.dataFragment;
    });
  }

}
