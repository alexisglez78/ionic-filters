import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb:FormBuilder, private auth:AuthService,private router: Router) {
    this.formData = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {}

  change(event: any){
    this.screen = event;
  }

  login(){
    var formData: any = new FormData();

    if(this.formData.valid){
      this.isLoading = true
      formData.append('email', this.formData.get('email')?.value);
      formData.append('password', this.formData.get('password')?.value);
      this.auth.login(formData).subscribe((data:any)=>{
        this.auth.saveToken(data.token);
        this.router.navigate(['/home']);

      });
    }
  }
}
