import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder :FormBuilder,
        private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigate(['../veiculo/cadastro'], { relativeTo: this.route });
  }
 
   checkLogin(){
     this.flagsCheck = true;
     if(this.loginForm.controls['username'].value ==="1" && this.loginForm.controls['password'].value ==="1"){
      this.message ="Login Realizado" 
    }
    else if(this.loginForm.controls['username'].value ==="joao@gmail.com" && this.loginForm.controls['password'].value ==="123456"){
      this.message ="Login Realizado" 
    }
    else if(this.loginForm.controls['username'].value ==="carlos@gmail.com" && this.loginForm.controls['password'].value ==="54321"){
      this.message ="lLogin Realizado" 
      
    }
    else if(this.loginForm.controls['username'].value ==="maria@hotmail.com" && this.loginForm.controls['password'].value ==="987654"){
      this.message ="Login Realizado" 
      
    }else{
      this.message ="Usuário não cadastrado";
    }
  }

  sair() {
    localStorage.removeItem('user');
    this.router.navigate(['/home/login']);
}
}
