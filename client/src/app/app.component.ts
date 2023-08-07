import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Plants App';
  users: any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:7241/api/users').subscribe({
      next: Response => this.users=Response,
      error:error => console.log(error),
      complete: () => console.log("Request has been completed!!!!")
    })
  }
}
