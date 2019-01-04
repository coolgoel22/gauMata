import { Component, OnInit, ViewChild } from '@angular/core';
import { DataControllerService } from '../service/data-controller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../app-constants';

import { GavySidhRecords } from '../model/gavySidh.interface';

@Component({
  selector: 'app-add-gavy-sidh',
  templateUrl: './add-gavy-sidh.component.html',
  styleUrls: ['./add-gavy-sidh.component.less']
})
export class AddGavySidhComponent implements OnInit {
  private gavySidh: GavySidhRecords = {
    name: "",
    age: 0,
    mobileNo: '',
    email: '',
    gender: 'Female',
    workingArea: 'Gau shala nirman',
    profession: 'IT MNC',
    address: {
      locality: 'Kath Mandi',
      state: 'Haryana',
      city: 'Sonipat',
      pincode: 121121
    },
    isFullTime: true
  };
  public states: string[];
  public cities: string[];
  @ViewChild("saveGavySidh") form: any;

  constructor(private data: DataControllerService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      // Parse list of selected gavysidh and create a page.
      let records = params["records"];
      if(records){
        this.gavySidh = JSON.parse(params["records"]); 
      }
    });  
  }

  ngOnInit() {
    this.states = Constants.getStates();
    if(this.gavySidh.address.state){
      this.getCities(this.gavySidh.address.state);
    }
  }
  onSubmit({value, valid}){
    if(valid){
      // TODO: add json in data base
      console.log("Data saving code will come here");

      // if we need to clean all fields in form
      // this.form.reset();
      this.router.navigate([""]);
    }else{
      console.log("form is not valid");

    }
  }
  getCities(state){
    this.cities= Constants.getCitiesOfAState(state);
  } 
}
