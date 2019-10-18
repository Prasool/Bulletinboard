import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(public httpClient:HttpClient) {
  }

  GetPosts(){  
   // return this.httpClient.get('http://localhost:1533/api/posts');  
    return this.httpClient.get('http://testbulletinboardapp.com/bulletinboardapi/api/posts');  
  } 
}
