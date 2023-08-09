import { Component } from '@angular/core';

@Component({
  selector: 'password-component',
  templateUrl: './password-component.component.html',
  styleUrls: ['./password-component.component.scss'],
})
export class PasswordComponent {
  password: string = '';

  ChangePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }
}
