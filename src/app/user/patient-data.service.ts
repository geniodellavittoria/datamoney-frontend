import {Injectable} from '@angular/core';
import {AddPatientDataForm} from '../dto/addPatientDataForm';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = baseUrl;
  }

  addData(addPatientData: AddPatientDataForm) {
    return this.http.post(`${this.serviceUrl}/${addPatientData.accountId}/data`, addPatientData);
  }
}
