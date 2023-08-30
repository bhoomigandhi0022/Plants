import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of} from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null> = of(null);
  
  constructor(public accountservices: AccountService,private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentUser$= this.accountservices.currentUser$;
  }

  login() {
    this.accountservices.login(this.model).subscribe({
      next: response => {
        this.router.navigateByUrl("/members");
      },
      error: error => this.toastr.error(error.error)
    });
  }
  logout() {
    this.accountservices.logout();
    this.router.navigateByUrl("/");
  }

}
