import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  @Input() ctrl: AbstractControl;

  private ERROR_MESSAGES = {
    required: () => 'This field is required',
    minlength: (par) => `Min ${par.requiredLength} chars is required`
  };

  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    console.log(this.ctrl, this.ctrl.errors, this.ctrl.touched);
    return this.ctrl && this.ctrl.errors != null;
  }

  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(
      (key) => this.ERROR_MESSAGES[key](this.ctrl.getError(key))
    );
  }

}
