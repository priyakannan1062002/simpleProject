
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  implements OnInit  {
  title = 'form';
  reativeform: FormGroup;
  arraydataformData:any[]=[]
  constructor(){  
    this.reativeform = new FormGroup({
      'username': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
    
  }

    
  ngOnInit():void{
  }
    Onsubmit(){
      console.log(this.reativeform.value);
      console.log(this.arraydataformData);
      this.arraydataformData.push(this.reativeform.value);
      return this.arraydataformData
    }


public implement =false
Delete(){
  alert(this.implement = true)
}

  }

  
  
   

  


  