import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister =new EventEmitter();
  model: any = {}

  constructor(private accountservices: AccountService,private toastr: ToastrService) { }

  ngOnInit(): void {

  }
register(){
 this.accountservices.register(this.model).subscribe({
  next: response =>{
    this.cancelregister();
  },
  error:error => this.toastr.error(error.error)
 })
}

cancelregister(){
  this.cancelRegister.emit(false);
}
}
