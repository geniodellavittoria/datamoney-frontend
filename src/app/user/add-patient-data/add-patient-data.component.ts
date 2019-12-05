import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PatientDataService} from '../patient-data.service';
import {AddPatientDataForm} from '../../dto/addPatientDataForm';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-add-patient-data',
  templateUrl: './add-patient-data.component.html',
  styleUrls: ['./add-patient-data.component.scss']
})
export class AddPatientDataComponent implements OnInit {
  private patientDataForm: FormGroup;
  error: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private authService: AuthService,
              private patientDataService: PatientDataService) { }

  ngOnInit() {
    this.patientDataForm = this.fb.group({
      data: ['', Validators.required]
    });
  }

  saveData() {
    if (this.patientDataForm.valid) {
      const patientData = this.patientDataForm.getRawValue() as AddPatientDataForm;
      patientData.accountId = this.authService.getSessionData().username;
      this.patientDataService.addData(patientData)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['../profile'], { relativeTo: this.route});
        });
    }
  }

}
