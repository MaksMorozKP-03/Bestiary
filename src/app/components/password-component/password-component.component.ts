import { Component} from '@angular/core';

@Component({
  selector: 'password-component',
  templateUrl: './password-component.component.html',
  styleUrls: ['./password-component.component.css']
})
export class PasswordComponent {

  password: string = "";
  
  ChangePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }  
}
