import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss']
})
export class ConsignmentsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formData: FormGroup
  selectedIncident = null
  selectedKeyword = null

  saveData(){

  }

  makeForm(d?) {
    let data = d ? d : <any>{}
    return this.formBuilder.group({
     
    })
  }

  onOpenModalDownload(content) {
    this.formData = this.makeForm()
    this.modalService.open(content, { centered: true, scrollable: true, size: 'lg' });
  }
}
