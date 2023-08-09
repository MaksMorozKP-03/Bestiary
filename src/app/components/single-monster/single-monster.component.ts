import { Component } from '@angular/core';

@Component({
  selector: 'app-single-monster',
  templateUrl: './single-monster.component.html',
  styleUrls: ['./single-monster.component.scss'],
})
export class SingleMonsterComponent {
  imagePath: string = '../../../assets/images/leshen.jpg';
}
