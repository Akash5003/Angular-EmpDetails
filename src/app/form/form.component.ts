import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  topic='your name is:';
  name = 'Dhoni';
  clickCount=0;
  clickme()
     {
        this.clickCount++;
     }
  
  mecclick(){
    this.clickCount--;
  }
  value='' ;
  texting(event:any){
        this.value=(event.target as HTMLInputElement).value
  }
  title='movies of kollywood';
  movies=[
    'leo',
    'varisu',
    'master',
    'bigil', 
    'sarkar'
  ]
 num=0;
color='none';
backgroundcolor='none'
todate=new Date();
word1='two things !';
word2=' determination ';
word3=' everything';
price=125;
cars:string[]=[];
carname='';
addcars(){
     this.cars.push(this.carname);
     this.carname='';
     console.log(this.cars);
}
}

