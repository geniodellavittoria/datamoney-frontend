import { Injectable } from '@angular/core';
import { Api, baseUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { DataSet } from 'src/app/dto/dataSet';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = baseUrl;
  }

  getData(accountId: string) {
    const data: DataSet[] = [];
    var result = this.http.get<DataSet[]>(`${this.serviceUrl}/${accountId}/data`);
    console.log(result);
    return result;
  }

}
