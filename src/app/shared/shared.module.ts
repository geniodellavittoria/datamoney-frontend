import {NgModule} from "@angular/core";
import {ErrorMessagesComponent} from './error-messages/error-messages.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorMessagesComponent
  ]
})
export class SharedModule {
}
