import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() user;
  constructor(private auth:AuthService,
    private router:Router,
    private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const{email,password}=f.form.value;
    this.auth.signIn(email,password).then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success("Sign In Success");
    })
    .catch((err)=>{
        console.log(err.message);
        this.toastr.error("Sign In Failed");

    })
  }

}
