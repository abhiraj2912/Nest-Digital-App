import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  empid=""
  firstname=""
  secondname=""
  houseno=""
  housename=""
  street=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  joining=""
  username=""
  password=""
  cpassword=""

  constructor(private route:Router){}

  readValues=()=>{
    let data:any={"empid":this.empid,"firstname":this.firstname,"secondname":this.secondname,"houseno":this.houseno,"housename":this.housename,"street":this.street,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parentname":this.parentname,"gender":this.gender,"degree":this.degree,"experience":this.experience,"joining":this.joining,"username":this.username,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
    
    if (this.password==this.cpassword) {
      alert("Registered Successfully")
      this.empid=""
      this.firstname=""
      this.secondname=""
      this.houseno=""
      this.housename=""
      this.street=""
      this.pincode=""
      this.district=""
      this.state=""
      this.country=""
      this.mobile=""
      this.email=""
      this.parentname=""
      this.gender=""
      this.degree=""
      this.experience=""
      this.joining=""
      this.username=""
      this.password=""
      this.cpassword=""
    } else {
      alert("Password Not Matching")
    }
  
  
  }







}
