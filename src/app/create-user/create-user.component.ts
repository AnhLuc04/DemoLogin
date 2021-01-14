import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newFromUser: FormGroup;
  newFromLogin: FormGroup;

  constructor(private userService: UserServiceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.newFromUser = this.formBuilder.group({
      address: [''],
      avatar: [''],
      email: [''],
      fullName: [''],
      password: [''],
      phone: [''],
      username: ['']
    });
    this.newFromLogin = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  // tslint:disable-next-line:typedef
  createNewUser() {
    let newUserName: User;
    console.log(this.newFromUser);
    console.log(this.newFromUser.value);
    newUserName = this.newFromUser.value;
    console.log(this.newFromUser);
    console.log(newUserName.username);
    this.userService.createCustomer(newUserName).subscribe(() => {
      alert('Thêm thành công');
    }, error => {
      alert(console.log(this.userService.createCustomer(newUserName).subscribe()));
    });
  }

  // tslint:disable-next-line:typedef
  login() {
    // tslint:disable-next-line:prefer-const
    let loginUser: User;
    loginUser = this.newFromLogin.value;
    this.userService.loginUser(loginUser).subscribe(() => {
      alert('login thành cong');
    }, error => {
      alert(console.log(this.userService.createCustomer(loginUser).subscribe()));
    });
  }
}
