import { Component, Input } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<h1 my-error>Hello {{name}}</h1>`,
})

export class AppComponent {
  val = ""; // these are all variables
  name = "Angular Eddie"
  title = 'my-app'
  arrayData = [10,2]
  nameText = "property binding disabled"
  isDisabled = true
  obj= {
    title: "addEventListener",
    body: "good"
  }
  // if on the app.component.html page, I insert a var like {{title}} , it will show "my-app"
  // this is like using ejs 
  testFunc(a: string) {
    alert(a)
  }
  

  getInputVal(item: any) {
    alert(item.value); // this.val is from the val variable
  }

  color="green" // this is for the switch cases

  fruits = ["apple", "pear", "pineapple", "guava"] // this is for the for loop

  info = [
    {name: "eddie", email: "1@1.com"},
    {name: "shi", email: "1@2.com"},
    {name: "kay", email: "1@3.com"},
  ]

  onSubmit(data: any) {
    console.log(data); // we should be able to see the value from the js console 
  }

  hero = "spider man"; // pass in as a var for the child

  // below is for style binding / dynamic style
  pinkColor = "pink"; 
  error = false;
  onChangeColor() {
    if (this.error === true) {
      this.error = false; 
      // since error will become true by the below method, we need to change it back so that we can change the color again
    }
    this.pinkColor = "gold";
  }

  onChangeToErrorColor() {
    this.error = true;
  }

  parentFunction(data: any) {
    console.log(data);
  } 

  model = {
    right: "it is right",
    middle: "it is middle",
    left: "it is left"
  }

  users = { 
    goodUser: "they are good users"
  }
}

