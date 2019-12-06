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
    const data: Data[] = [];
    return this.http.get<Data>(`${this.serviceUrl}/${accountId}/data`);
  }

}

export interface Data {
  dataFragment: DataSet[];
}
