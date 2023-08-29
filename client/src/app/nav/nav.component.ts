import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of} from 'rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null> = of(null);

  constructor(public accountservices: AccountService) { }

  ngOnInit(): void {
    this.currentUser$= this.accountservices.currentUser$;
  }

  login() {
    this.accountservices.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log("Invalid Password")
    });
  }
  logout() {
    this.accountservices.logout();
  }

}
