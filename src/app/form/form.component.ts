import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  states: any;
  constructor(public fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/states.json').subscribe(res => {
      this.states = res;
    })
    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      state: ['']
    })
  }

  submit() {
    console.log(this.myForm.value);
    
  }

}
