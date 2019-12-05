import { Component, OnInit } from '@angular/core';
import { DataSet } from 'src/app/dto/dataSet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
