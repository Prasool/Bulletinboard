import { MemberService } from '../Services/member.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'BulletinBoardApp';
  
  constructor(private memberserv : MemberService){  
  }  
}


