import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../Services/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  posts = [];
  constructor(private memberService:MemberService) { }

  ngOnInit() {
    this.memberService.GetPosts().subscribe((data:any[])=>{
      this.posts = data;
    })
  }

}
