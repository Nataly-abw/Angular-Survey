import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'su-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
  inputValue = "";

  surveyForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Input Validation
    this.surveyForm = this.formBuilder.group({
      namee: ['', [Validators.required, Validators.pattern]],
      textBox: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true

    if (this.surveyForm.invalid) {
      return
    } else {
      this.getInputValue
      this.ThankyouPopUp();
    }
  }

  getInputValue(val: string) {
    this.inputValue = val;
  }

  ThankyouPopUp(): void {
    Swal.fire({
      backdrop: `
      rgba(255,255,255,0.5)
      left top
      no-repeat`,
      background: '#6699CC',
      color: 'white',
      confirmButtonColor: '#97DECE',
      title: ("Thank you " + this.inputValue + "!"),
      text: 'Your feedback helps others make better decisions about which service to choose.',
      confirmButtonText: 'Done'
    }).then((result) => {
      if (result.value) {
        window.location.reload();
      }
    })
  }

}
