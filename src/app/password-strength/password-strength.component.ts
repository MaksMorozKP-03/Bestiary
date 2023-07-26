import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PasswordState } from 'src/shared/constants';

@Component({
  selector: 'password-strength-component',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = "";

  section1: string = "";
  section2: string = "";
  section3: string = "";

  missingParts: string[] = [];

  @Output() explanation: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    this.password = changes["password"].currentValue;
    let force = this.CheckPasswordStrength(this.password);
    this.SetSectionsColors(force);
  }

  CheckPasswordStrength(password: string) {
    let force = 0;
    this.missingParts = [];
    if (password.length == 0) {
      return force;
    }

    force += 1;

    if (this.password.length < 8) {
      return force;
    }

    const letters = /[a-zA-Z]+/.test(this.password);
    const numbers = /[0-9]+/.test(this.password);
    const symbols = /\W|_/g.test(this.password);

    letters ? force += 1 : this.missingParts.push($localize`letters`);
    numbers ? force += 1 : this.missingParts.push($localize`numbers`);
    symbols ? force += 1 : this.missingParts.push($localize`symbols`);
    return force;
  }

  SetSectionsColors(force: Number) {
    this.explanation = "";
    if (force === PasswordState.Empty) {
      this.section1 = "revert";
      this.section2 = "revert";
      this.section3 = "revert";
    }

    else if (force === PasswordState.Strong) {
      this.section1 = "green";
      this.section2 = "green";
      this.section3 = "green";
    }

    else {
      this.explanation = $localize`Password must contain: ${this.missingParts}`;

      if (force === PasswordState.Easy) {
        this.section1 = "red";
        this.section2 = "red";
        this.section3 = "red";
        this.explanation += $localize`(8 or more characters)`;
      }

      else if (force === PasswordState.MediumSingle) {
        this.section1 = "red";
        this.section2 = "revert";
        this.section3 = "revert";
      }

      else if (force === PasswordState.MediumDouble) {
        this.section1 = "yellow";
        this.section2 = "yellow";
        this.section3 = "revert";
      }
    }
  }
}
