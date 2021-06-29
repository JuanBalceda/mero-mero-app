import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any;

  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.model = {
      username: '',
      password: ''
    }
  }

  register() {
    console.log('register', this.model);
    this.accountService.register(this.model).subscribe(() => this.cancel());
  }

  cancel() {
    console.log('cancel');
    this.cancelRegister.emit(false);
  }
}
