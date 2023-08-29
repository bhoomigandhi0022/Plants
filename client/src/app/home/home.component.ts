import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
registerMode=false;
users: any;

constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getusers();
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

  getusers() {
    this.http.get('https://localhost:7241/api/users').subscribe({
      next: Response => this.users = Response,
      error: error => console.log(error),
      complete: () => console.log("Request has been completed!!!!")
    })
  }

  cancelRegistermode(event: boolean){
    this.registerMode=event;
  }
}
